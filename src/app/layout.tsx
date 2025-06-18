import type { Metadata } from "next";
import { Nanum_Gothic } from "next/font/google";
import "./globals.css";

const nanumGothic = Nanum_Gothic({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});
export const metadata: Metadata = {
  title: {
    default: "보고핏(BOGOFIT) - AI 가상피팅, 내 몸에 딱 맞는 패션 추천",
    template: "%s | 보고핏(BOGOFIT) - AI 가상피팅",
  },
  description:
    "보고핏(BOGOFIT)은 인공지능(AI) 기반 가상 피팅 서비스로, 내 몸에 꼭 맞는 패션 아이템을 쉽고 빠르게 찾고, 실제 착용 모습을 미리 확인할 수 있습니다. 실시간 피팅, 맞춤 사이즈 추천, 스타일링 제안까지! 온라인 쇼핑의 새로운 기준을 경험하세요.",
  keywords: [
    "보고핏",
    "BOGOFIT",
    "가상 피팅",
    "AI 피팅",
    "패션 추천",
    "사이즈 추천",
    "AI 스타일링",
    "온라인 쇼핑",
    "스마트 쇼핑",
    "실시간 피팅",
    "패션테크",
  ],
  authors: [{ name: "보고핏(BOGOFIT) Team" }],
  creator: "보고핏(BOGOFIT)",
  publisher: "보고핏(BOGOFIT)",
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
    title: "보고핏(BOGOFIT) - AI 가상피팅, 내 몸에 딱 맞는 패션 추천",
    description:
      "AI 가상피팅 보고핏(BOGOFIT)에서 온라인으로 내 몸에 꼭 맞는 스타일을 쉽고 빠르게 미리 입어보고, 맞춤형 사이즈와 패션 아이템을 추천받으세요.",
    url: "https://bogofit.kr",
    siteName: "보고핏(BOGOFIT)",
    images: [
      {
        url: "/Header/BOGOFIT.svg",
        width: 1200,
        height: 630,
        alt: "보고핏(BOGOFIT) AI 가상피팅",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "보고핏(BOGOFIT) - AI 가상피팅, 내 몸에 딱 맞는 패션 추천",
    description:
      "보고핏(BOGOFIT)은 AI 가상피팅 및 맞춤형 패션 추천 서비스를 제공합니다.",
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
      <body className={nanumGothic.className}>{children}</body>
    </html>
  );
}
