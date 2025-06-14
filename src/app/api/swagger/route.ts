import { NextRequest } from 'next/server';
import swaggerSpec from '@/swagger';

export async function GET(req: NextRequest) {
  return new Response(JSON.stringify(swaggerSpec), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
} 