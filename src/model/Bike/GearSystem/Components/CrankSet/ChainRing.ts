export class ChainRing {
  readonly #teethes: number

  constructor(teethes: number) {
    this.#teethes = teethes
  }

  get teethes(): number {
    return this.#teethes
  }

  compare(to: this): number {
    return this.#teethes - to.teethes
  }

  equal(to: this): boolean {
    return this.#teethes === to.teethes
  }
}
