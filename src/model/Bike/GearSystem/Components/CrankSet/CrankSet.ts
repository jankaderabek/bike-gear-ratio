import { ChainRing } from '@/model/Bike/GearSystem/Components/CrankSet/ChainRing'

export class CrankSet {
  readonly #chainRings: ChainRing[]

  constructor(...chainRings: ChainRing[]) {
    this.#chainRings = chainRings
  }

  get chainRings(): ChainRing[] {
    return this.#chainRings
  }
}
