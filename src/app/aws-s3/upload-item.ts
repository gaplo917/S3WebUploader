/* eslint-disable @typescript-eslint/restrict-plus-operands */
export class UploadItem {
  originalName = ''
  newName = ''
  path = ''
  file: any
  constructor(file: any, path: string) {
    this.file = file
    this.newName = path + file.name
    this.originalName = path + file.name
    this.path = file.path
  }
}
