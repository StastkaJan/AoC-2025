export const getAdjacentPosition = (matrix: string[][], row: number, column: number) => {
  return [
    matrix[row - 1]?.[column - 1],
    matrix[row - 1]?.[column],
    matrix[row - 1]?.[column + 1],
    matrix[row]?.[column - 1],
    matrix[row]?.[column + 1],
    matrix[row + 1]?.[column - 1],
    matrix[row + 1]?.[column],
    matrix[row + 1]?.[column + 1]
  ]
}
