import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, catchError, retry } from "rxjs/operators";

export class PanelService {
  constructor(private http: HttpClient) {}

  MakeRequest() {
    return this.http.get("https://get.geojs.io/v1/ip/country.json?ip=8.8.8.8");
  }
}
