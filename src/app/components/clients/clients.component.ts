import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { trigger,state,style,transition,animate } from '@angular/animations';
import { ClientService } from '../../services/client.service';
import {StockService } from '../../services/stock.service';
import { LiveMarketDataService } from '../../services/live-market-data.service';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
  animations: [
    trigger('rowExpansionTrigger', [
        state('void', style({
            transform: 'translateX(-10%)',
            opacity: 0
        })),
        state('active', style({
            transform: 'translateX(0)',
            opacity: 1
        })),
        transition('* <=> *', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
    ])
]
})
export class ClientsComponent implements OnInit {

  //state Variables of Component

  clients:any;      //Store client Details
  cols: any[];      //Columns of table
  first:number=0;   //Attribute for p-table in primeng
  stocks:any;       //Store the trade details
  cols1:any[];      //Columns of nested table
  ChartDict={};     //Dictonary:Store chart data
  StockDict={};     //Dictonary:Store Live prices for each stock
  Profits={};       //Dictonary:Caculated profit for each client
  temp:any;         //temporary variable

  //Configure the state variable of navbar2
  flag={
    dash:'0',
    client:'1',
    logout:'0'
  };

  //Configuration of Chart
  type = 'PieChart';
  columns2 = ['Stocks','Qty'];
  options = {
        pieHole:0.5,
        //backgroundColor: '#eaeaea'
        pieSliceTextStyle: {
          color: 'black',
        }
    };
  width = 400;
  height = 400;

  //Injected Services
  constructor(private http: HttpClient,
              private clientService: ClientService,
              private stockService:StockService,
              private livemarketdataservice:LiveMarketDataService)
    { }

  ngOnInit() {

    this.clients=[];
    //Service to get the clients list
    this.clientService.getClient()
                      .subscribe(data => {
                        this.temp=data;
                        this.temp= (this.temp).map(obj => ({...obj,Profit:0}))
                        this.clients=this.temp;
                        //console.log("client",this.clients);
                     });

    //Service to get the trade details of client
    this.stockService.getStocks()
                     .subscribe(data => {
                        this.temp=data;
                        this.temp= (this.temp).map(obj => ({...obj,LivePrice:0}));
                       // console.log("stocks: ",this.temp[0].LivePrice);

                        this.temp = (this.temp).reduce(function (result, a) {
                        result[a.ClientID] = result[a.ClientID] || [];
                        result[a.ClientID].push(a);
                        return result;
                      }, Object.create(null));

                        //console.log("stocks1: ",this.temp);
                        //this.stocks=this.temp;
                      //console.log("Len: ",Object.keys(this.temp).length);
                      for (const st in (this.temp))
                      {
                        //console.log("hello: ",st);
                        let axis=[];
                        (this.temp[st]).map(stok =>
                                              {
                                                axis.push([stok.StockID,stok.Quantity])
                                                this.getProfit(stok);
                                              });
                        this.ChartDict[st]={chrtData:0};
                        this.ChartDict[st].chrtData=axis;
                      }
                      this.stocks=this.temp;
                  });

    //Define the columns of main table
    this.cols = [
          { field: 'ClientID', header: 'ClientID' },
          { field: 'ClientName', header: 'Name' },
          { field:'MobileNo',header:'MobileNo'},
          { field:'Profit',header:'Total Profit'}
        ];

    //Define the columns of nested table
    this.cols1=[
          { field: 'StockID', header: 'Stock' },
          { field: 'Quantity', header: 'Qty' },
          { field:'DateofTrade',header:'Trade-Date'},
          { field:'BuyPrice',header:'Buy-Price'},
          { field:'LivePrice',header:'Market-Price'}
        ];
}

//Definitions of component

//use to set properties of primeng templates
reset() {
      this.first = 0;
    }

//Helper function to get live market price
getProfit(stock)
    {
      this.livemarketdataservice.stockLiveData(stock.StockID)
                                .subscribe(res => {
                      let timeStamp =  res["Time Series (30min)"];
                      let element: any;
                      let profit: any;
                      for(element in timeStamp)
                      {
                        profit = parseFloat(res["Time Series (30min)"][element]["4. close"]);
                        break;
                      }

                      this.StockDict[stock.StockID]=profit;
                      //console.log("sP; ",stock.StockID,this.StockDict[stock.StockID]);
                      if (typeof this.Profits[stock.ClientID] === 'undefined')
                            this.Profits[stock.ClientID]=(stock.Quantity*(profit-stock.BuyPrice));
                      else
                            this.Profits[stock.ClientID]+=(stock.Quantity*(profit-stock.BuyPrice));
                      //console.log("pro: ",stock.ClientID,this.Profits[stock.ClientID]);
                    });
    }


}
