import { Expense } from '@/app/types/expense';
import './ExpenseList.css';

type Props = {
  expenses: Expense[];
  onDelete: (id: string) => void;
};

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

export function ExpenseList({ expenses, onDelete }: Props) {
  const sortedExpenses = expenses.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const categoryLabels = {
    alimentacao: "Alimentação",
    transporte: "Transporte",
    lazer: "Lazer",
    saude: "Saúde",
    moradia: "Moradia",
    outros: "Outros",
  };

  return (
    <div className="expense-list">
      <div className="expense-list-header">
        <h2>Lista de Gastos</h2>
        <p>{expenses.length} gasto(s)</p>
      </div>
      
      {expenses.length === 0 ? (
        <div className="expense-list-empty">
          <div>📭</div>
          <p>Nenhum gasto cadastrado. Adicione o primeiro!</p>
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
                      <span>•</span>
                      <span>{categoryLabels[expense.category as keyof typeof categoryLabels]}</span>
                    </div>
                  </div>
                  <div className="expense-list-amount">
                    <span className="expense-list-amount-value">
                      {formatCurrency(expense.amount)}
                    </span>
                    <button 
                      className="expense-list-delete"
                      onClick={() => onDelete(expense.id)}
                      title="Excluir gasto"
                      aria-label="Excluir"
                    >
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

