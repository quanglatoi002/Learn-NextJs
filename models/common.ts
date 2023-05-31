import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ReactNode } from 'react';

export interface LayoutProps {
  children: ReactNode;
}

export type NextPageWithLayout = NextPage & {};

export type AppPropsWithLayout = AppProps & {};
