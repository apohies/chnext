import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function Information() {
  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle>Information</CardTitle>
        <CardDescription>General information about the system</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div>
            <span className="font-semibold">Version:</span> 1.0.0
          </div>
          <div>
            <span className="font-semibold">Developed by:</span> Tu equipo
          </div>
          <div>
            <span className="font-semibold">Description:</span> This dashboard allows you to manage users, view contact info, and see system information.
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 