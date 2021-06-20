import { Gear } from '@/model/Bike/GearSystem/Gears/Gear'
import { Wheel } from '@/model/Bike/Wheel'

export class GearDevelopment {
  readonly #gear: Gear
  readonly #wheel: Wheel

  constructor(gear: Gear, wheel: Wheel) {
    this.#gear = gear
    this.#wheel = wheel
  }

  get value(): number {
    return this.#gear.ratio.value * this.#wheel.circumference
  }

  get gear(): Gear {
    return this.#gear
  }

  get wheel(): Wheel {
    return this.#wheel
  }
}
