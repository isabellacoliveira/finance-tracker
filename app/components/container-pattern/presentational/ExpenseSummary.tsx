// 🧠 PRESENTATIONAL COMPONENT (Dumb)
// Recebe props processadas do Container
// Sem lógica: só renderiza UI

import { Expense } from '../types/expense';

interface Props {
  total: string; // Já formatado pelo container
  summary: Record<string, number>;
  stats: {
    count: number;
    activeCategories: number;
  };
}

const formatCurrency = (value: number) => 
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);

export function ExpenseSummary({ total, summary, stats }: Props) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Card Total */}
      <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white p-8 rounded-3xl shadow-2xl">
        <div className="text-4xl font-black mb-2">{total}</div>
        <div className="text-emerald-100">Total Gastos</div>
      </div>

      {/* Stats */}
      <div className="bg-white/70 backdrop-blur-xl p-6 rounded-3xl shadow-xl border border-white/50">
        <h3 className="font-bold text-gray-800 mb-4">📊 Estatísticas</h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Total de gastos:</span>
            <span className="font-bold">{stats.count}</span>
          </div>
          <div className="flex justify-between">
            <span>Categorias ativas:</span>
            <span className="font-bold">{stats.activeCategories}</span>
          </div>
        </div>
      </div>

      {/* Resumo por categoria */}
      <div className="md:col-span-2 lg:col-span-1 bg-white/70 backdrop-blur-xl p-6 rounded-3xl shadow-xl border border-white/50">
        <h3 className="font-bold text-gray-800 mb-4">📈 Resumo por Categoria</h3>
        <div className="space-y-2">
          {Object.entries(summary).map(([category, amount]) => (
            <div key={category} className="flex justify-between items-center py-1">
              <span className="capitalize">{category}</span>
              <span className="font-mono font-bold text-gray-800">
                {formatCurrency(amount)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

