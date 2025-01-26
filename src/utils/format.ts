// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const formatDetails = (data: any) => {
  return Object.entries(data)
  .filter(([key]) => key !== "created" && key !== "edited")
  .map(([key, value]) => ({ key, value }))
}
