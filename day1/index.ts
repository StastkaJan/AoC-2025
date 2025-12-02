import input from './input.txt'
import { trackTime } from '../util/trackTime'
import { logResultWithTime } from '../util/log'

// Part 1
const part1 = async (input: string) => {
  const data = input.split('\n').filter(Boolean)

  const max = 100
  const min = 0
  let pass = 0
  let pos = 50
  for (const i of data) {
    const n = +i.substring(1) * (i[0] === 'L' ? -1 : 1)
    const res = pos + n
    const modulo = res % max
    if (modulo === min) {
      pass++
      pos = min
      continue
    }
    if (res > max) {
      pos = modulo
      continue
    }
    if (res < min) {
      pos = max + modulo
      continue
    }
    pos = res
  }

  return pass
}

// Part 2
const part2 = async (input: string) => {
  const data = input.split('\n').filter(Boolean)

  const max = 100
  const min = 0
  let pos = 50
  let pass = 0
  for (const i of data) {
    const n = +i.substring(1)
    let rotation = n % max
    pass += (n / max) | min
    if (i[0] === 'L') {
      rotation = -rotation
      const next = pos + rotation
      if (next < min && next + max !== min && pos !== min) pass++
    } else {
      const next = pos + rotation
      if (next > 99 && next - max !== min && pos !== min) pass++
    }

    if (pos === min) pass++
    pos = (pos + rotation + max) % max
  }

  return pass
}

export default async () => {
  trackTime(async () => part1(input)).then(({ result, time }) =>
    logResultWithTime('Part 1:', result, time)
  )
  trackTime(async () => part2(input)).then(({ result, time }) =>
    logResultWithTime('Part 2:', result, time)
  )
}
