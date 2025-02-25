import { GlobalStyles } from '@/styles/globalStyles';
import { SessionProvider } from 'next-auth/react';
import ContainerForgotPassword from '.';

export default {
  title: 'containers/ContainerForgotPassword',
  component: ContainerForgotPassword,
  args: {},
  argTypes: {},
};

export const Template = () => {
  return (
    <SessionProvider>
      <GlobalStyles />
      <ContainerForgotPassword />
    </SessionProvider>
  );
};
