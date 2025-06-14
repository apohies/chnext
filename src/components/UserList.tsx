import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

interface User {
  name: string;
  email: string;
}

async function getUsers(): Promise<User[]> {
  const res = await fetch('/api/users');
  const data = await res.json();
  return data.users || [];
}

export default function UserList({ users }: { users: User[] }) {
  return (
    <Card className="bg-neutral-900 text-white">
      <CardHeader>
        <CardTitle>People with access</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {users.map((user, idx) => (
            <li key={user.email} className="flex items-center gap-4">
              <Avatar>
                <AvatarFallback>{user.name[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="font-medium">{user.name}</div>
                <div className="text-neutral-400 text-sm">{user.email}</div>
              </div>
              <div>
                <span className="bg-neutral-800 px-3 py-1 rounded text-sm">Can edit</span>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
} 