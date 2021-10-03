import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {
  @Input() item: any;
  date!: string;
  constructor() { 
  }

  ngOnInit(): void {
  }

  checkDate() {
    const currentDateInDays: number = Date.now() / 3600000 / 24;
    const itemDateInDays: number = Date.parse(this.item.publishedAt) / 3600000 / 24;
  
    if (currentDateInDays - itemDateInDays < 7) {
      return "#008cff";
    } else {
      if ((currentDateInDays / 12) - (itemDateInDays / 12) <= 1) {
        return "#12b800";
      } else if ((currentDateInDays / 12) - (itemDateInDays / 12) >= 6) {
        return "#ff0000";
      } else {
        return "#e3e3e3";
      }
    }

  }

}
