'use client';
import FoundingTeam from '@/components/landing_page/FoundingTeam/FoundingTeam';
import HeroSection from '@/components/landing_page/Hero/HeroSection';
import SecondSection from '@/components/landing_page/SecondSection/SecondSection';
import ThirdSection from '@/components/landing_page/ThirdSection/ThirdSection';
import LandingPageFooter from '@/layouts/Footers/LandingPageFooter';
import GlobalNavbar from '@/layouts/Navbar/GlobalNavbar';
import { setCookie } from 'cookies-next';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';

export default function Home() {
  const { data: session } = useSession();
  console.log('SESSION:::', session);

  return (
    <div className="relative ">
      <GlobalNavbar />
      <div className="p-[20px]">
        <HeroSection />
        <SecondSection />
        <ThirdSection />
        <FoundingTeam />
        <LandingPageFooter />
      </div>
    </div>
  );
}
