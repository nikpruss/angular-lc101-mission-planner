import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {

  experiments: string[] = ["Mars soil sample", "Plant growth in habitat", "Human bone density"];

  constructor() { }

  ngOnInit() {
  }

  addEx(exNewName){
    this.experiments.push(exNewName);
  }

  remove(member: string) {
    let index = this.experiments.indexOf(member);
    this.experiments.splice(index, 1);
  }

}
