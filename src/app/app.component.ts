import { Component, OnInit} from '@angular/core';
import { ApiService } from '../service/apiService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(public apiCats: ApiService) {
  }

  ahoj: string = "Jak se máš?";
  buttonOnClick() {
    this.addToArray(this.inputText);
    this.inputText = "";
  }

  addToArray(value: string) {
    this.list.push(value);
  }

  smazat(index: number) {
    this.list.splice(index, 1);
  }

  inputText = "";

  list: string[] = ["Pepa", "Aneta", "Verča"];

  callCats() {
    this.apiCats.getCats().subscribe(
      (response: any) => {
        this.addToArray(response["fact"]);
      }
    );
  }

  ngOnInit(){
    console.log(this.list);
  }
}
