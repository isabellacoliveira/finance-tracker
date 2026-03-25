"use client";

import { useState, useEffect } from "react";
import type { Expense } from "../../types/expense";
import { ExpenseForm } from "../ExpenseForm/ExpenseForm";
import { ExpenseList } from "../ExpenseList/ExpenseList";
import './ExpenseContainerApi.css';

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};

export default function ExpenseContainerApi() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/expenses')
      .then(res => res.json())
      .then((data: Expense[]) => {
        setExpenses(data);
        setLoading(false);
      })
      .catch(err => {
        setError('Erro ao carregar gastos');
        setLoading(false);
      });
  }, []);

  const handleAddExpense = async (newExpense: Omit<Expense, 'id'>) => {
    try {
      const response = await fetch('/api/expenses', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newExpense),
      });
      
      if (response.ok) {
        const savedExpense = await response.json();
        setExpenses(prev => [savedExpense, ...prev]);
      }
    } catch (err) {
      alert('Erro ao salvar');
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await fetch(`/api/expenses/${id}`, { method: 'DELETE' });
      setExpenses(prev => prev.filter(exp => exp.id !== id));
    } catch (err) {
      alert('Erro ao excluir');
    }
  };

  const total = expenses.reduce((acc, curr) => acc + curr.amount, 0);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  const summaryData = expenses.reduce((acc: Record<string, number>, exp) => {
    acc[exp.category] = (acc[exp.category] || 0) + exp.amount;
    return acc;
  }, {});

  return (
    <div className="expense-container">
      <div className="expense-container-header">
        <h1 className="expense-container-title">🚀 API + Server Demo Completo</h1>
        <div className="expense-container-total-card">
          <div className="expense-container-total-value">{formatCurrency(total)}</div>
          <div className="expense-container-total-label">Total via API</div>
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
            <h3 className="expense-container-tips-title">🔥 Funcionalidades:</h3>
            <ul className="expense-container-tips-list">
              <li>• ✅ API GET/POST/DELETE</li>
              <li>• DevTools → requests reais</li>
              <li>• Refresh → dados persistem</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

