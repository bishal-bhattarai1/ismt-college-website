import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ISMT College - Earn UK Qualifications in Nepal",
  description:
    "ISMT College offers internationally recognized qualifications from University of Sunderland, UK, and Pearson Edexcel, UK. Established in 2011, bridging the gap between academia and industry.",
  keywords:
    "ISMT College, Nepal education, UK qualifications, University of Sunderland, Pearson Edexcel, Computer Science, Business Management, Tourism, Hospitality, Cyber Security",
  authors: [{ name: "Siddhant Bhattarai" }],
  creator: "Siddhant Bhattarai",
  publisher: "ISMT College",
  robots: "index, follow",
  openGraph: {
    title: "ISMT College - Earn UK Qualifications in Nepal",
    description:
      "ISMT College offers internationally recognized qualifications from University of Sunderland, UK, and Pearson Edexcel, UK.",
    url: "https://ismt.edu.np",
    siteName: "ISMT College",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ISMT College - Earn UK Qualifications in Nepal",
    description:
      "ISMT College offers internationally recognized qualifications from University of Sunderland, UK, and Pearson Edexcel, UK.",
    creator: "@siddhantbhattarai",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="Siddhant Bhattarai" />
        <meta name="developer" content="Siddhant Bhattarai" />
        <link rel="canonical" href="https://ismt.edu.np" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
