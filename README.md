# minimum bounding square distance

<!-- Minimum Bounding square distance -->

## minsquare

This module calculates the minimum bounding square by distance that would contain a closed geometric shape input.

## clarification

turfjs is a very good javascript package for geometric calculations and also includes a square function but, it outputs a square in degrees which are approximately square in distance at the equator but much more distorted at the poles and as such is not suitable for projections to screens.
Calculating the minimum square is particularly useful in scaling a shape by a factor of 2.

This outputs geoJson square of the bounds with equal length and width in miles.

**Parameters**

- `geoJson`

**Examples**

```javascript
import { minSquare } from 'minimumboundingsquare'
var geo = {
  type: 'Feature',
  properties: { id: '38e3d' },
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

var minsquared = minSquare(geo)
```

Returns geoJson of a square surrounding `bbox`

[1]: https://tools.ietf.org/html/rfc7946#section-5

---

### Installation

Install this module individually:

```sh
$ npm install minimumboundingsquare
```
