export const formatCurrency = (value: number): string => 
  Intl.NumberFormat('pt-Br', {
    style: 'currency',
    currency: 'USD',
  }).format(value);

