// ✅ DELETE específico por ID
import { NextRequest, NextResponse } from 'next/server';

let expenses: any[] = []; // Compartilha estado com /route.ts

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  
  const index = expenses.findIndex(exp => exp.id === id);
  
  if (index === -1) {
    return NextResponse.json({ error: 'Gasto não encontrado' }, { status: 404 });
  }
  
  expenses.splice(index, 1);
  
  return NextResponse.json({ message: 'Gasto excluído' });
}

