import { ThemeContextProvider } from '@/contexts/theme.context';
import ReduxProvider from '@/store/ReduxProvider';
import 'react-toastify/dist/ReactToastify.css';
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
        <ReduxProvider>
          <ThemeContextProvider>{children}</ThemeContextProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
