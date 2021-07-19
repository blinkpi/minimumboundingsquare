import distance from '@turf/distance'
import destination from '@turf/destination'
import center from '@turf/center'
import bbox from '@turf/bbox'
import { polygon } from '@turf/helpers'

export const square = (centerPt, radius) => {
  const cross = Math.sqrt(2 * radius ** 2)
  const coordinates = []

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 4; i++) {
    coordinates.push(
      destination(centerPt, cross, (i * -360) / 4 + 45, {}).geometry.coordinates
    )
  }
  coordinates.push(coordinates[0])

  return polygon([coordinates], {})
}

/**
 * calculates the minimum bounding square by distance
 * @param {*} geoFeature
 * @returns Bbox https://datatracker.ietf.org/doc/html/rfc7946#section-5
 */
export function minSquare(geoFeature) {
  /**
   * calculate the minimum bounding box that would contain geo feature.
   * @return a bounding box. i.e west, south, east, north order of the coordinates
   */
  const geoJsonboundBox = bbox(geoFeature)
  const west = Number(geoJsonboundBox[0])
  const south = Number(geoJsonboundBox[1])
  const east = Number(geoJsonboundBox[2])
  const north = Number(geoJsonboundBox[3])

  // equal length of box
  const horizontalDistance = distance(geoJsonboundBox.slice(0, 2), [
    east,
    south,
  ])
  const verticalDistance = distance(geoJsonboundBox.slice(0, 2), [west, north])
  const radius = Math.sqrt(verticalDistance ** 2 + horizontalDistance ** 2) / 2
  const centerCoord = center(geoFeature)
  return square(centerCoord, radius)
}
