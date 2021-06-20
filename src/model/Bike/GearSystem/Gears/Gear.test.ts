import { Gear } from '@/model/Bike/GearSystem/Gears/Gear'
import { ChainRing } from '@/model/Bike/GearSystem/Components/CrankSet/ChainRing'
import { Sprocket } from '@/model/Bike/GearSystem/Components/Cassette/Sprocket'
import { GearRatio } from '@/model/Bike/GearSystem/Gears/GearRatio'

describe('Gear test', () => {
  it('construct specific gear with chain ring and sprocket', () => {
    const chainRing = new ChainRing(48)
    const sprocket = new Sprocket(15)

    const gear = new Gear(chainRing, sprocket)

    expect(gear.chainRing).toBe(chainRing)
    expect(gear.sprocket).toBe(sprocket)
    expect(gear.ratio).toBeInstanceOf(GearRatio)
  })
})
