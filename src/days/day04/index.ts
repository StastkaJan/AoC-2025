import { getAdjacentPosition } from '@util/matrix'

// Part 1
const part1 = async (input: string) => {
  const matrix = input
    .split('\n')
    .filter(Boolean)
    .map((line) => line.split(''))

  let res = 0
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i]!.length; j++) {
      if (matrix[i]?.[j] == null || matrix[i]?.[j] !== '@') {
        continue
      }

      const adjacentsRollsOfPaper = getAdjacentPosition(matrix, i, j).filter((p) => p === '@')
      if (adjacentsRollsOfPaper.length < 4) {
        res++
      }
    }
  }

  return res
}

// Part 2
const part2 = async (input: string) => {
  const matrix = input
    .split('\n')
    .filter(Boolean)
    .map((line) => line.split(''))

  let res = 0
  let removedPositions = []
  do {
    for (const toRemove of removedPositions) {
      matrix[toRemove![0]!]![toRemove![1]!] = '.'
    }

    removedPositions = []

    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i]!.length; j++) {
        if (matrix[i]?.[j] == null || matrix[i]?.[j] !== '@') {
          continue
        }

        const adjacentsRollsOfPaper = getAdjacentPosition(matrix, i, j).filter((p) => p === '@')
        if (adjacentsRollsOfPaper.length < 4) {
          res++
          removedPositions.push([i, j])
        }
      }
    }
  } while (removedPositions.length > 0)

  return res
}

export { part1, part2 }
