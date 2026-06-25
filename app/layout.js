import './globals.css'

export const metadata = {
  title: 'AV Sales Consultancy | B2B Sales Experts',
  description: 'AV Sales Consultancy — Driving Revenue, Building Relationships, Delivering Results. B2B sales consultancy for ambitious UK businesses.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
