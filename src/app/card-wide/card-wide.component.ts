import { Component, OnInit, Input } from '@angular/core';
import { CardWide } from '../models/card-wide';

@Component({
  selector: 'app-card-wide',
  templateUrl: './card-wide.component.html',
  styleUrls: ['./card-wide.component.scss']
})
export class CardWideComponent implements OnInit {
  @Input() data: CardWide | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

}
