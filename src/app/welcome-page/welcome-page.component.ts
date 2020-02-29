import { Component, OnInit } from '@angular/core'
import { SubscriptionComponent } from 'src/app/infrastructure/subscription-component'

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['../page.scss', './welcome-page.component.scss'],
})
export class WelcomePageComponent extends SubscriptionComponent implements OnInit {
  constructor() {
    super()
  }

  ngOnInit() {}
}
