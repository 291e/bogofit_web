import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Bogofit - 건강한 라이프스타일",
    template: "%s | Bogofit",
  },
  description:
    "Bogofit - 당신의 건강한 라이프스타일을 위한 최적의 솔루션. AI 기반 가상 피팅 플랫폼으로 쇼핑의 새로운 경험을 제공합니다.",
  keywords: [
    "가상 피팅",
    "AI 피팅",
    "온라인 쇼핑",
    "패션",
    "사이즈 추천",
    "스타일 추천",
  ],
  authors: [{ name: "Bogofit Team" }],
  creator: "Bogofit",
  publisher: "Bogofit",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://bogofit.kr"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Bogofit - 건강한 라이프스타일",
    description: "Bogofit - 당신의 건강한 라이프스타일을 위한 최적의 솔루션",
    url: "https://bogofit.kr",
    siteName: "Bogofit",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bogofit",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bogofit - 건강한 라이프스타일",
    description: "Bogofit - 당신의 건강한 라이프스타일을 위한 최적의 솔루션",
    images: ["/twitter-image.jpg"],
    creator: "@bogofit",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
