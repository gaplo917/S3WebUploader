import { Pipe, PipeTransform } from '@angular/core'

const KB = 1000
const MB = KB * 1000
const GB = MB * 1000

@Pipe({
  name: 'fileSize',
})
export class FileSizePipe implements PipeTransform {
  transform(value: number): any {
    const num = Number(value)
    if (num > GB) {
      return `${(num / GB).toFixed(2)} GB`
    } else if (num > MB) {
      return `${(num / MB).toFixed(2)} MB`
    } else if (num > KB) {
      return `${(num / KB).toFixed(2)} kB`
    } else {
      return `${num} B`
    }
  }
}
