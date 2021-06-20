import { ChainRing } from '@/model/Bike/GearSystem/Components/CrankSet/ChainRing'
import { Sprocket } from '@/model/Bike/GearSystem/Components/Cassette/Sprocket'
import { CrankSet } from '@/model/Bike/GearSystem/Components/CrankSet/CrankSet'
import { Cassette } from '@/model/Bike/GearSystem/Components/Cassette/Cassette'
import { GearSystem } from '@/model/Bike/GearSystem/GearSystem'
import { Gear } from '@/model/Bike/GearSystem/Gears/Gear'

describe('Bike test', () => {
  it('create new custom bike', () => {
    const crankSet = new CrankSet(new ChainRing(32), new ChainRing(48))
    const cassette = new Cassette(
      new Sprocket(15),
      new Sprocket(18),
      new Sprocket(21)
    )

    const gearSystem = new GearSystem(crankSet, cassette)

    expect(gearSystem.crankSet).toBe(crankSet)
    expect(gearSystem.cassette).toBe(cassette)
    expect(gearSystem.gears).toHaveLength(6)

    expect(
      gearSystem.easiestGear.equal(
        new Gear(new ChainRing(32), new Sprocket(21))
      )
    ).toBeTruthy()

    expect(
      gearSystem.hardestGear.equal(
        new Gear(new ChainRing(48), new Sprocket(15))
      )
    ).toBeTruthy()
  })
})
