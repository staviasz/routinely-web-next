import LoginForm from '@/components/forms/login';
import Header from '@/components/headers';
import LogoShared from '@/components/logos/LogoShared';
import signInPageImage from '@public/imagens/signInPageImage.svg';
import Image from 'next/image';
import * as S from './styles';

export default function Login() {
  return (
    <>
      <Header header="secondary" hrefBackPage="/welcome" />
      <S.Wrapper>
        <div>
          <LogoShared />
          <S.Title>Acessar conta</S.Title>
          <LoginForm />
          <S.LinkNext href="/signup">Não tem uma conta?</S.LinkNext>
        </div>
        <Image src={signInPageImage} alt="Personagem abrindo a porta" />
      </S.Wrapper>
    </>
  );
}
