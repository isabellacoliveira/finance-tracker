// ✅ Loading específico por rota
export default function ExpensesLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-blue-50 p-8">
      <div>
        <div className="animate-pulse space-y-4">
          <div className="h-12 bg-indigo-200 rounded-xl w-64 mx-auto mb-8"></div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="space-y-3">
              <div className="h-64 bg-gradient-to-r from-indigo-200 to-blue-200 rounded-2xl"></div>
              <div className="h-64 bg-gradient-to-r from-indigo-200 to-blue-200 rounded-2xl"></div>
              <div className="h-64 bg-gradient-to-r from-indigo-200 to-blue-200 rounded-2xl"></div>
            </div>
            <div className="space-y-3">
              <div className="h-80 bg-gradient-to-r from-blue-200 to-purple-200 rounded-xl"></div>
              <div className="h-64 bg-gradient-to-r from-purple-200 to-pink-200 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

