import "../../globals.css";

export const metadata = {
  title: "Знакомство с Оркестром",
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
