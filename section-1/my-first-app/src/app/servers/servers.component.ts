import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServers = false;
  serverCreationStatus = 'No server was created';
  serverName = 'Testserver';

  constructor() { setTimeout(() => {
      this.allowNewServers = !this.allowNewServers;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
      this.serverCreationStatus = `Server created, its name is ${this.serverName}`
  }

  onUpdateServerName(event: Event) {
      this.serverName = (<HTMLInputElement>event.target).value;
  }

}
