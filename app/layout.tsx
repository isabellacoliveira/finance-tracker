import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from 'next/link';

// ✅ Metadata dinâmica + global layout
export const metadata: Metadata = {
  title: {
    template: '%s | Next.js vs React Demo',
    default: 'Finance Tracker - Next.js 16 App Router'
  },
  description: 'Demonstração didática: Server Components, App Router, API Routes, Loading/Error UI',
  keywords: 'nextjs, react, server components, app router, tutorial',
  openGraph: {
    title: 'Finance Tracker Next.js Demo',
    description: 'Aprenda Server Components vs Client Components na prática',
    images: '/api/og?title=Finance+Tracker+Demo', // Route Handler futuro
    type: 'website',
  }
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full bg-gradient-to-br from-slate-50 to-indigo-100">
        {/* ✅ Navbar compartilhado todas páginas */}
        <nav className="backdrop-blur-lg bg-white/80 border-b border-gray-200 sticky top-0 z-50 supports-[backdrop-filter:blur(20px)]:bg-white/60">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-3 text-2xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                💰 FinanceDemo
              </Link>
              
              <div className="flex items-center gap-6 text-sm font-medium">
                <Link href="/" className="text-gray-700 hover:text-indigo-600 transition-colors">🏠 Home</Link>
                <Link href="/expenses" className="text-gray-700 hover:text-indigo-600 transition-colors">📋 Gastos</Link>
                <Link href="/server-fetch" className="text-gray-700 hover:text-indigo-600 transition-colors">⚡ Server Fetch</Link>
                <Link href="/container-pattern" className="text-gray-700 hover:text-emerald-600 transition-colors bg-emerald-100 px-4 py-2 rounded-full transition-all hover:bg-emerald-200 font-bold shadow-md">🧠 Container Pattern</Link>
                <Link href="/full-demo" className="text-gray-700 hover:text-indigo-600 transition-colors bg-indigo-100 px-4 py-2 rounded-full transition-all hover:bg-indigo-200">Demo Completo</Link>
              </div>
            </div>
          </div>
        </nav>

        <main>{children}</main>
        
        {/* ✅ Footer global */}
        <footer className="mt-24 bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
          <div className="container mx-auto px-6 text-center">
            <p className="text-lg mb-4">
              Feito com ❤️ por BLACKBOXAI - Demo Next.js 16 App Router
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <Link href="/" className="hover:text-white transition-colors">Server Components</Link>
              <span>•</span>
              <Link href="/expenses" className="hover:text-white transition-colors">App Router</Link>
              <span>•</span>
              <Link href="/server-fetch" className="hover:text-white transition-colors">Server Fetch</Link>
              <span>•</span>
              <Link href="/full-demo" className="hover:text-white transition-colors">API Routes</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

