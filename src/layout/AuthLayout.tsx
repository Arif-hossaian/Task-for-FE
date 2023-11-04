import React, { FC, ReactNode } from 'react';
import PublicNavbar from '../components/auth/PublicNavbar';

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div>
      <PublicNavbar />
      {children}
    </div>
  );
};

export default AuthLayout;
