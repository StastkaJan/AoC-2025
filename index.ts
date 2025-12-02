const dayFile = await import(`./day${process.argv[2]}/index.ts`)
dayFile.default()
