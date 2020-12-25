import { HttpClient } from "@angular/common/http";
import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  static JSON_URL = "https://bi.syncfusion.com/northwindservice/api/orders";

  headers: string[];
  items: object[];

  classForItemHeaderValue = {
    ShipCountry: {
      France: "bg-red",
      Germany: "bg-green"
    },
    ShipCity: {
      "Rio de Janeiro": "bg-yellow"
    }
  };

  constructor(httpClient: HttpClient) {
    httpClient.get<any>(AppComponent.JSON_URL).subscribe(
      json => {
        this.createTable(json);
      },
      err => console.log
    );
  }

  createTable(json: any): void {
    // var count = json.Count;
    this.headers = [];
    var items = json.Items;
    let item;
    let key;
    for (item of items) {
      for (key in item) {
        if (!this.headers.includes(key)) {
          this.headers.push(key);
        }
      }
    }
    this.items = items;
  }

  getClass(item: object, header: string) {
    if (this.classForItemHeaderValue[header]) {
      return this.classForItemHeaderValue[header][item[header]];
    }
  }

  openItemModal(item){

  }
}
