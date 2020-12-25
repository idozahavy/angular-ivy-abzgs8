import { Component, Input, OnInit } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-item-modal",
  templateUrl: "./item-modal.component.html",
  styleUrls: ["./item-modal.component.css"]
})
export class ItemModalComponent implements OnInit {
  @Input()
  item: any;
  headers = [];

  constructor(public modal: NgbActiveModal) {}

  ngOnInit(): void {}

  public showItem(item): void {
    this.headers = [];
    let key;
    for (key in item) {
      if (!this.headers.includes(key)) {
        this.headers.push(key);
      }
    }
    this.item = item;
  }
}
