import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    contentHidden = true;
    clicks = [];

    toggleContent() {
        this.contentHidden = !this.contentHidden;
    }
    addClick() {
        this.clicks.push(new Date());
    }
}
