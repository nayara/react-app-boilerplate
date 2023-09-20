import React from 'react';
import { ReactQueryProvider } from './ReactQuery.provider';

type TProvidersProps = {
  children: React.ReactNode;
};

export const Providers = ({ children }: TProvidersProps) => {
  return <ReactQueryProvider>{children}</ReactQueryProvider>;
};
