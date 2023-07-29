import ReduxProvider from '@/store/ReduxProvider';
// import { Inter } from 'next/font/google';
import { ThemeContextProvider } from '@/contexts/theme.context';
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
      <link rel="icon" type="image/png" href="/icon1.png" sizes="32x32" />
      <link rel="icon" type="image/png" href="/icon2.png" sizes="57x57" />
      <link rel="icon" type="image/png" href="/icon3.png" sizes="76x76" />
      <link rel="icon" type="image/png" href="/icon4.png" sizes="96x96" />
      <link rel="icon" type="image/png" href="/icon5.png" sizes="128x128" />
      <link rel="icon" type="image/png" href="/icon6.png" sizes="192x192" />
      <link rel="icon" type="image/png" href="/icon7.png" sizes="228x228" />
      {/* <!-- Android --> */}
      <link rel="shortcut icon" href="/icon6.png" sizes="192x192" />
      {/* <-- Apple Icon --> */}
      <link
        rel="apple-touch-icon"
        type="image/png"
        href="/apple-icon1.png"
        sizes="120x120"
      />
      <link
        rel="apple-touch-icon"
        type="image/png"
        href="/apple-icon2.png"
        sizes="152x152"
      />
      <link
        rel="apple-touch-icon"
        type="image/png"
        href="/apple-icon3.png"
        sizes="180x180"
      />
      <body>
        <ReduxProvider>
          <ThemeContextProvider>{children}</ThemeContextProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
