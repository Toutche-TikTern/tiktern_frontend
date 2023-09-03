import { ThemeContextProvider } from '@/contexts/theme.context';
import ProgressLoader from '@/layouts/ProgressLoader';
import ReduxProvider from '@/store/ReduxProvider';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/globals.scss';
import '../styles/tailwind.css';

export const metadata = {
  title: 'TikTern',
  description:
    "TikTern is a rider-powered (Web3) economy where riders own and monetise the content, activities, events they create. It's mission is to get more people onto bikes & eBikes and help build a better world around us.",
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
          <ThemeContextProvider>
            <ProgressLoader>{children}</ProgressLoader>
          </ThemeContextProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
