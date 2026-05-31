import "./globals.css";

export const metadata = {
  title: "Entertainment Division Training",
  description: "MainStreet RP training website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="et">
      <body>{children}</body>
    </html>
  );
}
