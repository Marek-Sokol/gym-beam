'use client';

import { InputText, Button } from '@/components';
import { useActionState } from 'react';
import { loginAction } from '@/app/_lib/actions/login';

export default function LoginForm() {
  const [state, action, pending] = useActionState(loginAction, { errors: {} });

  return (
    <form
      action={action}
      className="flex flex-col w-full md:gap-y-6 gap-y-4 items-center justify-start max-w-lg"
    >
      <h1 className="w-full text-2xl font-bold md:text-3xl align-self-start text-start">
        Prihlásenie užívateľa
      </h1>

      <div className="flex w-full flex-col gap-y-2 relative">
        <label htmlFor="username" className="text-sm font-medium">
          Meno
        </label>
        <InputText
          type="text"
          className="flex w-full border-2 border-black bg-transparent p-2 text-sm focus:border-black"
          name="username"
        />
        {state?.errors?.username && (
          <p className="absolute text-sm text-red-500 -bottom-5 left-0">
            {state?.errors?.username}
          </p>
        )}
      </div>

      <div className="flex w-full flex-col gap-y-2 relative">
        <label htmlFor="password" className="text-sm font-medium">
          Heslo
        </label>
        <InputText
          type="password"
          className="flex w-full border-2 border-black bg-transparent p-2 text-sm focus:border-black"
          name="password"
        />
        {state?.errors?.password && (
          <p className="absolute text-sm text-red-500 -bottom-5 left-0">
            {state?.errors?.password}
          </p>
        )}
      </div>

      <Button
        type="submit"
        className="w-full mt-2 h-14 font-bold text-xl"
        disabled={pending}
        loading={pending}
      >
        PRIHLÁSIŤ
      </Button>
    </form>
  );
}
