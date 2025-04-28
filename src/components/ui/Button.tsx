import { twMerge as cn } from 'tailwind-merge'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export function Button({children, className, ...props}: ButtonProps) {
  return (
    <button
      className={
        cn(
          "bg-red-600 cursor-pointer px-6 py-3 text-base font-medium text-white shadow-md transition duration-300 ease-in-out hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 dark:bg-red-500 dark:hover:bg-red-600",
          className,
          props.disabled && "opacity-50 cursor-not-allowed"
        )
      }
      {...props}
    >
      {children}
    </button>
  )
}