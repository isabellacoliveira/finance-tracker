// ✅ Route Handler = API Route moderno (Next.js 13+ App Router)
// Substitui pages/api antiga

import { NextRequest, NextResponse } from 'next/server';

// 💾 Simula banco de dados em memória (pra demo)
let expenses: any[] = [
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
  }
];

// ✅ GET - listar todos
export async function GET() {
  // Simula delay banco
  await new Promise(r => setTimeout(r, 500));
  
  return NextResponse.json(expenses);
}

// ✅ POST - adicionar novo
export async function POST(request: NextRequest) {
  try {
    const newExpense = await request.json();
    
    // Validação simples
    if (!newExpense.title || newExpense.amount <= 0) {
      return NextResponse.json(
        { error: 'Título e valor obrigatórios' },
        { status: 400 }
      );
    }
    
    const expense = {
      id: Math.random().toString(36).substr(2, 9),
      ...newExpense
    };
    
    expenses.push(expense);
    
    return NextResponse.json(expense, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Erro interno' },
      { status: 500 }
    );
  }
}

