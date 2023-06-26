import { getCookie, hasCookie } from 'cookies-next';

const isAuthorized = (...roles: string[]) => {
  const checkCookie = hasCookie('role');
  const cookie = getCookie('role');

  if (checkCookie && typeof cookie === 'string') {
    return roles.includes(cookie);
  }

  return false;
};

export const checkRole = () => {
  const checkCookie = hasCookie('role');
  const cookie = getCookie('role');
  if (checkCookie) {
    return cookie;
  } else {
    return null;
  }
};

export default isAuthorized;
