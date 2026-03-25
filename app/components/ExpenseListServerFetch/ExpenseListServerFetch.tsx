// ✅ Server Component async fetch dentro da pasta própria
import './ExpenseListServerFetch.css';

export interface Expense {
  id: string;
  title: string;
  amount: number;
  category: string;
  date: string;
}

async function fetchExpensesWithDelay(): Promise<Expense[]> {
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

export default async function ExpenseListServerFetch() {
  const expenses = await fetchExpensesWithDelay();
  
  const sortedExpenses = [...expenses].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="expense-list">
      <div className="expense-list-header">
        <h2>⚡ Server Data Fetching ✅</h2>
        <p>{expenses.length} gastos do servidor</p>
      </div>
      
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
      
      <div className="mt-8 p-6 bg-emerald-50 border-2 border-emerald-200 rounded-2xl">
        <h3 className="font-bold text-emerald-800 mb-3">✅ Diferença chave:</h3>
        <p className="text-emerald-700">
          <strong>Next.js Server Fetch:</strong> Dados no HTML inicial<br/>
          <strong>React:</strong> useEffect → Network request visível
        </p>
      </div>
    </div>
  );
}

