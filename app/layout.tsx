import "./globals.css";

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
