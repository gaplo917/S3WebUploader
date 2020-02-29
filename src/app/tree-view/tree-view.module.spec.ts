import { TreeViewModule } from 'src/app/tree-view/tree-view.module'

describe('TreeViewModule', () => {
  let treeViewModule: TreeViewModule

  beforeEach(() => {
    treeViewModule = new TreeViewModule()
  })

  it('should create an instance', () => {
    expect(treeViewModule).toBeTruthy()
  })
})
