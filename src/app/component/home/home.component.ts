import { Component } from '@angular/core';
import { SubscriptionsService } from '../../services/subscriptions.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  subscriptions: any[] = [];

  constructor(private subscriptionsService: SubscriptionsService) { }

  ngOnInit(): void {
    this.subscriptionsService.getSubscriptions().subscribe(data => {
      this.subscriptions = data;
      console.log(this.subscriptions)
    });
  }

}