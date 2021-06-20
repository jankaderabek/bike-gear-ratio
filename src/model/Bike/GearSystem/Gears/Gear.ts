import { ChainRing } from '@/model/Bike/GearSystem/Components/CrankSet/ChainRing'
import { Sprocket } from '@/model/Bike/GearSystem/Components/Cassette/Sprocket'
import { GearRatio } from '@/model/Bike/GearSystem/Gears/GearRatio'

export class Gear {
  readonly #chainRing: ChainRing
  readonly #sprocket: Sprocket

  constructor(chainRing: ChainRing, sprocket: Sprocket) {
    this.#chainRing = chainRing
    this.#sprocket = sprocket
  }

  get ratio(): GearRatio {
    return new GearRatio(this)
  }

  get chainRing(): ChainRing {
    return this.#chainRing
  }

  get sprocket(): Sprocket {
    return this.#sprocket
  }

  equal(to: Gear): boolean {
    if (!this.#sprocket.equal(to.sprocket)) {
      return false
    }

    if (!this.#chainRing.equal(to.chainRing)) {
      return false
    }

    return true
  }
}
