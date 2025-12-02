export const trackTime = async (fn: (...args: any[]) => Promise<any>, ...args: any[]) => {
  const start = performance.now()
  const result = await fn(...args)
  return { result, time: performance.now() - start }
}
