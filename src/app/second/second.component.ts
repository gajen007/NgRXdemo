import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  fromStore:number=0;
  constructor(private store: Store<{ count: number }>) {
    this.store.select('count').subscribe((fromStore:number) => { 
      this.fromStore = fromStore;
    });
  }
  ngOnInit(): void {
  }
}
