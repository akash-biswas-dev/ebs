import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Button } from "../components/button/button.component";
import { Header } from "../components/header/header.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html'
})
export class App {
}
