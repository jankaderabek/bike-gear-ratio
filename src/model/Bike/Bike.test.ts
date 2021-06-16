import { ChainRing } from '@/model/Bike/Components/CrankSet/ChainRing'
import { Sprocket } from '@/model/Bike/Components/Cassette/Sprocket'
import { Bike } from '@/model/Bike/Bike'
import { CrankSet } from '@/model/Bike/Components/CrankSet/CrankSet'
import { Cassette } from '@/model/Bike/Components/Cassette/Cassette'

describe('Bike test', () => {
  it('create new custom bike', () => {
    const crankSet = new CrankSet(new ChainRing(32), new ChainRing(48))
    const cassette = new Cassette(
      new Sprocket(15),
      new Sprocket(18),
      new Sprocket(21)
    )

    const bike = new Bike(crankSet, cassette)

    expect(bike.crankSet).toBe(crankSet)
    expect(bike.cassette).toBe(cassette)
    expect(bike.gears).toHaveLength(6)
  })
})
