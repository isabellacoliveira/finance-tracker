// 🧠 SERVICE LAYER - Users (paralelo ao Expenses)

import { User } from '../types/user';
import { mockUsers } from '../../../mocks/users';

export async function fetchUsers(): Promise<User[]> {
  await new Promise(resolve => setTimeout(resolve, 1000)); // Realistic delay
  
  return mockUsers;
}

// Filtered active users
export async function fetchActiveUsers(): Promise<User[]> {
  const all = await fetchUsers();
  return all.filter(user => user.active);
}

