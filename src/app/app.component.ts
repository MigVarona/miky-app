import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from "./components/product/product.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [RouterOutlet, ProductComponent]
})
export class AppComponent {
  title = 'miky-app';

  changeTitle() {
    this.title = 'MiKY';
  }
}