import { User } from '../components/container-pattern/types/user';

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Maria Silva',
    email: 'maria@company.com',
    role: 'admin',
    avatar: 'https://i.pravatar.cc/48?img=1',
    active: true,
    createdAt: '2024-01-15'
  },
  {
    id: '2',
    name: 'João Santos',
    email: 'joao@company.com',
    role: 'user',
    avatar: 'https://i.pravatar.cc/48?img=2',
    active: true,
    createdAt: '2024-02-20'
  },
  {
    id: '3',
    name: 'Ana Costa',
    email: 'ana@company.com',
    role: 'user',
    avatar: 'https://i.pravatar.cc/48?img=3',
    active: false,
    createdAt: '2024-03-10'
  },
  {
    id: '4',
    name: 'Pedro Oliveira',
    email: 'pedro@company.com',
    role: 'guest',
    avatar: 'https://i.pravatar.cc/48?img=4',
    active: true,
    createdAt: '2024-04-05'
  }
];

