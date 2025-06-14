"use client";
import UserList from '@/components/UserList';
import { useEffect, useState } from 'react';

interface User {
  name: string;
  email: string;
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch('/api/users')
      .then((res) => res.json())
      .then((data) => setUsers(data.users || []));
  }, []);

  return <UserList users={users} />;
} 