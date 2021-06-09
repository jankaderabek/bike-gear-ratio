import { Sprocket } from '@/model/Bike/Components/Cassette/Sprocket'
import { Cassette } from '@/model/Bike/Components/Cassette/Cassette'

describe('Cassette test', () => {
  it('create new cassette with sprockets', () => {
    const cassette = new Cassette(
      new Sprocket(15),
      new Sprocket(18),
      new Sprocket(21)
    )

    expect(cassette.sprockets).toHaveLength(3)
  })
})
