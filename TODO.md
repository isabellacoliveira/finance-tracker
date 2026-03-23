# Finance Tracker Next.js vs React - Plano Didático

## ✅ Status Geral: ✅ Aprovado pelo usuário

## 📋 Steps do Plano (Implementar sequencialmente):

### 1. **Server Components vs Client Components** ✅ CONCLUÍDO
   - [x] ExpenseList é Server Component (sem 'use client')
   - [x] app/page.tsx com mock data server-side
   - [x] Teste: `npm run dev` (dados render server-side!)

### 2. **Routing (App Router)** ✅ CONCLUÍDO
   - [x] `/expenses` - lista com cards navegáveis
   - [x] `/expenses/[id]` - detalhe dinâmico com notFound()
   - [x] Teste: localhost:3000/expenses → click → navegação suave

### 3. **Data Fetching no Server** ✅ CONCLUÍDO
   - [x] `/server-fetch` com async Server Component
   - [x] Network vazio (dados server-side!)
   - [x] Comparação React useEffect inline

### 4. **API Routes (Route Handlers)**
   - [ ] Criar app/api/expenses/route.ts (GET/POST)
   - [ ] Migrar ExpenseContainer para usar fetch('/api/expenses')
   - [ ] Remover localStorage

### 5. **Layouts Compartilhados**
   - [ ] Criar app/expenses/layout.tsx

### 6. **SEO (Metadata)**
   - [ ] Add metadata em layout.tsx e pages

### 7. **Loading UI**
   - [ ] Criar app/loading.tsx
   - [ ] Criar app/expenses/loading.tsx

### 8. **Error Handling**
   - [ ] Criar app/error.tsx
   - [ ] Criar app/expenses/error.tsx

### 9. **Finalização**
   - [ ] Atualizar DEMO_NEXT_REACT.md com explicações/comparações
   - [ ] Teste completo + demo commands

**Progresso será atualizado após cada step concluído.**

**Comando para testar sempre**: `npm run dev`

