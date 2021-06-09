import { ChainRing } from '@/model/Bike/Components/CrankSet/ChainRing'
import { Sprocket } from '@/model/Bike/Components/Cassette/Sprocket'
import { GearRatio } from '@/model/Bike/Gears/GearRatio'

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
}
