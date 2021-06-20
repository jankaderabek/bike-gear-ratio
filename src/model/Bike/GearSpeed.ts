import { Gear } from '@/model/Bike/GearSystem/Gears/Gear'
import { Wheel } from '@/model/Bike/Wheel'
import { GearDevelopment } from '@/model/Bike/GearDevelopment'

export class GearSpeed {
  readonly #MINUTES_IN_HOUR = 60

  readonly #gear: Gear
  readonly #wheel: Wheel
  readonly #cadence: number

  constructor(gear: Gear, wheel: Wheel, cadence: number) {
    this.#gear = gear
    this.#wheel = wheel
    this.#cadence = cadence
  }

  get value(): number {
    return (
      (this.#MINUTES_IN_HOUR *
        this.#cadence *
        new GearDevelopment(this.#gear, this.#wheel).value) /
      1000
    )
  }

  get gear(): Gear {
    return this.#gear
  }

  get wheel(): Wheel {
    return this.#wheel
  }

  get cadence(): number {
    return this.#cadence
  }
}
