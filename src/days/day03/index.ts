// Part 1
const part1 = async (input: string) => {
  const lines = input.split('\n').filter(Boolean)

  let res = 0
  for (const line of lines) {
    const digits = line
      .split('')
      .map((d) => parseInt(d))
      .filter((d) => Number.isInteger(d))
    for (let i = 9; i > 0; i--) {
      const firstBiggestNumberIndex = digits.indexOf(i)
      if (firstBiggestNumberIndex < 0) {
        continue
      }

      if (firstBiggestNumberIndex === digits.length - 1) {
        digits.pop()
        res += digits.toSorted((a, b) => b - a)[0]! * 10 + i
        break
      }

      const subDigits = digits.toSpliced(0, firstBiggestNumberIndex + 1)
      res += i * 10 + subDigits.toSorted((a, b) => b - a)[0]!
      break
    }
  }

  return res
}
// Part 2
const part2 = async (input: string) => {
  const lines = input.split('\n').filter(Boolean)

  let res = 0
  for (const line of lines) {
    const digits = line
      .split('')
      .map((d) => parseInt(d))
      .filter((d) => Number.isInteger(d))

    const result: number[] = []
    const toSelect = 12
    let start = 0

    for (let i = 0; i < toSelect; i++) {
      const remainingDigits = toSelect - i - 1
      let maxDigit = -1
      let maxIndex = -1

      // Look for the largest possible digit in the remaining range
      for (let j = start; j <= digits.length - remainingDigits - 1; j++) {
        if (digits[j]! > maxDigit) {
          maxDigit = digits[j]!
          maxIndex = j
        }
      }

      result.push(maxDigit)
      start = maxIndex + 1
    }

    res += parseInt(result.join(''), 10)
  }

  return res
}

export { part1, part2 }
