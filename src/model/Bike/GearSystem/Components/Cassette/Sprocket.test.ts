import { Sprocket } from '@/model/Bike/GearSystem/Components/Cassette/Sprocket'

describe('Sprocket test', () => {
  it('two sprocket are equal by value', () => {
    const sprocket = new Sprocket(10)

    expect(sprocket.equal(new Sprocket(10))).toBeTruthy()
    expect(sprocket.equal(new Sprocket(12))).toBeFalsy()
  })

  it('compare sprockets', () => {
    const sprocket = new Sprocket(10)

    expect(sprocket.compare(new Sprocket(20))).toBeLessThan(0)
    expect(sprocket.compare(new Sprocket(5))).toBeGreaterThan(0)
    expect(sprocket.compare(new Sprocket(10))).toBe(0)
  })
})
