import { Gear } from '@/model/Bike/GearSystem/Gears/Gear'

export class GearRatio {
  readonly #gear: Gear

  constructor(gear: Gear) {
    this.#gear = gear
  }

  get value(): number {
    return this.#gear.chainRing.teethes / this.#gear.sprocket.teethes
  }

  get gear(): Gear {
    return this.#gear
  }
}
