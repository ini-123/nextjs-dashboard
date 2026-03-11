export const metadata = {
  title: 'Next.js Authentication',
  description: 'Example using NextAuth.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="inter_aa16092c-module__LxYS3q__className antialiased">
        {children}
      </body>
    </html>
  );
}
