"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Suspense } from 'react';

function ContainerPatternPage() {
  const [activeTab, setActiveTab] = useState<'expenses' | 'users'>('expenses');

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50 py-12">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
            🎯 Container/Presentational Pattern
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
            Lógica separada da UI • Server Containers • Reutilizáveis • Testáveis
          </p>
        </div>

        <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 mb-12 shadow-2xl border border-white/50">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">📊 React vs Next.js Pattern</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900/95 text-white p-6 rounded-2xl">
              <h3 className="text-xl font-bold mb-4">React Puro (Mixed) ❌</h3>
              <pre className="bg-black/50 p-4 rounded-xl text-xs overflow-auto font-mono">
{`function App() {
  const [data, loading] = useFetch(); // LOGIC
  const total = calc(data);           // LOGIC
  return <div>                      // UI
    {loading ? '...' : data.map(...)}
    Total: {total}
  </div>
}`}
              </pre>
            </div>
            <div className="bg-emerald-900/95 text-white p-6 rounded-2xl">
              <h3 className="text-xl font-bold mb-4">Next.js Pattern ✅</h3>
              <pre className="bg-black/50 p-4 rounded-xl text-xs overflow-auto font-mono">
{`async Container() {
  data = await fetch();         // LOGIC
  props = process(data);        // LOGIC
  return <List {...props} />;   // Props only
}

function List({data}) {           // UI pura
  return <div>{data.map(...)}</div>
}`}
              </pre>
            </div>
          </div>
        </div>

        <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-2 mb-8 shadow-xl">
          <div className="flex bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl overflow-hidden">
            <button
              onClick={() => setActiveTab('expenses')}
              className={`flex-1 py-4 px-6 font-bold text-lg transition-all ${
                activeTab === 'expenses'
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg'
                  : 'text-gray-700 hover:text-indigo-600'
              }`}
            >
              💰 Expenses Demo
            </button>
            <button
              onClick={() => setActiveTab('users')}
              className={`flex-1 py-4 px-6 font-bold text-lg transition-all ${
                activeTab === 'users'
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg'
                  : 'text-gray-700 hover:text-emerald-600'
              }`}
            >
              👥 Users Demo
            </button>
          </div>
        </div>

{activeTab === 'expenses' && (
          <Suspense fallback={<div className="text-center py-20">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-indigo-600 mx-auto mb-4"></div>
            <p className="text-xl">Loading Server Container...</p>
          </div>}>
            <iframe 
              src="/expenses" 
              className="w-full h-[600px] border-0 rounded-2xl shadow-2xl"
              title="Expenses Container Demo"
            />
          </Suspense>
        )}

        {activeTab === 'users' && (
          <div className="text-center py-20 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-12">
            <div className="text-6xl mb-8">👥</div>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Users Container Pattern
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Mesma arquitetura do Expenses demo - lógica server-side + UI separada
            </p>
            <button
              onClick={() => setActiveTab('expenses')}
              className="bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-xl"
            >
              ← Voltar Expenses Demo
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ContainerPatternPage;

