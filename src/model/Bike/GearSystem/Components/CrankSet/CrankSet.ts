import { ChainRing } from '@/model/Bike/GearSystem/Components/CrankSet/ChainRing'

export class CrankSet {
  readonly #chainRings: ChainRing[]

  constructor(...chainRings: ChainRing[]) {
    this.#chainRings = chainRings.sort((a, b) => a.compare(b))
  }

  get chainRings(): ChainRing[] {
    return this.#chainRings
  }

  get smallest(): ChainRing {
    return this.#chainRings[0]
  }

  get biggest(): ChainRing {
    return this.#chainRings[this.#chainRings.length - 1]
  }
}
