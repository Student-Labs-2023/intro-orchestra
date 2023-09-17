export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <head>
        <meta
          name="viewport"
          content="initial-scale=1, viewport-fit=cover"
        ></meta>
      </head>
      <body className="relative">{children}</body>
    </>
  );
}