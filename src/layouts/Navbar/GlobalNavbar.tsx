'use client';

import SOCIAL_ICONS from '@/constant/socialIcons';
import { MaskIcon } from '@/styles/styled_components/components/Global.styled';
import { checkRole } from '@/utils/isAuthorized';
import { CookieValueTypes } from 'cookies-next';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import {
  IconsWrapper,
  NavCol1,
  NavCol2,
  NavbarContainer,
  SigninButton,
} from './Navbar.styled';

type Props = {};

const GlobalNavbar = (props: Props) => {
  const [isAuth, setIsAuth] = useState<
    string | null | undefined | CookieValueTypes
  >('');
  const route = useRouter();
  const [navbarHeight, setNavbarHeight] = useState<number>(80);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0 && navbarHeight === 80) {
        setNavbarHeight(60);
      } else if (scrollTop === 0 && navbarHeight === 60) {
        setNavbarHeight(80);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // console.log(navbarHeight);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navbarHeight]);

  useEffect(() => {
    setIsAuth(checkRole());
    console.log(isAuth);
  }, [isAuth]);

  return (
    <NavbarContainer height={navbarHeight}>
      <NavCol1>
        <Image
          src={`/logos/tik_logo-black.svg`}
          alt="TikTern Logo"
          className="object-contain"
          // sizes="200px"
          width={150}
          height={30}
        />
      </NavCol1>
      <NavCol2>
        <IconsWrapper>
          {SOCIAL_ICONS.map((icon, index) => (
            <MaskIcon
              key={index}
              id={icon.id}
              url={icon.url}
              height={icon.height}
              width={icon.width}
              margin={icon.margin}
              selected={icon.selected}
              color={icon.color}
              className=" hover:animate-pulse hover:cursor-pointer"
            />
          ))}
        </IconsWrapper>
        {isAuth === 'user' ? (
          <SigninButton onClick={() => route.push('/user')}>
            My Dashboard
          </SigninButton>
        ) : isAuth === 'admin' ? (
          <SigninButton onClick={() => route.push('/admin')}>
            Admin Dashboard
          </SigninButton>
        ) : (
          <div className="flex gap-2">
            <SigninButton
              onClick={() => route.push('/auth/login')}
              className="!bg-white !text-black !ring-1 !ring-black/10"
            >
              Sign In
            </SigninButton>
            <SigninButton onClick={() => route.push('/auth/signup')}>
              Sign Up
            </SigninButton>
          </div>
        )}
      </NavCol2>
    </NavbarContainer>
  );
};

export default GlobalNavbar;
