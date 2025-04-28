import { twMerge as cn } from 'tailwind-merge';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export function InputText({ className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        'text-base font-medium text-black focus:outline-none focus:ring-2 focus:ring-black-500 focus:ring-opacity-50 dark:bg-red-500 dark:hover:bg-red-600',
        className
      )}
      {...props}
    />
  );
}
