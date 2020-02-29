import { Component, OnInit } from '@angular/core'
import { SubscriptionComponent } from 'src/app/infrastructure/subscription-component'
import { HistoriesService } from 'src/app/histories/services/histories.service'

@Component({
  selector: 'app-history-list',
  templateUrl: './history-list.component.html',
  styleUrls: ['./history-list.component.scss'],
})
export class HistoryListComponent extends SubscriptionComponent implements OnInit {
  entries: Array<{ type: string; name: string; time: string; status: string }> = []
  constructor(private histories: HistoriesService) {
    super()
  }

  ngOnInit() {
    this.recordSubscription(
      this.histories.Histories.subscribe(res => {
        this.entries = res
        this.entries.forEach(ent => {
          ent.time = new Date(ent.time).toLocaleString()
        })
      }),
    )
  }
}
