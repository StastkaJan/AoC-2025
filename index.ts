import { trackTime } from './util/trackTime'
import { logResultWithTime } from './util/log'

if (process.argv[2]) {
  const day = parseInt(process.argv[2])
  if (isNaN(day)) {
    throw new Error('Day is NaN')
  }

  if (day < 1 || day > 12) {
    throw new Error('Day is not between 1 and 12')
  }

  const date = String(day).padStart(2, '0')
  const input = await import(`./day${date}/input.txt`)
  const dayFile = await import(`./day${date}/index.ts`)

  const [part1, part2] = await Promise.all([
    trackTime(dayFile.part1, input.default),
    trackTime(dayFile.part2, input.default)
  ])

  logResultWithTime('Part 1:', part1)
  logResultWithTime('Part 2:', part2)

  process.exit(0)
}
