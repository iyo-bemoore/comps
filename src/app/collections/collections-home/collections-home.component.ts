import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-collections-home",
  templateUrl: "./collections-home.component.html",
  styleUrls: ["./collections-home.component.css"]
})
export class CollectionsHomeComponent {
  data = [
    { name: "jason", age: 36, job: "engineer" },
    { name: "bale", age: 25, job: "engineer" },
    { name: "json", age: 29, job: "designer" }
  ];
  headers = [
    { key: "name", label: "Name" },
    { key: "age", label: "Age" },
    { key: "job", label: "Job" }
  ];
  constructor() {}
}
