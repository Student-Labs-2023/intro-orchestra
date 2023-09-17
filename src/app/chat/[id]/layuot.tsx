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
        <meta
          name="viewport"
          content="initial-scale=1, viewport-fit=cover"
        ></meta>
        <link rel="manifest" href="./manifest.json" />
      </head>
      <body className="relative">{children}</body>
    </html>
  );
}
