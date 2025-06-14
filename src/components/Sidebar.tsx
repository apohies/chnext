import { Button } from '@/components/ui/button';

interface SidebarProps {
  selected: string;
  onSelect: (section: string) => void;
}

const options = [
  { key: 'users', label: 'Users' },
  { key: 'contact', label: 'Contact' },
  { key: 'information', label: 'Information' },
];

export default function Sidebar({ selected, onSelect }: SidebarProps) {
  return (
    <aside className="bg-neutral-900 text-white w-56 min-h-screen p-6 flex flex-col gap-2">
      <div className="text-lg font-bold mb-8">Dashboard</div>
      {options.map((opt) => (
        <Button
          key={opt.key}
          variant={selected === opt.key ? 'default' : 'ghost'}
          className="justify-start w-full"
          onClick={() => onSelect(opt.key)}
        >
          {opt.label}
        </Button>
      ))}
    </aside>
  );
} 