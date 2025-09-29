import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  nama = "Awang Surya Ramadhan";
  nim = "232102578";
  title = "Angular Bootstrap";
}
