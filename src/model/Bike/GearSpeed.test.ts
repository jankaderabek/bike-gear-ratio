import { Gear } from '@/model/Bike/GearSystem/Gears/Gear'
import { ChainRing } from '@/model/Bike/GearSystem/Components/CrankSet/ChainRing'
import { Sprocket } from '@/model/Bike/GearSystem/Components/Cassette/Sprocket'
import { Wheel } from '@/model/Bike/Wheel'
import { GearSpeed } from '@/model/Bike/GearSpeed'

describe('Speed for specific gear', () => {
  it('calculate speed for gear at cadence in km/h', () => {
    const gearSpeed = new GearSpeed(
      new Gear(new ChainRing(48), new Sprocket(12)),
      new Wheel(2.1),
      90
    )

    expect(gearSpeed.value).toBe(45.36)
  })
})
