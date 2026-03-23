"use client";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./ExpenseForm.css";
import { Expense } from "@/app/types/expense";

type Props = {
  onAdd: (expense: Expense) => void;
};

const categories = [
  { value: "alimentacao", label: "Alimentação" },
  { value: "transporte", label: "Transporte" },
  { value: "lazer", label: "Lazer" },
  { value: "saude", label: "Saúde" },
  { value: "moradia", label: "Moradia" },
  { value: "outros", label: "Outros" },
];

export function ExpenseForm({ onAdd }: Props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0); // valor em centavos
  const [category, setCategory] = useState("alimentacao");
  const [date, setDate] = useState(
    new Date().toISOString().split("T")[0]
  );

  // 💰 formatação correta
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value / 100);
  };

  // 🧠 input inteligente
  const handleAmountChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const rawValue = e.target.value.replace(/\D/g, "");
    setAmount(Number(rawValue));
  };

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!title || amount === 0) {
      alert("Preencha nome e valor");
      return;
    }

    const newExpense: Expense = {
      id: uuidv4(),
      title,
      amount: amount / 100, // converte centavos → reais
      category,
      date,
    };

    onAdd(newExpense);

    // reset
    setTitle("");
    setAmount(0);
    setCategory("alimentacao");
    setDate(new Date().toISOString().split("T")[0]);
  }

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <div>
        <label>Descrição</label>
        <input
          type="text"
          placeholder="Ex: Supermercado"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div>
        <label>Valor (R$)</label>
        <input
          type="text"
          value={formatCurrency(amount)}
          onChange={handleAmountChange}
          className="currency-input"
        />
      </div>

      <div>
        <label>Categoria</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat.value} value={cat.value}>
              {cat.label}
            </option>
          ))}
        </select>
      </div>

      <div className="form-date-group">
        <div>
          <label>Data</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <button type="submit">➕ Adicionar</button>
      </div>
    </form>
  );
}