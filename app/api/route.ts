import { NextResponse } from 'next/server';

export async function GET() {
  await pause(5000);
  return NextResponse.json({ 
      name: 'Todo App',
      description: 'A simple todo app built with Next.js and Radix UI',
   });
}

export async function pause(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
