import { useEffect } from 'react';
import Link from 'next/link';
import { LayoutProps } from '@/models';
export interface IMainLayoutProps {}

export function EmptyLayout({ children }: LayoutProps) {
    return <div>{children}</div>;
}
