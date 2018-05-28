import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    username = '';
    buttonDisabled = true;

    onResetUsername(event: Event) {
        this.username = '';
        this.checkButtonStatus();
    }

    checkButtonStatus() {
        if (this.username !== '') {
            this.buttonDisabled = false;
        } else {
            this.buttonDisabled = true;
        }
    }
}
