'use client';

import { useEffect, useState } from 'react';
import Sidebar from '@/components/Sidebar';
import UserList from '@/components/UserList';
import Contact from '@/components/Contact';
import Information from '@/components/Information';

interface User {
  name: string;
  email: string;
}

export default function DashboardPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [section, setSection] = useState('users');

  useEffect(() => {
    if (section === 'users') {
      fetch('/api/users')
        .then((res) => res.json())
        .then((data) => setUsers(data.users || []));
    }
  }, [section]);

  let content = null;
  if (section === 'users') {
    content = <UserList users={users} />;
  } else if (section === 'contact') {
    content = <Contact />;
  } else if (section === 'information') {
    content = <Information />;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <Sidebar selected={section} onSelect={setSection} />
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
        <div className="max-w-3xl mx-auto">{content}</div>
      </main>
    </div>
  );
} 