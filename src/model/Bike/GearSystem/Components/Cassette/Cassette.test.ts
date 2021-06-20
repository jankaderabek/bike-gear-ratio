import { Sprocket } from '@/model/Bike/GearSystem/Components/Cassette/Sprocket'
import { Cassette } from '@/model/Bike/GearSystem/Components/Cassette/Cassette'

describe('Cassette test', () => {
  it('create new cassette with sprockets', () => {
    const cassette = new Cassette(
      new Sprocket(15),
      new Sprocket(18),
      new Sprocket(21)
    )

    expect(cassette.sprockets).toHaveLength(3)
    expect(cassette.smallest.equal(new Sprocket(15))).toBeTruthy()
    expect(cassette.biggest.equal(new Sprocket(21))).toBeTruthy()
  })

  it('test correct order', () => {
    const cassette = new Cassette(
      new Sprocket(21),
      new Sprocket(15),
      new Sprocket(18)
    )

    expect(cassette.sprockets[0].equal(new Sprocket(15))).toBeTruthy()
    expect(cassette.sprockets[1].equal(new Sprocket(18))).toBeTruthy()
    expect(cassette.sprockets[2].equal(new Sprocket(21))).toBeTruthy()
  })
})
