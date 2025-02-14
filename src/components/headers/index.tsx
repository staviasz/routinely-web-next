'use client';

import { makeLogout } from '@/factories/services/makeLogout';
import { signOut, useSession } from 'next-auth/react';
import type { IMenuItem } from './MenuHeader';
import PrimaryHeader from './Primary';
import SecondaryHeader from './Secondary';

export interface IHeader {
  header?: 'primary' | 'secondary';
  hrefBackPage?: string;
}

export default function Header({ header = 'primary', hrefBackPage = '/' }: IHeader) {
  const { data: session } = useSession();

  const menuItems: IMenuItem[] = [
    {
      name: 'Configurações',
      url: '#',
      id: 1,
    },
    {
      name: 'Metas',
      url: '#',
      id: 2,
    },
    {
      name: 'Notificações',
      url: '#',
      id: 3,
    },
    {
      name: 'Sair da conta',
      id: 4,
      onClick: async () => {
        await makeLogout(session?.user?.token!);
        await signOut({ callbackUrl: '/' });
      },
    },
  ];

  return header === 'primary' ? (
    <PrimaryHeader menuItems={menuItems} hasUser={!!session?.user} />
  ) : (
    <SecondaryHeader menuItems={menuItems} hrefBackPage={hrefBackPage} hasUser={!!session?.user} />
  );
}
