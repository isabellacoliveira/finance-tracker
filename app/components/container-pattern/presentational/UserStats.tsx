// 🧠 PRESENTATIONAL - User Statistics UI
// Props já processados pelo Container

interface Stats {
  total: number;
  active: number;
  byRole: Record<string, number>;
  recent: number;
}

interface Props {
  stats: Stats;
}

export function UserStats({ stats }: Props) {
  const roleOrder = ['admin', 'user', 'guest'] as const;

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      {/* Total Users */}
      <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-8 rounded-3xl shadow-2xl">
        <div className="text-4xl font-black mb-2">{stats.total}</div>
        <div className="text-blue-100">Total Usuários</div>
      </div>

      {/* Active */}
      <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white p-8 rounded-3xl shadow-2xl">
        <div className="text-3xl font-bold mb-2">{stats.active}</div>
        <div className="text-emerald-100">Ativos</div>
      </div>

      {/* Recent */}
      <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-8 rounded-3xl shadow-2xl">
        <div className="text-3xl font-bold mb-2">+{stats.recent}</div>
        <div className="text-purple-100">Novos (30 dias)</div>
      </div>

      {/* Roles Breakdown */}
      <div className="md:col-span-2 lg:col-span-3 bg-white/70 backdrop-blur-xl p-6 rounded-3xl shadow-xl border">
        <h3 className="font-bold text-gray-800 mb-4">👑 Por Cargo</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {roleOrder.map(role => (
            <div key={role} className="text-center p-4 bg-gray-50 rounded-2xl">
              <div className="text-2xl font-bold text-gray-900">{stats.byRole[role] || 0}</div>
              <div className="text-sm text-gray-600 capitalize">{role}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

