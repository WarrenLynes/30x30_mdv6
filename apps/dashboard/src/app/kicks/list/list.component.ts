import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Shoe } from '@mdv6/core-data';

@Component({
  selector: 'mdv6-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() data: Shoe[];
  @Input() selected: Shoe;
  @Output() delete = new EventEmitter();
  @Output() selectt = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
