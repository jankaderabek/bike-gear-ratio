import { CrankSet } from '@/model/Bike/Components/CrankSet/CrankSet'
import { Cassette } from '@/model/Bike/Components/Cassette/Cassette'
import { Gear } from '@/model/Bike/Gears/Gear'

export class Bike {
  readonly #crankSet: CrankSet
  readonly #cassette: Cassette

  constructor(crankSet: CrankSet, cassette: Cassette) {
    this.#cassette = cassette
    this.#crankSet = crankSet
  }

  get Bike(): Gear[] {
    const Bike: Gear[] = []

    for (const chainRing of this.#crankSet.chainRings) {
      for (const sprocket of this.#cassette.sprockets) {
        Bike.push(new Gear(chainRing, sprocket))
      }
    }

    return Bike
  }

  get crankSet(): CrankSet {
    return this.#crankSet
  }

  get cassette(): Cassette {
    return this.#cassette
  }
}
