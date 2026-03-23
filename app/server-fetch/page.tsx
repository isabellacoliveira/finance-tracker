// ✅ Rota dedicada: /server-fetch
import ExpenseListServerFetch from '../components/ExpenseListServerFetch';

export default function ServerFetchDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-blue-50 py-12">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black bg-gradient-to-r from-emerald-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
            ⚡ Server Data Fetching
          </h1>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-200 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🎬 Demonstração Live</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-2xl">
                  <h3 className="font-bold text-xl mb-2">✅ Next.js Server Fetch</h3>
                  <ul className="space-y-1 text-sm">
                    <li>• <code>async function</code> no Server Component</li>
                    <li>• Dados no HTML inicial</li>
                    <li>• Zero JS no client pra dados</li>
                    <li>• Loading UI automático (próximo step)</li>
                  </ul>
                </div>
                <div className="p-6 bg-gradient-to-r from-orange-400 to-red-500 text-white rounded-2xl">
                  <h3 className="font-bold text-xl mb-2">❌ React + useEffect</h3>
                  <pre className="text-xs bg-black/20 p-3 rounded-lg font-mono">
useEffect(() => {
  fetch('/api').then(...)
}, [])
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ExpenseListServerFetch />
      </div>
    </div>
  );
}

