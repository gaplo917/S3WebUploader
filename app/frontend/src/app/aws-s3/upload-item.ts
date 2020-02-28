
export class UploadItem {
    originalName = '';
    newName = '';
    path = '';
    file: any;
    constructor(file: any, path) {
      this.file = file;
      this.newName = path + file.name;
      this.originalName = path + file.name;
      this.path = file.path;
    }
}
