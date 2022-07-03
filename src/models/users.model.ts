import { User } from '@interfaces/users.interface';

// password: password
const userModel: User[] = [
  { id: 1, email: 'user1@email.com', password: '$2b$10$PYcp/tdouSWOfuaZovhfW.l64QDbWKEPRGyJ3.ZkHsO35Rwur0ZO.' },
  { id: 2, email: 'user2@email.com', password: '$2b$10$PYcp/tdouSWOfuaZovhfW.l64QDbWKEPRGyJ3.ZkHsO35Rwur0ZO.' },
  { id: 3, email: 'user3@email.com', password: '$2b$10$PYcp/tdouSWOfuaZovhfW.l64QDbWKEPRGyJ3.ZkHsO35Rwur0ZO.' },
  { id: 4, email: 'user4@email.com', password: '$2b$10$PYcp/tdouSWOfuaZovhfW.l64QDbWKEPRGyJ3.ZkHsO35Rwur0ZO.' },
];

export default userModel;
