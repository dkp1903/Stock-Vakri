import { HostListener, Component, OnInit } from '@angular/core';
import { LiveMarketDataService } from '../../services/live-market-data.service';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import * as tf from '@tensorflow/tfjs';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-candlestick',
  templateUrl: './candlestick.component.html',
  styleUrls: ['./candlestick.component.css']
})
export class CandlestickComponent implements OnInit {
  constructor(private livemarketdataservice: LiveMarketDataService) {
 }
  selectedStock: string = '';
  stocks = [];
  symbol: string;
  name: string;
  mySubscription: any;
  largest: Number;
  defaultStock: string;
  stockDetails = [];
  title = this.selectedStock;
  type = 'CandlestickChart';
  max: Number;
  overAllMax: Number = 0;
  overAllMin: Number = 9999999;
  min: Number;
  maxTime: string;
  minTime: string;
  currStock: string;
  data = [];
  url = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=';
  w = document.documentElement.clientWidth;
  h = document.documentElement.clientHeight;
  columns = ['Timestamp', 'Open', 'High', 'Low', 'Close'];
  options = { candlestick: {
    fallingColor: { strokeWidth: 0, fill: '#a52714' }, // red
    risingColor: { strokeWidth: 0, fill: '#0f9d58' }   // green
  },

  bar: { groupWidth: '100%' },

  hAxis: {
    textStyle: {
      color: 'white'
    },
    format: 'dd-MMM-yyyy'
  },
  legend: {textStyle: {color: 'white'}},
  vAxis: {
    textStyle: {
      color: 'white'
    }
  },
  chartArea: {left:80,top:20,width:'70%',height:'75%'},
backgroundColor: '#000000',} ;
  width = this.w*0.60;
  height = this.h*0.70;
  count = 0;
  no = 0;
  stocker = {};

  linearModel: tf.Sequential;
  prediction :any;
  arr: any = [];
  @HostListener('window:resize', ['$event'])

  selectChangeHandler(event: any) {
    this.selectedStock = event.target.value;

  }

  ngOnInit(): any
{   this.stocks = [
      {symbol: "IBM", name: "IBM"},
      {symbol: "FB", name: "Facebook"},
      {symbol: "WMT", name: "Walmart"},
      {symbol: "SNAP", name: "Snap Inc"},
      {symbol: "AAPL", name: "Apple"},
      {symbol: "NFLX", name: "Netflix"},
      {symbol: "TWTR", name: "Twitter"},
      {symbol: "AMZN", name: "Amazon"},
      {symbol: "SPOT", name: "Spotify"},
      {symbol: "TSLA", name: "Tesla Inc"},
      {symbol: "DAL", name: "Delta Airlines"},
      {symbol: "MSFT", name: "Microsoft"},
      {symbol: "MA", name: "Mastercard"},
];
this.no++;
this.currStock = 'IBM';
this.selectedStock = 'IBM';
this.defaultStock = 'IBM';
this.showChart('IBM', 'CandlestickChart');
}
/*************************************** */
// Prediction
async train(x): Promise<any> {
      //Tensorflow Sequential Model
      this.linearModel = tf.sequential();
      this.linearModel.add(tf.layers.dense({units: 1, inputShape: [1], useBias: true}));
      this.linearModel.compile({loss: 'meanSquaredError', optimizer: tf.train.adam(), metrics: ['mse']});

      let y1 = [];
      /* This does not work.
      // let y = [];
      // for(let i = 1; i < x.length; i++)
      // {
      //   y.push(x[i]);
      // }
      */

      for (let i = 0 ; i < x.length - 1; i++){
          if (x[i + 1] - x[i] > 0) {
              y1[i] = 1;
          }
          else {
            y1[i] = -1;
            }
      }

      const predictOnThis = x.pop();
      const tf_x = tf.tensor1d(x);
      const tf_y = tf.tensor1d(y1);

      const batchSize = 32;
      const epochs = 50;

      await this.linearModel.fit(tf_x, tf_y, {batchSize, epochs, shuffle: true});
      this.predict(predictOnThis);
}

predict(val: number)
{
  const output = this.linearModel.predict(tf.tensor2d([val], [1, 1])) as any;
  let pred = Array.from(output.dataSync())[0];
  // If predicted value less than 0 => Fall in price
  if (pred < 0){
    this.prediction = "Down";
  }
  else {
    this.prediction = "Up";
  }
}
/************** */


// For making Google Chart Responsive -> Captures target window sizq
windowSize(event) {

  this.width = event.target.innerWidth*0.55;
  this.height = event.target.innerHeight*0.6;
  let k = this.currStock;
  this.data = [];
  this.stockDetails = [];
  // Re-rendering the graph of the same stock
  if (k)
    this.showChart(k, 'CandlestickChart');
}
addStock()
{
  this.stocks.push(
    {
      symbol: this.symbol,
      name: this.name
    }
  );
}

catcher(val){

  this.showChart(val, this.type);
}

showChart(val, type) {

      this.no++;
      this.type = type;

      // Calling the data fetch service, with stock symbol as the parameter
      this.livemarketdataservice.stockLiveData(val).subscribe(res => {
      this.currStock = val;

      // Resetting max and min to calculate these for each stock
      this.max = 0;
      this.min = 999999;
      const timeStamp = res['Time Series (30min)'];
      let element: any;
      this.arr = [];

      // Traversing through all timestamps
      for(element in timeStamp){
          if(this.max < parseFloat(res["Time Series (30min)"][element]["4. close"]))
          {
            this.max = parseFloat(res["Time Series (30min)"][element]['4. close']);
            this.maxTime = element;
          }
          if(this.min > parseFloat(res["Time Series (30min)"][element]["4. close"]))
          {
            this.min = parseFloat(res["Time Series (30min)"][element]["4. close"]);
            this.minTime = element;
          }

        this.stockDetails.unshift([
              element.slice(11, 16),
              parseFloat(res["Time Series (30min)"][element]["3. low"]),
              parseFloat(res["Time Series (30min)"][element]["1. open"]),
              parseFloat(res["Time Series (30min)"][element]["4. close"]),
              parseFloat(res["Time Series (30min)"][element]["2. high"]),

      ]);
      // Array for prediction
      this.arr.unshift(parseFloat(res["Time Series (30min)"][element]["4. close"]));
      }
      this.data = this.stockDetails;

      // Prediction
      this.stocker[val] = this.arr;
      this.train(this.stocker[val]);
      // Setting the download URL
      this.url += this.currStock + '&interval=5min&apikey=421KN1U6YLBFSGR4&datatype=csv';


  });
      this.data = [];
      this.stockDetails = [];
      this.url = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=';

}
download(){
  window.location.href = this.url;
}


showLine(){
  this.type = 'LineChart';
}
showCandle(){
  this.type = 'CandlestickChart';
}

}
