'use client';

import Link from 'next/link';
import { useEffect } from 'react';

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 to-red-50">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-12 text-center border border-red-100">
        <div className="w-24 h-24 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-8">
          <span className="text-4xl">💥</span>
        </div>
        
        <h1 className="text-4xl font-black text-gray-900 mb-4">Algo deu errado!</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-sm mx-auto leading-relaxed">
          Erro no servidor. Tente novamente ou volte ao início.
        </p>
        
        <div className="space-y-3">
          <button
            onClick={reset}
            className="w-full bg-indigo-600 text-white py-4 px-8 rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Tentar novamente
          </button>
          
          <Link
            href="/"
            className="block w-full bg-gray-100 text-gray-800 py-4 px-8 rounded-2xl font-semibold hover:bg-gray-200 transition-all duration-200"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
}

