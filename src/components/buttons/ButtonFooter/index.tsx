import Start from '@public/imagens/início.svg';
import Image from 'next/image';
import * as S from './styles';

export default function ButtonFooter({
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <S.ButtonFooter {...props}>
      {children || <Image src={Start} alt="Botão de inicio" />}
    </S.ButtonFooter>
  );
}
