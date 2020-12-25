import { Component, Input, OnInit } from "@angular/core";
import { NgbModal, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-item-modal",
  templateUrl: "./item-modal.component.html",
  styleUrls: ["./item-modal.component.css"]
})
export class ItemModalComponent implements OnInit {
  @Input()
  item: any;

  constructor(public modal: NgbActiveModal) {}

  ngOnInit(): void {}
}
