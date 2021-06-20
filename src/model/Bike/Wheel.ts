export class Wheel {
  readonly #circumference: number

  constructor(circumference: number) {
    this.#circumference = circumference
  }

  get circumference(): number {
    return this.#circumference
  }
}
