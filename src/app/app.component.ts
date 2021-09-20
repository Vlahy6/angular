import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ahoj: string = "Jak se máš?";
  buttonOnClick() {
    console.log("Klik");
  }

  inputText = "";


  ngOnInit(){
    console.log("Hello world");
  }
}
