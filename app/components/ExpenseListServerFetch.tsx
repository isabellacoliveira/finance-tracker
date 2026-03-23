// ✅ Demonstração: Server Component com async data fetching
import './ExpenseList.css';

export interface Expense {
  id: string;
  title: string;
  amount: number;
  category: string;
  date: string;
}

// Simula fetch real de API (delay + possível erro)
async function fetchExpensesWithDelay(): Promise<Expense[]> {
  // ✅ Live demo: abra DevTools → Network → veja fetch server-side!
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  return [
    {
      id: '1',
      title: '🍔 Supermercado Central',
      amount: 156.80,
      category: 'alimentacao',
      date: '2024-10-15'
    },
    {
      id: '2',
      title: '🚗 Uber para o trabalho',
      amount: 28.50,
      category: 'transporte',
      date: '2024-10-16'
    },
    {
      id: '3',
      title: '🎉 Cinema com amigos',
      amount: 45.00,
      category: 'lazer',
      date: '2024-10-14'
    }
  ];
}

const formatCurrency = (value: number) => new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
}).format(value);

const formatDate = (dateString: string) => new Date(dateString).toLocaleDateString("pt-BR");

const categoryConfig = {
  alimentacao: { emoji: "🍔", color: "alimentacao" },
  transporte: { emoji: "🚗", color: "transporte" },
  lazer: { emoji: "🎉", color: "lazer" },
  saude: { emoji: "💊", color: "saude" },
  moradia: { emoji: "🏠", color: "moradia" },
  outros: { emoji: "📦", color: "outros" },
} as const;

// ✅ ASYNC Server Component - fetch direto no servidor!
export default async function ExpenseListServerFetch() {
  const expenses = await fetchExpensesWithDelay();
  
  // ✅ Processamento pesado acontece server-side
  const sortedExpenses = [...expenses].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="expense-list">
      <div className="expense-list-header">
        <h2>⚡ Server Data Fetching</h2>
        <p>{expenses.length} gastos carregados do servidor</p>
      </div>
      
      {expenses.length === 0 ? (
        <div className="expense-list-empty">
          <div>📭</div>
          <p>Aguardando dados...</p>
        </div>
      ) : (
        <ul className="expense-list-items">
          {sortedExpenses.map((expense) => {
            const config = categoryConfig[expense.category as keyof typeof categoryConfig] || categoryConfig.outros;
            
            return (
              <li key={expense.id} className="expense-list-item">
                <div className="expense-list-item-content">
                  <div className="expense-list-main">
                    <div className="expense-list-main-top">
                      <span className={`expense-list-category-badge category-badge-${config.color}`}>
                        {config.emoji}
                      </span>
                      <h3 className="expense-list-title">{expense.title}</h3>
                    </div>
                    <div className="expense-list-meta">
                      <span>{formatDate(expense.date)}</span>
                    </div>
                  </div>
                  <div className="expense-list-amount">
                    <span className="expense-list-amount-value">
                      {formatCurrency(expense.amount)}
                    </span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      
      {/* ✅ Live demo badge */}
      <div className="mt-8 p-4 bg-blue-50 border-2 border-dashed border-blue-200 rounded-xl">
        <h3 className="font-bold text-blue-800 mb-2">🔍 DevTools Network:</h3>
        <p className="text-sm text-blue-700">
          Veja que <strong>SEM fetch no client!</strong><br/>
          Dados vieram server-side → HTML pronto
        </p>
      </div>
    </div>
  );
}

