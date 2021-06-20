import { CrankSet } from '@/model/Bike/GearSystem/Components/CrankSet/CrankSet'
import { ChainRing } from '@/model/Bike/GearSystem/Components/CrankSet/ChainRing'

describe('Crank set test', () => {
  it('create new crank set with chain rings', () => {
    const crankSet = new CrankSet(new ChainRing(32), new ChainRing(48))

    expect(crankSet.chainRings).toHaveLength(2)
  })
})
