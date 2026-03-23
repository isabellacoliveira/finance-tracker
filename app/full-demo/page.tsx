import ExpenseContainerApi from '../components/ExpenseContainerApi/ExpenseContainerApi';

// ✅ Demo final: Container + Form + List + API real
export default function FullDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-100">
      <div className="container mx-auto px-6 py-12 max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 bg-clip-text text-transparent mb-6">
            💰 Finance Tracker Completo
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Next.js App Router + Server Components + API Routes + Server Actions
          </p>
        </div>
        
        <ExpenseContainerApi />
      </div>
    </div>
  );
}

