import "./globals.css";
export const metadata = {
  title: "Знакомство с Оркестком",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}