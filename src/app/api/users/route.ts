import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';

export async function GET() {
  try {
    await connectDB();
    const users = await User.find({}, 'name email');
    return NextResponse.json({ users });
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching users' }, { status: 500 });
  }
} 