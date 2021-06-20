import { Sprocket } from '@/model/Bike/GearSystem/Components/Cassette/Sprocket'

export class Cassette {
  readonly #sprockets: Sprocket[]

  constructor(...sprockets: Sprocket[]) {
    this.#sprockets = sprockets
  }

  get sprockets(): Sprocket[] {
    return [...this.#sprockets]
  }
}
