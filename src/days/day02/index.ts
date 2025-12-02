// Part 1
const part1 = async (input: string) => {
  const data = input.split(',').filter(Boolean)

  let res = 0
  for await (const i of data) {
    const [start, end] = i.split('-')

    // remove odd digit counts
    const numbers = Array.from({ length: +end! - +start! + 1 }, (_, i) => +start! + i).filter(
      (num) => String(num).length % 2 === 0
    )
    for await (const num of numbers) {
      const numberAsString = String(num)
      const firstHalf = numberAsString.substring(0, numberAsString.length / 2)
      if (numberAsString !== firstHalf.repeat(2)) continue

      res += num
    }
  }

  return res
}

// Part 2
const part2 = async (input: string) => {
  const data = input.split(',').filter(Boolean)

  let res = 0
  for await (const i of data) {
    const [start, end] = i.split('-')

    const numbers = Array.from({ length: +end! - +start! + 1 }, (_, i) => +start! + i)
    for await (const num of numbers) {
      const numberAsString = String(num)
      const numberAsStringLength = numberAsString.length
      const halfLength = Math.floor(numberAsStringLength / 2)

      let isValid = false
      for (let j = 1; j <= halfLength; j++) {
        const substring = numberAsString.substring(0, j)
        if (numberAsString !== substring.repeat(numberAsStringLength / substring.length)) continue
        isValid = true
        break
      }

      if (!isValid) continue

      res += num
    }
  }

  return res
}

export {
  part1,
  part2,
}
