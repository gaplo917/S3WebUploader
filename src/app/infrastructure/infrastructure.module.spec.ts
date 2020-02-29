import { InfrastructureModule } from 'src/app/infrastructure/infrastructure.module'

describe('InfrastructureModule', () => {
  let infrastructureModule: InfrastructureModule

  beforeEach(() => {
    infrastructureModule = new InfrastructureModule()
  })

  it('should create an instance', () => {
    expect(infrastructureModule).toBeTruthy()
  })
})
