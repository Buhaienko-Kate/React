import React from 'react';
import UsersList from './UsersList';

const users = [
  {
    id: 'id-1',
    name: 'Bob',
    age: 27,
  },
  {
    id: 'id-2',
    name: 'Tom',
    age: 37,
  },
  {
    id: 'id-3',
    name: 'Mark',
    age: 22,
  },
  {
    id: 'id-4',
    name: 'Sam',
    age: 20,
  },
  {
    id: 'id-5',
    name: 'Din',
    age: 28,
  },
];

const App = () => {
  return <UsersList users={users} />;
};

export default App;
