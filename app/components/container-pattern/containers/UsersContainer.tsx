// 🧠 CONTAINER COMPONENT - Users Example (REUTILIZA PADRÃO)
// Mesma arquitetura do ExpensesContainer - prova REUTILIZABILIDADE!

import { fetchUsers } from '../services/fetchUsers';
import { User } from '../types/user';
import { Suspense } from 'react';
import { LoadingSpinner } from '../presentational/LoadingSpinner';
import { UserList } from '../presentational/UserList';
import { UserStats } from '../presentational/UserStats';

export default async function UsersContainer() {
  let users: User[];
  let error: string | null = null;

  try {
    users = await fetchUsers();
  } catch (err) {
    error = 'Erro ao carregar usuários';
    users = [];
  }

  // 🧠 BUSINESS LOGIC - Role counts, active stats
  const stats = {
    total: users.length,
    active: users.filter(u => u.active).length,
    byRole: users.reduce((acc: Record<string, number>, user) => {
      acc[user.role] = (acc[user.role] || 0) + 1;
      return acc;
    }, {} as Record<string, number>),
    recent: users.filter(u => new Date(u.createdAt) > new Date(Date.now() - 30*24*60*60*1000)).length
  };

  const activeUsers = users.filter(u => u.active).sort((a, b) => a.name.localeCompare(b.name));

  const containerProps = {
    users: activeUsers,
    stats,
    error,
    roleCounts: stats.byRole
  };

  return (
    <div className="space-y-8">
      <Suspense fallback={<LoadingSpinner message="Calculando estatísticas..." />}>
        <UserStats stats={containerProps.stats} />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner size="lg" message="Carregando lista..." />}>
        <UserList 
          users={containerProps.users}
          error={containerProps.error}
        />
      </Suspense>

      {/* 🧠 PROVA DE PADRÃO FUNCIONANDO */}
      <div className="p-8 bg-sky-50 border-2 border-sky-200 rounded-3xl">
        <h3 className="font-bold text-sky-800 mb-4 text-xl">✨ Pattern Reutilizado!</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-sky-700">
          <div>
            <strong>UsersContainer:</strong> fetchUsers() + stats + filter → props
          </div>
          <div>
            <strong>UserList/UserStats:</strong> 100% props-driven, zero lógica
          </div>
        </div>
      </div>
    </div>
  );
}

