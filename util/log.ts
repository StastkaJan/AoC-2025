export const logResultWithTime = (
  message: string,
  { result, time }: { result: any; time: number }
) => console.log(message, result, '\nTime:', time.toFixed(2), 'ms')
