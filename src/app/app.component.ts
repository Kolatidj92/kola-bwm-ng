import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  componentTitle = "Je suis un titre de composant";
  /*title = 'app';*/

  clickHandler() {
    alert("Je suis cliqué");
  }
}
