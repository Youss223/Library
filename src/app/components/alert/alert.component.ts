import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit, OnDestroy {

  private subscription!: Subscription;
  message!: any;

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy() {
      this.subscription.unsubscribe();
  }

}
