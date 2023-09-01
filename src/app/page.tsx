'use client';
import FoundingTeam from '@/components/landing_page/FoundingTeam/FoundingTeam';
import HeroSection from '@/components/landing_page/Hero/HeroSection';
import SecondSection from '@/components/landing_page/SecondSection/SecondSection';
import ThirdSection from '@/components/landing_page/ThirdSection/ThirdSection';
import { useThemeContext } from '@/contexts/theme.context';
import LandingPageFooter from '@/layouts/Footers/LandingPageFooter';
import GlobalNavbar from '@/layouts/Navbar/GlobalNavbar';

export default function Home() {
  const { setThemeMode, themeMode } = useThemeContext();

  return (
    <div className={`relative ${themeMode ? 'bg-dark-600' : ' bg-white'}`}>
      <GlobalNavbar />
      <div className=" lg:p-[20px]">
        <HeroSection themeMode={themeMode} />
        <SecondSection themeMode={themeMode} />
        <ThirdSection themeMode={themeMode} />
        <FoundingTeam themeMode={themeMode} />
        <LandingPageFooter themeMode={themeMode} />
      </div>
    </div>
  );
}
