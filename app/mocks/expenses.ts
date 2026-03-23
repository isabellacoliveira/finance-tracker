// ✅ Dados mock para demo Server Components
// Estes dados são \"fetchados\" server-side na live

import { Expense } from '../types/expense';

export const mockExpenses: Expense[] = [
  {
    id: '1',
    title: 'Supermercado Central',
    amount: 156.80,
    category: 'alimentacao',
    date: '2024-10-15'
  },
  {
    id: '2',
    title: 'Uber para o trabalho',
    amount: 28.50,
    category: 'transporte',
    date: '2024-10-16'
  },
  {
    id: '3',
    title: 'Cinema com amigos',
    amount: 45.00,
    category: 'lazer',
    date: '2024-10-14'
  },
  {
    id: '4',
    title: 'Farmácia',
    amount: 89.90,
    category: 'saude',
    date: '2024-10-13'
  }
];

