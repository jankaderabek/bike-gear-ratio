import { GearRatio } from '@/model/Bike/Gears/GearRatio'
import { Gear } from '@/model/Bike/Gears/Gear'
import { ChainRing } from '@/model/Bike/Components/CrankSet/ChainRing'
import { Sprocket } from '@/model/Bike/Components/Cassette/Sprocket'

describe('Gear ratio test', () => {
  it('should calculate correct gear ratio between chain ring and sprocket', () => {
    const gear = new Gear(new ChainRing(48), new Sprocket(15))
    const gearRatio = new GearRatio(gear)

    expect(gearRatio.gear).toBe(gear)
    expect(gearRatio.ratio).toEqual(3.2)
  })
})
