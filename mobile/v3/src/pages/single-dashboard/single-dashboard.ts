import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Customer } from '../../core/models/customer'
import { GlobalInfoBRL } from '../../core/brl/implementation/globalinfo';
import { GlobalInfo } from '../../core/models/globalinfo';
import { Chart } from 'chart.js';

@IonicPage()
@Component({
  selector: 'page-single-dashboard',
  templateUrl: 'single-dashboard.html',
})
export class SingleDashboardPage {
  @ViewChild('doughnutCanvas') doughnutCanvas;
  @ViewChild('lineCanvas') lineCanvas;
  
  doughnutChart: any;
  lineChart: any;
  drivername: string;
  globalInfo: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public customer: Customer, private globalBRL: GlobalInfoBRL) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SingleDashboardPage');
    console.log(this.customer);

    this.createLineChart();
    this.userGlobalInfo();
  }

  userGlobalInfo() {
    var me = this;
    me.globalBRL.getRecord(new GlobalInfo).then(res => {      
      console.log(res);
      me.globalInfo = res;
      me.drivername = me.globalInfo.strFullName;
    });
  }
  
  randomNumber(min, max) {
      return Math.random() * (max - min) + min;
    }

  randomBar(date, lastClose) {
      var me = this;
      var open = me.randomNumber(lastClose * 0.95, lastClose * 1.05).toFixed(2);
      var close = me.randomNumber(open * 0.95, open * 1.05).toFixed(2);
      
      return {
          t: date.valueOf(),
          y: close
        };
    }

  generateData() {
      var me = this;   
      var date = new Date(); //moment('Jan 01 1990', 'MMM DD YYYY');
      var now = new Date(); //moment();
      var data = [];

        // var unit = document.getElementById('unit').value;
        // for (; data.length < 60 && date.isBefore(now); date = date.clone().add(1, unit)) {
        //     if (date.isoWeekday() <= 5) {
        //         data.push(randomBar(date, data.length > 0 ? data[data.length - 1].y : 30));
        //     }
        // }
        return data
    }

  createDoughnutChart() {
    var me = this;
    me.doughnutChart = new Chart(me.doughnutCanvas.nativeElement, {
        type: 'doughnut',
        data: {
            labels: ["Gas Remains, Empty"],
            datasets: [{
                data: [40,60],
                backgroundColor: [
                    '#f53d3d',
                    '#32db64',
                ],
                borderWidth: 0
            }]
        },
        options: {
            legend: {
                display: false,
                labels: {
                    fontColor: '#fff'
                },
                usePointStyle: true
            },
            title: {
                display: true,
                text: 'Load Item Gauge',
                position: 'bottom',
                fontColor: 'black',
                fontSize: 20
            },
            tooltips: {
                enabled: false
            },
            cutoutPercentage: 25,
            lineHeight: 5,
            onClick: function(event, array) {
                let element = this.getElementAtEvent(event);                
            }
        }

    });
    }

    createLineChart() {
        var me = this;
        var config = {
            type: 'line',
            data: {
                labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                datasets: [{
                    label: 'Unfilled',
                    fill: false,
                    backgroundColor: '#FF6384',
                    borderColor: '#36A2EB',
                    data: [
                        1,
                        5,
                        7,
                        8,
                        15,
                        12,
                        20
                    ],
                }, {
                    label: 'Dashed',
                    fill: false,
                    backgroundColor: '#FF6384',
                    borderColor: '#36A2EB',
                    borderDash: [5, 5],
                    data: [
                        1,
                        3,
                        7,
                        8,
                        15,
                        12,
                        20
                    ],
                }, {
                    label: 'Filled',
                    backgroundColor: '#FF6384',
                    borderColor: '#36A2EB',
                    data: [
                        1,
                        5,
                        7,
                        10,
                        12,
                        15,
                        17
                    ],
                    fill: true,
                }]
            },
            options: {
                responsive: true,
                legend: {
                    display: false,
                },
                title: {
                    display: false,
                    text: ''
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                },
                hover: {
                    mode: 'nearest',
                    intersect: true
                },
                scales: {
                    xAxes: [{
                        display: true,
                        scaleLabel: {
                            display: false,
                            labelString: 'Orders this Week'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: '# of Orders'
                        }
                    }]
                }
            }
        };
    
        me.lineChart = new Chart(me.lineCanvas.nativeElement, config);        
    }

}
