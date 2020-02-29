import { JobViewModule } from 'src/app/job-view/job-view.module'

describe('JobViewModule', () => {
  let jobViewModule: JobViewModule

  beforeEach(() => {
    jobViewModule = new JobViewModule()
  })

  it('should create an instance', () => {
    expect(jobViewModule).toBeTruthy()
  })
})
