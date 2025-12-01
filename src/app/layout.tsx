import './globals.css';

export const metadata = {
  title: 'Instagram Stories',
  description: 'Stories app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
