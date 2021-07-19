import Benchmark from 'benchmark'
import { minSquare } from './index.js'

var poly = {
  type: 'Feature',
  properties: { object: 'one' },
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [101.0, 0.0],
        [102.0, 0.0],
        [102.0, 1.0],
        [101.0, 1.0],
        [101.0, 0.0],
      ],
    ],
  },
}

var suite = new Benchmark.Suite('square')
suite
  .add('square', function () {
    minSquare(poly)
  })
  .on('cycle', function (event) {
    // eslint-disable-next-line no-undef
    console.log(String(event.target))
  })
  .run()
