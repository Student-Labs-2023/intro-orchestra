import "../globals.css";

export const metadata = {
  title: "Знакомство с Оркестром",
  viewport: {
    width: "device-width",
    initialScale: 1,
    viewportFit: "cover",
    maximumScale: 1,
    userScalable: "no",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <head>
        <link rel="manifest" href="./manifest.json" />
      </head>
      <body className="relative">{children}</body>
    </html>
  );
}

