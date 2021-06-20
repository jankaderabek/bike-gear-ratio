import { GearSystem } from '@/model/Bike/GearSystem/GearSystem'
import { Wheel } from '@/model/Bike/Wheel'
import { Gear } from '@/model/Bike/GearSystem/Gears/Gear'
import { GearDevelopment } from '@/model/Bike/GearDevelopment'
import { GearSpeed } from '@/model/Bike/GearSpeed'

export class Bike {
  readonly #gearSystem: GearSystem
  readonly #wheel: Wheel

  constructor(gearSystem: GearSystem, wheel: Wheel) {
    this.#gearSystem = gearSystem
    this.#wheel = wheel
  }

  // development for gear index instead of accept gear?
  development(gear: Gear): GearDevelopment {
    return new GearDevelopment(gear, this.wheel)
  }

  speed(gear: Gear, cadence: number): GearSpeed {
    return new GearSpeed(gear, this.wheel, cadence)
  }

  get gearSystem(): GearSystem {
    return this.#gearSystem
  }

  get wheel(): Wheel {
    return this.#wheel
  }
}
