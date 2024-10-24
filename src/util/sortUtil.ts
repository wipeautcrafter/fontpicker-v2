import leven from 'leven'

import type { FontFamily } from '../helpers/FontFamily'
import type { Criterion, Metric } from '../types/translations'
import type { Filters } from '../types/util'

export const familySort = (a: FontFamily, b: FontFamily, key: Criterion) => {
  // direct properties
  if (key === 'name') return a.name.localeCompare(b.name)
  if (key === 'popularity') {
    if (a.popularity === undefined && b.popularity === undefined) return 0
    if (a.popularity === undefined) return Infinity
    if (b.popularity === undefined) return -Infinity
    return a.popularity - b.popularity
  }

  // metrics properties
  if (a.metrics === undefined && b.metrics === undefined) return 0
  if (a.metrics === undefined) return Infinity
  if (b.metrics === undefined) return -Infinity

  if (key === 'complexity') return b.metrics.complexity - a.metrics.complexity
  if (key === 'curvature') return b.metrics.curvature - a.metrics.curvature
  if (key === 'thickness') return b.metrics.thickness - a.metrics.thickness
  if (key === 'width') return b.metrics.width - a.metrics.width

  // fallback
  return 0
}

const compareMetric = (value: number | undefined, target: Metric) => {
  if (target === 'all') return true
  if (value === undefined) return false
  return value === parseFloat(target)
}

export const familyFilter = (a: FontFamily, filters: Filters) => {
  // direct properties
  if (filters.name) {
    const difference = leven(a.name.toLowerCase(), filters.name.toLowerCase())
    const threshold = [...a.name].length - [...filters.name].length
    if (difference > threshold) return false
  }

  if (a.subsets && filters.subset !== 'all' && !a.subsets.includes(filters.subset)) return false
  if (a.category && !filters.categories.includes(a.category)) return false

  // metrics properties
  if (!compareMetric(a.metrics?.width, filters.width)) return false
  if (!compareMetric(a.metrics?.complexity, filters.complexity)) return false
  if (!compareMetric(a.metrics?.curvature, filters.curvature)) return false
  if (!compareMetric(a.metrics?.thickness, filters.thickness)) return false

  return true
}
