import { CrankSet } from '@/model/Bike/GearSystem/Components/CrankSet/CrankSet'
import { ChainRing } from '@/model/Bike/GearSystem/Components/CrankSet/ChainRing'

describe('Crank set test', () => {
  it('create new crank set with chain rings', () => {
    const crankSet = new CrankSet(new ChainRing(32), new ChainRing(48))

    expect(crankSet.chainRings).toHaveLength(2)
    expect(crankSet.smallest.equal(new ChainRing(32))).toBeTruthy()
    expect(crankSet.biggest.equal(new ChainRing(48))).toBeTruthy()
  })

  it('has correct order', () => {
    const crankSet = new CrankSet(new ChainRing(48), new ChainRing(32))

    expect(crankSet.chainRings).toHaveLength(2)
    expect(crankSet.chainRings[0].equal(new ChainRing(32))).toBeTruthy()
    expect(crankSet.chainRings[1].equal(new ChainRing(48))).toBeTruthy()
  })
})
