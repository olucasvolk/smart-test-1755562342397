import './globals.css'

export const metadata = {
  title: 'Landing Page - Twizo',
  description: 'Página de destino moderna',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  )
}