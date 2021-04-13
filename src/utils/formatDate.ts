export const formatDate = (date: string): string => 
  new Intl.DateTimeFormat('pt-Br').format(
  new Date(date)
  )
