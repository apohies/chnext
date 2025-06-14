import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function Contact() {
  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle>Contact</CardTitle>
        <CardDescription>Contact information and support</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div>
            <span className="font-semibold">Email:</span> support@example.com
          </div>
          <div>
            <span className="font-semibold">Phone:</span> +1 234 567 890
          </div>
          <div>
            <span className="font-semibold">Address:</span> 123 Main St, City, Country
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 