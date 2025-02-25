'use client';

import { colors, fonts } from '@/styles/variables';
import styled from 'styled-components';

type InputProps = {
  $hasErro?: boolean;
  $as?: string;
};

export const Div = styled.div`
  max-width: 100%;
  width: 100%;
  height: 72px;
`;

export const InputContainer = styled.div<InputProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  color: ${({ $hasErro }) => ($hasErro ? colors.danger : colors.black)};
`;

export const Children = styled.div`
  position: absolute;
  top: 35%;
  right: 3%;
`;

export const BorderWhite = styled.span`
  position: relative;
  display: block;
  height: 1px;
  background-color: ${colors.white};
  top: 12px;
  left: -2px;
  width: 113%;
`;
export const Label = styled.label`
  position: relative;
  z-index: 1;
`;

export const LabelInput = styled.div`
  font-size: ${fonts.sizes.xxsmall};
  font-weight: normal;
  line-height: 24px;
  letter-spacing: 0.5px;
  position: absolute;
  top: 31%;
  left: 16px;
  pointer-events: none;
`;

export const InputStyle = styled.input<InputProps>`
  border: 1px solid ${({ $hasErro }) => ($hasErro ? colors.danger : colors.shadow)};
  border-radius: 8px;
  height: 56px;
  outline: none;
  padding: 8px 0 8px 16px;
  font-size: ${fonts.sizes.xxsmall};
  line-height: 24px;
  letter-spacing: 0.5px;
  resize: none;
  /* max-width: 100%; */

  &:focus ~ ${LabelInput} {
    top: -15px;
    font-size: ${fonts.sizes.xxxsmall};
    background-color: transparent;
    padding: 0.2rem;
    transition: all 0.4s ease;
  }

  &::placeholder {
    color: transparent;
  }
  &:not(:placeholder-shown) ~ ${LabelInput} {
    top: -15px;
    font-size: 0.85rem;
    padding: 0.2rem;
  }
  &::-ms-reveal,
  ::-ms-clear {
    display: none;
  }
`;
