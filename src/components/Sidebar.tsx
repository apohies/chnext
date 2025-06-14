"use client";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const options = [
  { key: 'users', label: 'Users', href: '/dashboard/users' },
  { key: 'contact', label: 'Contact', href: '/dashboard/contact' },
  { key: 'information', label: 'Information', href: '/dashboard/information' },
];

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="bg-neutral-900 text-white w-56 min-h-screen p-6 flex flex-col gap-2">
      <div className="text-lg font-bold mb-8">Dashboard</div>
      {options.map((opt) => (
        <Link href={opt.href} key={opt.key} className="w-full">
          <Button
            variant={pathname === opt.href ? 'default' : 'ghost'}
            className="justify-start w-full"
          >
            {opt.label}
          </Button>
        </Link>
      ))}
    </aside>
  );
} 