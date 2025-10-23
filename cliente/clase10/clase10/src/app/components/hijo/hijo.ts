import { Component, Input, OnDestroy, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hijo',
  imports: [],
  templateUrl: './hijo.html',
  styleUrl: './hijo.css'
})
export class Hijo implements OnInit, OnDestroy, OnChanges{
  @Input() nombre='';

  constructor() {
    console.log('constructor - hijo');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges - hijo');
  }

  ngOnInit(): void {
    console.log('ngOnInit - hijo');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy - hijo');
  }
}
