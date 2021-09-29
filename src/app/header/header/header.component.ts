import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  settingsOpened: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  openSettings() {
    this.settingsOpened = !this.settingsOpened;
  }

}
