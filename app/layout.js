import './globals.css'

export const metadata = {
  title: 'AV Sales Consulting | B2B Sales Experts',
  description: 'AV Sales Consulting: Driving Revenue, Building Relationships, Delivering Results. B2B sales consulting for ambitious UK businesses.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XV4EJ1SMEL" />
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XV4EJ1SMEL');
        `}} />
      </head>
      <body>{children}</body>
    </html>
  )
}
