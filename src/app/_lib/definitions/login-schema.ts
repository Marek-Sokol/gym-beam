import { z } from 'zod';

export const schema = z.object({
  username: z.string().min(3),
  password: z.string().min(6, 'Heslo musí mať minimálne 6 znakov'),
});

export type LoginFormData = z.infer<typeof schema>;

export type LoginFormState =
  | {
      errors?: Partial<Record<keyof LoginFormData, string[]>>;
    }
  | undefined;
