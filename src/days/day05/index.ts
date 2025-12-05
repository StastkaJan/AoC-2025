import { mergeRanges } from "@util/array"

// Part 1
const part1 = async (input: string) => {
  const [freshIdRangesLines, ingredientsLines] = input
    .replaceAll('\r', '')
    .split('\n\n')
    .filter(Boolean)
    .map((i) => i.split('\n'))

  let res = 0
  const freshIds: [number, number][] = []
  for (const freshIdsLine of freshIdRangesLines!) {
    const [start, end] = freshIdsLine.split('-').map(i => parseInt(i))
    freshIds.push([start!, end!])
  }

  for (const ingredient of ingredientsLines!) {
    for (const [freshStart, freshEnd] of freshIds){
      const ingredientInt = parseInt(ingredient)
      if (ingredientInt >= freshStart && ingredientInt <= freshEnd){
        res++
        break
      }
    }
  }

  return res
}

// Part 2
const part2 = async (input: string) => {
  const [freshIdRangesLines, _] = input
    .replaceAll('\r', '')
    .split('\n\n')
    .filter(Boolean)
    .map((i) => i.split('\n'))

  let res = 0
  const ranges: [number, number][] = []
  for (const freshIdsLine of freshIdRangesLines!) {
    const [start, end] = freshIdsLine.split('-').map(i => parseInt(i))
    ranges.push([start!, end!])
  }

  const merged = mergeRanges(ranges)
  for (const [start, end] of merged) {
    res += end - start + 1
  }

  return res
}

export { part1, part2 }
