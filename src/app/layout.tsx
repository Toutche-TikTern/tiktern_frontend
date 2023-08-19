import NextAuthSessionProvider from '@/config/NextAuthSessionProvider';
import { ThemeContextProvider } from '@/contexts/theme.context';
import ReduxProvider from '@/store/ReduxProvider';
import '../styles/globals.scss';
import '../styles/tailwind.css';

export const metadata = {
  title: 'TikTern',
  description:
    "TikTern's mission is to get more people onto bikes & E-bikes and help build a better world around us.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <NextAuthSessionProvider>
          <ReduxProvider>
            <ThemeContextProvider>{children}</ThemeContextProvider>
          </ReduxProvider>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
