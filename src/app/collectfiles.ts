/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { UploadItem } from 'src/app/aws-s3/upload-item'

export function collectFiles(item, path, items: UploadItem[]): Promise<UploadItem[]> {
  path = path || ''
  if (item.isFile) {
    const p = new Promise<UploadItem[]>((resolve, reject) => {
      item.file(function(file) {
        resolve([new UploadItem(file, path)])
      })
    })
    return p
  } else if (item.isDirectory) {
    const dirReader = item.createReader()
    const p = new Promise<UploadItem[]>((resolve, reject) => {
      const promises = []
      dirReader.readEntries(function(entries) {
        for (let i = 0; i < entries.length; i++) {
          promises.push(collectFiles(entries[i], path + item.name + '/', items))
        }
        Promise.all(promises).then(results => {
          results.forEach(r => {
            items = items.concat(r)
          })
          resolve(items)
        })
      })
    })
    return p
  } else {
    return Promise.reject(new Error('Not a file or directory'))
  }
}
