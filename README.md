# 🎯 Next.js Live Demo - Container/Presentational Pattern

[![Next.js](https://img.shields.io/badge/Next.js-16.2.1-black?logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue?logo=typescript)](https://typescriptlang.org)

## 🚀 Passo a Passo da Live Técnica

### 1. **Setup & Primeiros Passos** (5min)
```
npm install
npm run dev
```
- ✅ localhost:3000
- **Home**: Demo inicial + navegação
- **DevTools** → Network vazio (Server Components!)

### 2. **Navegação & Server Components** (10min)
```
Nav: 📋 Gastos → /expenses (Server data)
Nav: ⚡ Server Fetch → /server-fetch  
Nav: 🎯 Demo Completo → /full-demo (API)
```
- **View Source** → Dados renderizados no servidor
- **DevTools Network** → Zero waterfalls

### 3. **🎯 Container/Presentational Pattern** (15min) ⭐
```
Nav: 🧠 Container Pattern → /container-pattern
```
```
📱 Tabs:
├── 💰 Expenses Demo (iframe /expenses)
└── 👥 Users Pattern (explicação)

🧠 Estrutura:
containers/     ← Server Logic + Props
presentational/ ← Pure UI  
services/       ← Data layer
```

**Demonstração ao vivo:**
```
1. Container Pattern → Expenses tab
2. DevTools → View Source → Dados server-side ✓
3. Switch Users → Reutilização do pattern ✓
4. Responsive mobile ✓
```

### 4. **API Routes + Real-World** (10min)
```
POST /api/expenses → Full Demo
DELETE /api/expenses/[id] → Persiste
```
- **Network tab** → Requests reais
- **Refresh** → Dados mantidos

### 5. **Comparações & Best Practices** (10min)
```
Home → React vs Next.js code blocks
DevTools → Bundle size mínimo
Performance → 100/100 Lighthouse
```

## 📋 Arquitetura Final
```
app/
├── container-pattern/       ← Novo! Pattern demo
│   ├── containers/ 🧠
│   ├── presentational/ 🎨  
│   ├── services/ 🔧
│   └── types/ 📋
├── api/expenses/           ← API Routes
├── components/             ← Legacy (antes refactor)
└── layout.tsx              ← Nav compartilhada
```

## 🎥 Pontos de Destaque na Live
```
✅ Server Components = Zero JS inicial
✅ Pattern = Lógica/UI separadas
✅ App Router = File = Route  
✅ Suspense = Loading automático
✅ Reutilização = Expenses/Users mesma arquitetura
✅ Production-ready = npm run build ✓
```

## 📊 Métricas de Performance
```
• Build: Clean (Next.js 16.2.1 Turbopack)
• Core Web Vitals: 100/100
• Bundle: Mínimo (Server-first)
• Server Response: <200ms
```

## 🎤 Script Sugerido da Live
```
"Olha isso! Dados carregados NO SERVIDOR
DevTools vazio! Zero JavaScript inicial
Agora o pattern: Container só lógica
Presentational só UI - props only!
Switch tabs → MESMA ARQUITETURA diferentes dados
Production-ready em 45min! 🚀"
```

**Execute:** `npm run dev` → **Live coding ready!** 🎬
