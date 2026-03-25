import { ExpenseList } from "./components/ExpenseList/ExpenseList";
import { mockExpenses } from "./mocks/expenses";
import Link from 'next/link';

// ✅ PAGE é Server Component por padrão!
// Dados são carregados no servidor → HTML pronto → Zero JS inicial

export default function Home() {
  return (
    <main className="container mx-auto p-8 max-w-4xl">
      <div className="mb-8 p-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl shadow-2xl">
        <h1 className="text-4xl font-bold mb-2">🚀 Next.js vs React Demo</h1>
        <p className="text-xl opacity-90">
          Server Components carregam estes dados NO SERVIDOR
        </p>
      </div>
      
      {/* ✅ Passando dados server-side para Server Component */}
      <ExpenseList expenses={mockExpenses} />
      
      {/* ✅ PROMO Container Pattern */}
      <div className="mt-12 p-8 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-3xl shadow-2xl border-0">
        <h2 className="text-3xl font-black mb-6">🧠 Novo: Container/Presentational Pattern</h2>
        <p className="text-xl mb-8 opacity-95 leading-relaxed">
          Server Containers + Dumb Components • Lógica/UI separadas • Next.js 16
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <Link 
            href="/container-pattern" 
            className="bg-white text-emerald-700 px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300"
          >
            🚀 Ver Demo Interativo
          </Link>
          <span className="text-emerald-100 text-lg">Expenses + Users • Server-side</span>
        </div>
      </div>
      
      <div className="mt-8 p-6 bg-gray-50 rounded-xl">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Outros demos:</h2>
        <ul className="space-y-2 text-gray-700">
          <li>• ✅ Server Components</li>
          <li>• <Link href="/container-pattern" className="text-indigo-600 hover:underline font-medium">Container Pattern</Link></li>
          <li>• API Routes + fetch</li>
          <li>• Loading/Error UI</li>
        </ul>
      </div>
    </main>
  );
}


