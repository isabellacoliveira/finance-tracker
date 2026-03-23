// ✅ Loading UI automática (todos Server Components!)
export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-indigo-100">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-indigo-200 border-t-indigo-600 mx-auto mb-6"></div>
        <h2 className="text-2xl font-bold text-gray-700">Carregando demo Next.js...</h2>
        <p className="text-gray-500 mt-2">Server Components em ação ⚡</p>
      </div>
    </div>
  );
}

