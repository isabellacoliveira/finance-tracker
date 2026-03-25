// 🧠 SERVICE LAYER - Isolates data fetching logic
// Usado por Containers (não por Presentational)

import { Expense } from '../types/expense';
import { mockExpenses } from '../../../mocks/expenses';

// Simula API real com delay + error handling
export async function fetchExpenses(): Promise<Expense[]> {
  // ✅ Server-side only - await possível
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Simula possível erro de rede
  if (Math.random() < 0.1) {
    throw new Error('Falha ao buscar despesas');
  }
  
  return mockExpenses;
}

// Factory para diferentes cenários
export async function fetchExpensesByUser(userId: string): Promise<Expense[]> {
  const all = await fetchExpenses();
  return all.filter(exp => exp.id.includes(userId.slice(-1)));
}

// Com cache simulado (futuro)
export async function fetchExpensesCached(ttl = 5 * 60 * 1000): Promise<Expense[]> {
  return fetchExpenses();
}

