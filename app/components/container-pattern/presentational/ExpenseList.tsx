// 🧠 PRESENTATIONAL COMPONENT (Dumb) - Extraído do original
// Container já passou: expenses ordenados + error tratado
// Sem fetch, sort, state - só UI pura!

import { Expense } from '../types/expense';

interface Props {
  expenses: Expense[];
  error?: string | null;
}

const categoryConfig = {
  alimentacao: { emoji: '🍔', color: 'bg-orange-400' },
  transporte: { emoji: '🚗', color: 'bg-blue-400' },
  lazer: { emoji: '🎉', color: 'bg-purple-400' },
  saude: { emoji: '💊', color: 'bg-red-400' },
  moradia: { emoji: '🏠', color: 'bg-green-400' },
  outros: { emoji: '📦', color: 'bg-gray-400' }
} as const;

export function ExpenseList({ expenses, error }: Props) {
  if (error) {
    return (
      <div className="p-12 text-center">
        <div className="text-6xl mb-4">⚠️</div>
        <h2 className="text-2xl font-bold text-red-600 mb-2">{error}</h2>
        <p className="text-gray-600">Tente novamente em alguns instantes</p>
      </div>
    );
  }

  if (expenses.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="text-6xl mb-6">📭</div>
        <h3 className="text-2xl font-bold text-gray-700 mb-2">Nenhum gasto</h3>
        <p className="text-gray-500">Adicione o primeiro gasto para começar!</p>
      </div>
    );
  }

  return (
    <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl overflow-hidden border border-white/50">
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 text-white">
        <h2 className="text-2xl font-bold">Lista de Gastos ({expenses.length})</h2>
        <p className="opacity-90">Dados carregados no servidor ✅</p>
      </div>
      
      <ul className="divide-y divide-gray-100">
        {expenses.map((expense) => {
          const config = categoryConfig[expense.category as keyof typeof categoryConfig] || categoryConfig.outros;
          
          return (
            <li key={expense.id} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-start gap-4">
                <div className={`p-2 rounded-2xl ${config.color} text-white flex-shrink-0`}>
                  {config.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-xl text-gray-900 truncate">{expense.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                    <span>{new Date(expense.date).toLocaleDateString('pt-BR')}</span>
                    <span>•</span>
                    <span className="capitalize">{expense.category}</span>
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="text-2xl font-bold text-gray-900">
                    R$ {(expense.amount).toFixed(2).replace('.', ',')}
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

