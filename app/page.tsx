import { ExpenseList } from "./components/ExpenseList/ExpenseList";
import { mockExpenses } from "./mocks/expenses";

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
      
      <div className="mt-8 p-6 bg-gray-50 rounded-xl">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">🎯 Próximos passos na live:</h2>
        <ul className="space-y-2 text-gray-700">
          <li>• ✅ Server Components (feito)</li>
          <li>• Routing App Router</li>
          <li>• API Routes + fetch server-side</li>
          <li>• Loading/Error UI</li>
        </ul>
      </div>
    </main>
  );
}


