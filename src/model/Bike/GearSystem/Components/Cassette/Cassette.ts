import { Sprocket } from '@/model/Bike/GearSystem/Components/Cassette/Sprocket'

export class Cassette {
  readonly #sprockets: Sprocket[]

  constructor(...sprockets: Sprocket[]) {
    this.#sprockets = sprockets.sort((a, b) => a.compare(b))
  }

  get sprockets(): Sprocket[] {
    return [...this.#sprockets]
  }

  get smallest(): Sprocket {
    return this.#sprockets[0]
  }

  get biggest(): Sprocket {
    return this.#sprockets[this.#sprockets.length - 1]
  }
}
