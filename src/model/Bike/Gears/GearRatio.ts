import { Gear } from '@/model/Bike/Gears/Gear'

export class GearRatio {
  readonly #gear: Gear

  constructor(gear: Gear) {
    this.#gear = gear
  }

  get ratio(): number {
    return this.#gear.chainRing.teethes / this.#gear.sprocket.teethes
  }

  get gear(): Gear {
    return this.#gear
  }
}
