import { mockExpenses } from '../mocks/expenses';
import { ExpenseList } from '../components/ExpenseList/ExpenseList';
import Link from 'next/link';
import { Expense } from '../types/expense';

// ✅ App Router: arquivo = rota (/expenses)
export default function ExpensesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50 py-12">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* ✅ Layout compartilhado será adicionado depois */}
        
        <div className="mb-12">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-medium mb-6"
          >
            ← Voltar ao Home
          </Link>
          
          <div className="text-center mb-12">
            <h1 className="text-5xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
              📁 Gerenciador de Gastos
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Demonstração completa do <strong>App Router</strong> do Next.js
            </p>
          </div>
        </div>

        <ExpenseList expenses={mockExpenses} />
        
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {mockExpenses.slice(0, 2).map((expense) => (
            <Link 
              key={expense.id}
              href={`/expenses/${expense.id}`}
              className="block p-8 bg-white border border-gray-200 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">
                  {(() => {
                    const config = {
                      alimentacao: '🍔',
                      transporte: '🚗',
                      lazer: '🎉',
                      saude: '💊',
                      moradia: '🏠',
                      outros: '📦'
                    }[expense.category as keyof typeof config] || '📦';
                    return config;
                  })()}
                </span>
                <h3 className="text-xl font-bold text-gray-900">{expense.title}</h3>
              </div>
              <p className="text-2xl font-bold text-indigo-600">
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(expense.amount)}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

