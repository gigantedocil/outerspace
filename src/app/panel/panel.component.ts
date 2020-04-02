import { Component, OnInit } from "@angular/core";
import { PanelService } from "./panel.service";

@Component({
  selector: "app-panel",
  templateUrl: "./panel.component.html",
  styleUrls: ["./panel.component.scss"]
})
export class PanelComponent implements OnInit {
  constructor(private panelService: PanelService) {}

  country: any = {};

  ngOnInit() {}

  onMakeRequest() {
    this.panelService.MakeRequest().subscribe(x => {
      this.country = x[0];
    });
  }
}
