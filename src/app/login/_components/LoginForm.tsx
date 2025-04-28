'use client';
import { InputText, Button } from '@/components';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useCallback } from 'react';
import { useMutation } from '@tanstack/react-query';
import { login } from '@/api/login.mutation';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';

const schema = z.object({
  username: z.string().min(3),
  password: z.string().min(6, 'Heslo musí mať minimálne 6 znakov'),
});

type LoginFormData = z.infer<typeof schema>;

export default function LoginForm() {
  const { storeToken, token } = useAuth();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const { isError, isPending, mutateAsync } = useMutation<
    string,
    Error,
    LoginFormData
  >({
    mutationFn: login,
  });

  const onSubmit = useCallback(
    async (data: LoginFormData) => {
      if (isPending) return;
      const result = await mutateAsync(data);
      if (!result) return;

      storeToken(result);
      router.replace('/');
    },
    [isPending, mutateAsync, router, storeToken]
  );

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
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
          {...register('username')}
        />
        {errors.username && (
          <p className="absolute text-sm text-red-500 -bottom-5 left-0">
            {errors.username.message}
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
          {...register('password')}
        />
        {errors.password && (
          <p className="absolute text-sm text-red-500 -bottom-5 left-0">
            {errors.password.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        className="w-full mt-2 h-14 font-bold text-xl"
        disabled={isPending || !!token}
      >
        PRIHLÁSIŤ
      </Button>
      {isError && <p className="text-red-500">Prihlásenie zlyhalo</p>}
    </form>
  );
}

// johnd, m38rmF$
