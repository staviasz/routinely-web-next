'use client';

import ButtonPrimary from '@/components/buttons/ButtonPrimary';
import ErrorApiContainer from '@/components/containers/ErrorApiContainer';
import { makeSignUp } from '@/factories/services/makeSignUp';
import type { SignUp } from '@/types/signUp';
import infoError from '@public/icons/infoErro.svg';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import ErrorMessage from '../fields/ErrorMessage';
import Input from '../fields/Input';
import * as S from './styles';

export interface ISignUpProps extends SignUp {
  confirmPassword: string;
}

export default function SignUpForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading] = useState(false);
  const [labelConfirmPassword, setLabelConfirmPassword] = useState('Repetir senha');
  const [errorsApi, setErrorsApi] = useState<string[] | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    watch,
  } = useForm<ISignUpProps>({
    mode: 'onChange',
  });

  const password = watch('password');
  const confirmPassword = watch('confirmPassword');

  const handleSignUp = async (data: ISignUpProps) => {
    const { ok, body } = await makeSignUp(data);
    ok ? router.push('/dashboard') : setErrorsApi(body);
  };

  useEffect(() => {
    const handleResize = () => {
      window.innerWidth < 904
        ? setLabelConfirmPassword('Repetir')
        : setLabelConfirmPassword('Repetir senha');
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <S.Form onSubmit={handleSubmit(handleSignUp)}>
      <Input
        label="Nome"
        name="name"
        hasError={!!errors.name}
        type="text"
        id="name"
        placeholder="nome"
        register={register('name', {
          required: 'O campo nome é obrigatório.',
          minLength: {
            value: 3,
            message: 'O campo nome deve conter pelo menos 3 caracteres.',
          },
          maxLength: {
            value: 100,
            message: 'O campo nome deve conter no maximo 100 caracteres.',
          },
          pattern: {
            value: /^[a-zA-ZÀ-ÿ\s~]+$/,
            message: 'O campo nome não pode conter números nem caracteres especiais.',
          },
        })}
        errorMessage={errors.name?.message}
      >
        {!!errors.name && <Image src={infoError} alt="icone de erro no campo nome" />}
      </Input>

      <Input
        label="Email"
        name="email"
        hasError={!!errors.email}
        errorMessage={errors.email?.message}
        type="text"
        id="Email"
        placeholder="email"
        register={register('email', {
          required: 'O campo email é obrigatório.',
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: 'E-mail inválido.',
          },
        })}
      >
        {!!errors.email && <Image src={infoError} alt="icone de info erro no campo email" />}
      </Input>
      <S.ContainerPasswords>
        <Input
          label="Senha"
          name="password"
          hasError={!!errors.password}
          type={showPassword ? 'text' : 'password'}
          id="password"
          placeholder="senha"
          register={register('password', {
            required: 'O campo senha é obrigatório.',
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%&*=])[a-zA-Z\d!@#$%&*=]{6,}$/,
              message:
                'A senha deve ter o mínimo de 6 caracteres e conter letras maiúsculas e minúsculas, números e símbolos como ! @ # $ % & * =',
            },
            onChange({ target }: React.ChangeEvent<HTMLInputElement>) {
              target.value !== confirmPassword
                ? setError('confirmPassword', {
                    type: 'validate',
                    message: 'As senhas devem ser iguais',
                  })
                : setError('confirmPassword', {
                    type: 'validate',
                    message: '',
                  });
            },
          })}
          errorMessage={errors.password?.message}
          autoComplete="password"
        >
          <S.ShowPasswordSpand onClick={() => setShowPassword(!showPassword)}>
            <>
              {errors.password && !showPassword ? (
                <Image src={infoError} alt="icone de info erro" />
              ) : showPassword ? (
                'ESCONDER'
              ) : (
                'EXIBIR'
              )}
            </>
          </S.ShowPasswordSpand>
        </Input>

        <Input
          label={labelConfirmPassword}
          name="confirmPassword"
          hasError={!!errors.confirmPassword?.message}
          type={showConfirmPassword ? 'text' : 'password'}
          id="confirmPassword"
          placeholder="confirmar senha"
          register={register('confirmPassword', {
            required: 'O campo repetir senha é obrigatório.',
            validate: value => value === password || 'As senhas devem ser iguais',
          })}
          errorMessage={errors.confirmPassword?.message}
          autoComplete="confirmPassword"
        >
          <S.ShowPasswordSpand onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
            <>
              {errors.confirmPassword && !showConfirmPassword ? (
                <Image src={infoError} alt="icone de info erro" />
              ) : showConfirmPassword ? (
                'ESCONDER'
              ) : (
                'EXIBIR'
              )}
            </>
          </S.ShowPasswordSpand>
        </Input>
      </S.ContainerPasswords>

      <S.TermsOfUseContainer>
        <S.Checkbox
          type="checkbox"
          role="textbox"
          {...register('acceptedTerms', {
            required: {
              value: true,
              message: 'O usuário deve estar de acordo com os termos.',
            },
          })}
        />

        <span>
          Declaro que li e concordo com os <a href="#">termos de uso e política de privacidade.</a>
        </span>
      </S.TermsOfUseContainer>
      {errors.acceptedTerms && (
        <ErrorMessage>{errors.acceptedTerms.message as string}</ErrorMessage>
      )}
      {errorsApi && <ErrorApiContainer errorMessages={errorsApi} />}
      <S.ContainerButtons>
        <ButtonPrimary disabled={loading}>
          {!loading ? 'Criar Conta' : 'Carregando...'}
        </ButtonPrimary>
      </S.ContainerButtons>
    </S.Form>
  );
}
