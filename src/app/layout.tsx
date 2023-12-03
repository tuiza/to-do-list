import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import StyledComponentsRegistry from './lib/registry'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lista de Tarefas',
  description: 'Desafio do Frontenf Mentor - Tuiza',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <body>{children}
      </body></StyledComponentsRegistry>
    </html>
  )
}
