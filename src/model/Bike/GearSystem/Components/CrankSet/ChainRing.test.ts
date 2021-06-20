import { ChainRing } from '@/model/Bike/GearSystem/Components/CrankSet/ChainRing'

describe('Chain ring test', () => {
  it('two chaing rings are equal by value', () => {
    const sprocket = new ChainRing(48)

    expect(sprocket.equal(new ChainRing(48))).toBeTruthy()
    expect(sprocket.equal(new ChainRing(32))).toBeFalsy()
  })

  it('compare chain rings', () => {
    const sprocket = new ChainRing(48)

    expect(sprocket.compare(new ChainRing(50))).toBeLessThan(0)
    expect(sprocket.compare(new ChainRing(32))).toBeGreaterThan(0)
    expect(sprocket.compare(new ChainRing(48))).toBe(0)
  })
})
