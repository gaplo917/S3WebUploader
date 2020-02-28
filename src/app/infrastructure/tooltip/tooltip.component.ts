/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { Component, OnInit, ElementRef, Input, ViewChild } from '@angular/core'

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
})
export class TooltipComponent implements OnInit {
  @Input() tooltipTitle = ''
  @Input() tooltipPlacement = ''
  @Input() elemRect: any
  @Input() delay: number
  @ViewChild('tp') private tp: ElementRef
  @ViewChild('arrow') private arrow: ElementRef
  private aX = '0'
  private X = '0'
  private aY = '0'
  private Y = '0'
  private show = false
  private get boundingRect() {
    return this.tp.nativeElement.getBoundingClientRect()
  }

  private get arrowRect() {
    return this.arrow.nativeElement.getBoundingClientRect()
  }

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      const centerX = this.elemRect.x + this.elemRect.width / 2
      const centerY = this.elemRect.y + this.elemRect.height / 2
      const tpRect = this.boundingRect
      const tpWidth = tpRect.width
      const tpHeight = tpRect.height
      if (this.tooltipPlacement === 'top') {
        this.X = `${centerX - tpWidth / 2}`
        this.Y = `${centerY - this.elemRect.height / 2 - tpHeight}`
        this.aX = `${tpWidth / 2 - this.arrowRect.width / 2}`
      } else if (this.tooltipPlacement === 'left') {
        this.X = `${centerX - tpWidth - this.elemRect.width / 2}`
        this.Y = `${centerY - tpHeight / 2}`
        this.aY = `${tpHeight / 2 - this.arrowRect.height / 2}`
      } else if (this.tooltipPlacement === 'bottom') {
        this.X = `${centerX - tpWidth / 2}`
        this.Y = `${centerY + tpHeight / 2}`
        this.aX = `${tpWidth / 2 - this.arrowRect.width / 2}`
      } else if (this.tooltipPlacement === 'right') {
        this.X = `${centerX + this.elemRect.width / 2}`
        this.Y = `${centerY - tpHeight / 2}`
        this.aY = `${tpHeight / 2 - this.arrowRect.height / 2}`
      }
    }, 0)
    setTimeout(() => {
      this.show = true
    }, this.delay * 1000)
  }
}
