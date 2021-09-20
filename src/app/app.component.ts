import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ahoj: string = "Jak se máš?";
  buttonOnClick() {
    this.list.push(this.inputText);
    this.inputText = "";
  }

  smazat(index: number) {
    this.list.splice(index, 1);
  }

  inputText = "";
  
  list: string[] = ["Pepa", "Aneta", "Verča"];

  ngOnInit(){
    console.log(this.list);
  }
}
