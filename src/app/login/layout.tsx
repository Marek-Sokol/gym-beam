export default function LoginLayout({children}: {children: React.ReactNode}) {
  return (
    <div className="flex py-8 px-4 h-full flex-col items-center justify-center">
      {children}
    </div>
  )
}