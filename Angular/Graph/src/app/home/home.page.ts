import { Component } from '@angular/core';
import * as Highcharts from "highcharts/highstock";
import { Options, LangOptions } from "highcharts";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  // Highcharts: typeof Highcharts = Highcharts;

  Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {

    lang: {
      noData: "Standard Text",
      customProperty: "https://www.highcharts.com/samples/graphics/sun.png"
    } as LangOptions,
    series: [
      {
        type: 'line',
        pointInterval: 24 * 3600 * 1000,
        data: [1, 2, 3, 4, 5,5,45,45,45,45,45,45,45,45,45,45,3,32,3,2,12]
      }
    ]
  };

}
