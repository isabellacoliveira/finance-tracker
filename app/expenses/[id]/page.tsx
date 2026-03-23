import { mockExpenses } from '../../mocks/expenses';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Expense } from '../../types/expense';

// ✅ Dynamic Route: [id] = parâmetro da URL
interface Props {
  params: Promise<{ id: string }>;
}

export default async function ExpenseDetail({ params }: Props) {
  const { id } = await params;
  const expense = mockExpenses.find(exp => exp.id === id) as Expense | undefined;
  
  if (!expense) {
    // ✅ Next.js 13+ navigation
    notFound();
  }

  const formatCurrency = (value: number) => new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);

  const categoryEmoji = {
    alimentacao: '🍔',
    transporte: '🚗',
    lazer: '🎉',
    saude: '💊',
    moradia: '🏠',
    outros: '📦'
  }[expense.category as keyof typeof categoryEmoji] || '📦';

  const categoryLabel = {
    alimentacao: 'Alimentação',
    transporte: 'Transporte',
    lazer: 'Lazer',
    saude: 'Saúde',
    moradia: 'Moradia',
    outros: 'Outros'
  }[expense.category as keyof typeof categoryLabel] || 'Outros';

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50 py-12">
      <div className="container mx-auto px-6 max-w-4xl">
        <Link 
          href="/expenses"
          className="inline-flex items-center gap-2 text-rose-600 hover:text-rose-800 font-medium mb-8"
        >
          ← Ver todos gastos
        </Link>

        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-12 max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-orange-500 px-6 py-3 rounded-full mb-6">
              <span className="text-3xl">{categoryEmoji}</span>
              <span className="text-xl font-bold uppercase tracking-wide">{categoryLabel}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4">
              {expense.title}
            </h1>
            <div className="text-3xl md:text-4xl font-bold text-gray-900">
              {formatCurrency(expense.amount)}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 text-sm">
            <div>
              <span className="text-gray-500">Data</span>
              <p className="font-semibold text-gray-900">
                {new Date(expense.date).toLocaleDateString('pt-BR', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </div>
            <div>
              <span className="text-gray-500">ID</span>
              <p className="font-mono bg-gray-100 px-3 py-1 rounded-lg text-sm">
                {id}
              </p>
            </div>
          </div>

          <div className="mt-12 pt-12 border-t-2 border-dashed border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">🎯 Demonstração Técnica</h3>
            <div className="grid md:grid-cols-2 gap-6 text-lg">
              <div className="p-6 bg-blue-50 rounded-2xl border-2 border-blue-200">
                <h4 className="font-bold text-blue-800 mb-2">✅ Next.js App Router</h4>
                <ul className="space-y-1 text-blue-700">
                  <li>• File-system routing (`app/expenses/[id]/page.tsx`)</li>
                  <li>• Dynamic params (`params.id`)</li>
                  <li>• `notFound()` automático</li>
                  <li>• Server Component por padrão</li>
                </ul>
              </div>
              <div className="p-6 bg-emerald-50 rounded-2xl border-2 border-emerald-200">
                <h4 className="font-bold text-emerald-800 mb-2">❌ React Router equivalente</h4>
                <code className="bg-emerald-100 p-3 rounded-xl block text-sm font-mono text-emerald-900">
<Route path="/expenses/:id" element={
  <ExpenseDetail />
}/>
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

