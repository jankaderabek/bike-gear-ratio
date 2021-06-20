import { CrankSet } from '@/model/Bike/GearSystem/Components/CrankSet/CrankSet'
import { Cassette } from '@/model/Bike/GearSystem/Components/Cassette/Cassette'
import { Gear } from '@/model/Bike/GearSystem/Gears/Gear'

export class GearSystem {
  readonly #crankSet: CrankSet
  readonly #cassette: Cassette

  constructor(crankSet: CrankSet, cassette: Cassette) {
    this.#cassette = cassette
    this.#crankSet = crankSet
  }

  get gears(): Gear[] {
    const gers: Gear[] = []

    for (const chainRing of this.#crankSet.chainRings) {
      for (const sprocket of this.#cassette.sprockets) {
        gers.push(new Gear(chainRing, sprocket))
      }
    }

    return gers
  }

  get easiestGear(): Gear {
    return new Gear(this.#crankSet.smallest, this.#cassette.biggest)
  }

  get hardestGear(): Gear {
    return new Gear(this.#crankSet.biggest, this.#cassette.smallest)
  }

  get crankSet(): CrankSet {
    return this.#crankSet
  }

  get cassette(): Cassette {
    return this.#cassette
  }
}
