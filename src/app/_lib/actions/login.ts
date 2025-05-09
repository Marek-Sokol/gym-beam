'use server';
import {
  schema,
  type LoginFormState,
} from '@/app/_lib/definitions/login-schema';
import { login } from '@/app/_lib/login.mutation';
import { createSession } from '@/app/_lib/auth/auth';
import { redirect } from 'next/navigation';

export async function loginAction(
  state: LoginFormState,
  formData: FormData
): Promise<LoginFormState> {
  const validationResult = schema.safeParse({
    username: formData.get('username') as string,
    password: formData.get('password') as string,
  });

  if (!validationResult.success) {
    return { errors: validationResult.error.flatten().fieldErrors };
  }

  const token = await login({
    username: formData.get('username') as string,
    password: formData.get('password') as string,
  });

  if (!token) {
    return { errors: { username: ['Neplatné užívateľské meno alebo heslo'] } };
  }

  await createSession(token);

  redirect('/');
}
