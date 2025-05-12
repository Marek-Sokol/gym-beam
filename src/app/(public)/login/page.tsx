import { Metadata } from 'next';
import LoginForm from './_components/LoginForm';

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login page',
};

export default function Login() {
  return (
    <main className="flex py-8 px-4 h-full flex-col items-center justify-center">
      <LoginForm />
    </main>
  );
}
