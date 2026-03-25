# 🎬 Next.js Live Demo - Passo a Passo Completo

## 📋 AGENDA DA LIVE (45min)

### **00:00 - 02:00** | Setup (npm run dev)
```
1. git clone / cd finance-tracker
2. npm install
3. npm run dev
✓ localhost:3000
```
**Dizer:** "Projeto Next.js 16 App Router pronto em 30s!"

### **02:00 - 07:00** | Home + Navegação (5min)
```
1. localhost:3000 → Home
2. Nav: 📋 Gastos (/expenses)
3. DevTools → Network VAZIO!
4. View Source → DADOS NO HTML!
```
**Demo:** Scroll → Cards server-rendered
**Dizer:** "Zero JavaScript inicial = performance máxima!"

### **07:00 - 12:00** | Server Components (/server-fetch) (5min)
```
1. Nav: ⚡ Server Fetch
2. 1.5s delay → Loading automático (Suspense)
3. View Source → Lista completa!
```
**Dizer:** "Next.js carrega dados NO SERVIDOR, React usa useEffect"

### **12:00 - 17:00** | API + Estado (/full-demo) (5min)
```
1. Nav: 🎯 Demo Completo
2. Adicionar gasto → POST /api/expenses
3. DevTools Network → Request real!
4. Refresh → Persiste!
```
**Dizer:** "API Routes + estado real sem backend"

### **17:00 - 30:00** | 🎯 CONTAINER/PRESENTATIONAL (13min) ⭐
```
1. Nav: 🧠 Container Pattern
2. Tab Expenses → iframe /expenses
3. Abrir DevTools:
   - Network: Server data (0 client fetches)
   - View Source: HTML pronto
4. Tab Users → Reutilização pattern
```
**Estrutura ao vivo:**
```
containers/ExpensesContainer.tsx ← Logic only
presentational/ExpenseList.tsx    ← UI only  
services/fetchExpenses.ts         ← Data
```
**Dizer:** "Lógica server-side → Props → UI pura!"

### **30:00 - 35:00** | Performance + Bundle (5min)
```
1. npm run build → Clean!
2. DevTools → Bundle 30kb!
3. Lighthouse → 100/100
```
**Dizer:** "Server Components = Bundle mínimo!"

### **35:00 - 42:00** | Q&A + Responsive (7min)
```
1. Mobile viewport → Responsive ✓
2. F5 reload → Instantâneo
3. Perguntas chat
```

### **42:00 - 45:00** | Wrap-up (3min)
```
"Resumo:
• Server Components = Performance
• Container/Presentational = Arquitetura
• App Router = File=Route
GitHub → Próximos passos!"
```

## 🎯 COMANDOS ÚTEIS
```bash
npm run dev      # Desenvolvimento
npm run build    # Build production
npm run start    # Production server
```

## 📱 DEMO ROUTES
| Rota | Demo |
|------|------|
| `/` | Home |
| `/expenses` | Server data |
| `/server-fetch` | Async Server Component |
| `/full-demo` | API + CRUD |
| `/container-pattern` | **Pattern principal** |

## 🎤 O QUE MOSTRAR NO DEVTOOLS
1. **Network** → Vazio (Server Components)
2. **View Source** → Dados renderizados
3. **Performance** → Zero waterfalls
4. **Lighthouse** → 100/100

**Live Duration: 45min** | **Ready to go!** 🎥
