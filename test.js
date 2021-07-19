import test from 'tape'
import area from '@turf/area'
import { minSquare } from './index.js'

test('square', function (t) {
  var areas = [
    {
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
    },
    {
      type: 'Feature',
      properties: { object: 'two' },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [100.0, 0.0],
            [101.0, 0.0],
            [101.0, 1.0],
            [100.0, 1.0],
            [100.0, 0.0],
          ],
        ],
      },
    },
  ]

  var bbox1 = areas[0]
  var bbox2 = areas[1]

  var sq1 = minSquare(bbox1)
  var sq2 = minSquare(bbox2)
  var area1 = Math.round(area(sq1))
  var area2 = Math.round(area(sq2))

  t.equal(area1, area2)
  t.end()
})
