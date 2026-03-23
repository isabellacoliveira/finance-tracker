"use client";

export default function About() {
  return (
    <div className="container mx-auto p-8 max-w-4xl space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Next.js vs React Demo
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Veja a diferença entre Next.js e React puro na prática!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-2xl shadow-xl border">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🔥 Next.js Features</h2>
          <ul className="space-y-3 text-lg">
            <li>• <strong>File-system routing</strong> (`app/page.tsx`)</li>
            <li>• <strong>Zero-config TypeScript</strong></li>
            <li>• <strong>App Router</strong> (`app/` directory)</li>
            <li>• <strong>Automatic SSR</strong></li>
            <li>• <strong>Image optimization</strong></li>
            <li>• <strong>1-click Vercel deploy</strong></li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-2xl shadow-xl border">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">⚛️ React Puro Precisa</h2>
          <ul className="space-y-3 text-lg">
            <li>• Router library manual</li>
            <li>• TS config manual</li>
            <li>• Webpack/Vite setup</li>
            <li>• Manual SSR setup</li>
            <li>• CDN para images</li>
            <li>• Deploy manual</li>
          </ul>
        </div>
      </div>

      <div className="text-center bg-gradient-to-r from-green-500 to-emerald-600 text-white p-12 rounded-2xl shadow-2xl">
        <h2 className="text-3xl font-bold mb-4">⚡ Construído com BLACKBOXAI</h2>
        <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
          Este app completo foi criado em tempo real demonstrando
          a superioridade do Next.js sobre React puro!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="http://localhost:3000/" className="px-8 py-4 bg-white text-green-600 font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
            ← Voltar ao App
          </a>
          <a href="https://vercel.com/new/clone?repository-url=https://github.com/vercel/next.js/tree/canary/examples" target="_blank" rel="noopener" className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-bold rounded-xl border-2 border-white/30 hover:border-white hover:bg-white/30 transition-all duration-300">
            Deploy no Vercel
          </a>
        </div>
      </div>
    </div>
  );
}

