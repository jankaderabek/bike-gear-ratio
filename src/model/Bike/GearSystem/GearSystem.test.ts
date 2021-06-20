import { ChainRing } from '@/model/Bike/GearSystem/Components/CrankSet/ChainRing'
import { Sprocket } from '@/model/Bike/GearSystem/Components/Cassette/Sprocket'
import { CrankSet } from '@/model/Bike/GearSystem/Components/CrankSet/CrankSet'
import { Cassette } from '@/model/Bike/GearSystem/Components/Cassette/Cassette'
import { GearSystem } from '@/model/Bike/GearSystem/GearSystem'

describe('Bike test', () => {
  it('create new custom bike', () => {
    const crankSet = new CrankSet(new ChainRing(32), new ChainRing(48))
    const cassette = new Cassette(
      new Sprocket(15),
      new Sprocket(18),
      new Sprocket(21)
    )

    const bike = new GearSystem(crankSet, cassette)

    expect(bike.crankSet).toBe(crankSet)
    expect(bike.cassette).toBe(cassette)
    expect(bike.gears).toHaveLength(6)
  })
})
