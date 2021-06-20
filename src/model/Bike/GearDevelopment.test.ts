import { GearDevelopment } from '@/model/Bike/GearDevelopment'
import { Gear } from '@/model/Bike/GearSystem/Gears/Gear'
import { ChainRing } from '@/model/Bike/GearSystem/Components/CrankSet/ChainRing'
import { Sprocket } from '@/model/Bike/GearSystem/Components/Cassette/Sprocket'
import { Wheel } from '@/model/Bike/Wheel'

describe('Development test', () => {
  it('calculate distance for one chain ring rotation', () => {
    const gearDevelopment = new GearDevelopment(
      new Gear(new ChainRing(48), new Sprocket(12)),
      new Wheel(2.1)
    )

    expect(gearDevelopment.value).toBe(8.4)
  })
})
