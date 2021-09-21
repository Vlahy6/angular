import { Component, OnInit} from '@angular/core';
import { ApiService } from '../service/apiService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(public apiService: ApiService) {
  }

  ahoj: string = "Jak se máš?";
  buttonOnClick() {
    this.addToArray(this.inputText);
    this.inputText = "";
  }

  addToArray(value: string) {
    this.list.push(value);
  }

  addToArray2(value: string) {
    this.dogs.push(value);
  }

  smazat(index: number) {
    this.list.splice(index, 1);
  }

  smazatpsa(index: number) {
    this.dogs.splice(index, 1);
  }

  inputText = "";

  list: string[] = ["Pepa", "Aneta", "Verča"];
  dogs: string[] = [];

  callCats() {
    this.apiService.getCats().subscribe(
      (response: any) => {
        this.addToArray(response["fact"]);
      }
    );
  }

  obrazek() {
    this.apiService.getDog().subscribe(
      (response: any) => {
        this.addToArray2(response["message"]);
      }
    );
  }

  ngOnInit(){
    console.log(this.list);
  }
}
