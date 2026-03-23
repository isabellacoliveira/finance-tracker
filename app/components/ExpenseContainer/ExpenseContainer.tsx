"use client";

import { useState, useEffect } from "react";
import type { Expense } from "../../types/expense";
import { ExpenseForm } from "../ExpenseForm/ExpenseForm";
import { ExpenseList } from "../ExpenseList/ExpenseList";
import './ExpenseContainer.css';

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value / 100);
};

export function ExpenseContainer() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("expenses");
      if (saved) {
        setExpenses(JSON.parse(saved));
      }
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!loading && typeof window !== "undefined") {
      localStorage.setItem("expenses", JSON.stringify(expenses));
    }
  }, [expenses, loading]);

  function handleAddExpense(expense: Expense) {
    setExpenses((prev) => [...prev, expense]);
  }

  function handleDelete(id: string) {
    setExpenses((prev) => prev.filter((e) => e.id !== id));
  }

  const total = expenses.reduce((acc, curr) => acc + curr.amount, 0);

  if (loading) {
    return <div className="loading">Carregando...</div>;
  }

  const summaryData = expenses.reduce((acc: Record<string, number>, exp) => {
    acc[exp.category] = (acc[exp.category] || 0) + exp.amount;
    return acc;
  }, {});

  return (
    <div className="expense-container">
      <div className="expense-container-header">
        <h1 className="expense-container-title">💰 Finance Tracker</h1>
        <div className="expense-container-total-card">
          <div className="expense-container-total-value">{formatCurrency(total)}</div>
          <div className="expense-container-total-label">Total de gastos</div>
        </div>
      </div>

      <ExpenseForm onAdd={handleAddExpense} />

      <div className="expense-container-grid">
        <ExpenseList expenses={expenses} onDelete={handleDelete} />
        
        <div className="expense-container-summary">
          <div className="expense-container-summary-card">
            <h3 className="expense-container-summary-title">Resumo por Categoria</h3>
            {Object.entries(summaryData).map(([cat, amount]) => (
              <div key={cat} className="expense-container-summary-item">
                <span className="expense-container-summary-label">
                  {cat.replace(/^\w/, c => c.toUpperCase())}
                </span>
                <span className="expense-container-summary-value">
                  {formatCurrency(amount)}
                </span>
              </div>
            ))}
          </div>

          <div className="expense-container-tips-card">
            <h3 className="expense-container-tips-title">💡 Dicas</h3>
            <ul className="expense-container-tips-list">
              <li>• Defina um orçamento mensal para cada categoria</li>
              <li>• Revise gastos semanais</li>
              <li>• Prefira pagamento à vista</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

