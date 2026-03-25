// 🧠 CONTAINER COMPONENT (Smart/Server)
// ✅ Server Component - SEMPRE PRIORIDADE no Next.js App Router
// Responsabilidades:
// - Fetch dados (service)
// - Processa lógica de negócio (total, summary, sort)
// - PASSA PROPS ESTRUTURADAS para Presentational
// ❌ NÃO renderiza UI diretamente!

import { fetchExpenses } from '../services/fetchExpenses';
import { Expense } from '../types/expense';
import { Suspense } from 'react';
import { LoadingSpinner } from '../presentational/LoadingSpinner';
import { ExpenseList } from '../presentational/ExpenseList';
import { ExpenseSummary } from '../presentational/ExpenseSummary';

const formatCurrency = (value: number) => 
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);

export default async function ExpensesContainer() {
  // ✅ 1. FETCH - Server-side data loading
  let expenses: Expense[];
  let error: string | null = null;
  
  try {
    expenses = await fetchExpenses();
  } catch (err) {
    error = 'Erro ao carregar despesas 😞';
    expenses = [];
  }

  // ✅ 2. BUSINESS LOGIC - Separada da UI
  const total = expenses.reduce((acc, curr) => acc + curr.amount, 0);
  const summary = expenses.reduce((acc: Record<string, number>, exp) => {
    acc[exp.category] = (acc[exp.category] || 0) + exp.amount;
    return acc;
  }, {} as Record<string, number>);

  const sortedExpenses = [...expenses].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // ✅ 3. PASSA PROPS - Dados processados para Presentational
  const containerProps = {
    expenses: sortedExpenses,
    total,
    summary,
    totalFormatted: formatCurrency(total),
    stats: {
      count: expenses.length,
      activeCategories: Object.keys(summary).length
    },
    error
  };

  return (
    <div className="space-y-8">
      {/* 🧠 CONTAINER orquestra Presentational */}
      <Suspense fallback={<LoadingSpinner message="Processando resumo..." />}>
        <ExpenseSummary 
          total={containerProps.totalFormatted}
          summary={containerProps.summary}
          stats={containerProps.stats}
        />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner size="lg" />}>
        <ExpenseList 
          expenses={containerProps.expenses}
          error={containerProps.error}
        />
      </Suspense>

      {/* ✅ COMMENTS: Pattern aplicado! */}
      <div className="p-8 bg-emerald-50 border-2 border-emerald-200 rounded-3xl text-sm">
        <h3 className="font-bold text-emerald-800 mb-3">🎯 Container/Presentational ✅</h3>
        <ul className="text-emerald-700 space-y-1">
          <li>• <strong>Container:</strong> fetch + total + summary + sort (server-side)</li>
          <li>• <strong>Presentational:</strong> só UI, recebe props estruturadas</li>
          <li>• <strong>Next.js:</strong> Dados no HTML inicial (View Source!)</li>
          <li>• <strong>Reutilizável:</strong> Troque ExpenseList por qualquer UI</li>
        </ul>
      </div>
    </div>
  );
}

