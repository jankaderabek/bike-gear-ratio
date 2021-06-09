export class ChainRing {
  readonly #teethes: number

  constructor(teethes: number) {
    this.#teethes = teethes
  }

  get teethes(): number {
    return this.#teethes
  }
}
