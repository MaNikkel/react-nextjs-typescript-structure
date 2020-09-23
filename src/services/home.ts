export function getAsyncString(): Promise<string> {
  try {
    return new Promise(resolve => {
      setTimeout(() => resolve('Simulating API call'), 2000)
    })
  } catch (e) {
    throw new Error(e)
  }
}
