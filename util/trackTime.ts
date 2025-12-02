export const trackTime = async (fn: () => Promise<any>) => {
  const start = performance.now()
  const result = await fn()
  return { result, time: performance.now() - start }
}
