// 🧠 PRESENTATIONAL - User List UI Pura
// Container já filtrou/sorteou/estatísticas

import { User } from '../types/user';

interface Props {
  users: User[];
  error?: string | null;
}

const roleColors: Record<string, string> = {
  admin: 'bg-gradient-to-r from-red-500 to-pink-600',
  user: 'bg-gradient-to-r from-blue-500 to-indigo-600',
  guest: 'bg-gradient-to-r from-gray-400 to-gray-500'
};

export function UserList({ users, error }: Props) {
  if (error) {
    return (
      <div className="p-12 text-center bg-red-50 border-2 border-red-200 rounded-3xl">
        <div className="text-6xl mb-4">⚠️</div>
        <h2 className="text-2xl font-bold text-red-600 mb-2">{error}</h2>
      </div>
    );
  }

  if (users.length === 0) {
    return (
      <div className="text-center py-20 bg-gray-50 rounded-3xl">
        <div className="text-6xl mb-6">👥</div>
        <h3 className="text-2xl font-bold mb-2">Nenhum usuário ativo</h3>
      </div>
    );
  }

  return (
    <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl overflow-hidden border">
      <div className="bg-gradient-to-r from-sky-500 to-blue-600 p-6 text-white">
        <h2 className="text-2xl font-bold">Lista de Usuários Ativos ({users.length})</h2>
        <p>Dados processados server-side</p>
      </div>
      
      <ul className="divide-y divide-gray-100">
        {users.map((user) => (
          <li key={user.id} className="p-6 hover:bg-gray-50 group">
            <div className="flex items-center gap-4">
              <img 
                src={user.avatar} 
                alt={user.name}
                className="w-12 h-12 rounded-full ring-2 ring-gray-200 group-hover:ring-indigo-300 transition-all"
              />
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-xl text-gray-900 truncate">{user.name}</h3>
                <p className="text-gray-600 truncate">{user.email}</p>
              </div>
              <div className="flex flex-col items-end">
                <span className={`px-3 py-1 rounded-full text-sm font-bold text-white ${roleColors[user.role]}`}>
                  {user.role.toUpperCase()}
                </span>
                <span className="text-xs text-gray-500 mt-1">
                  {new Date(user.createdAt).toLocaleDateString('pt-BR')}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

