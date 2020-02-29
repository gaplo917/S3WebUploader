import { FolderBrowserModule } from 'src/app/folder-browser/folder-browser.module'

describe('FolderBrowserModule', () => {
  let folderBrowserModule: FolderBrowserModule

  beforeEach(() => {
    folderBrowserModule = new FolderBrowserModule()
  })

  it('should create an instance', () => {
    expect(folderBrowserModule).toBeTruthy()
  })
})
