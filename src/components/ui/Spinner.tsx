import { twMerge as cn } from 'tailwind-merge'

export function Spinner({className, ...props}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex justify-center items-center", className)} {...props}>
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
    </div>
  );
}