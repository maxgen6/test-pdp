export const getFromLS = (key: string) => {
  const item: string | null = window.localStorage.getItem(key)
  return item ? JSON.parse(item) : []
}

export const setToLS = (key: string, item: any) => {
  return window.localStorage.setItem(key, JSON.stringify(item))
}

export const clearLS = () => window.localStorage.clear()