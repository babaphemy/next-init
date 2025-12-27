import { authOptions } from '@/lib/auth-options';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

interface Props {
  params: Promise<{
    role: 'seller' | 'admin' | 'buyer';
  }>;
}
export default async function RolePage({ params }: Props) {
  const { role } = await params;
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    redirect('/');
  }
  if (session.user.role !== role) {
    const correctPath = `/dashboard/${session.user.role}`;
    redirect(correctPath);
  }

  return <div>Role: {role}</div>;
}
export function generateStaticParams() {
  return [{ role: 'seller' }, { role: 'admin' }, { role: 'buyer' }];
}
