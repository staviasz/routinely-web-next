'use client';

import ButtonEdit from '@/components/buttons/ButtonEdit';
import CustonCheckedBox from '@/components/forms/fields/CustonCheckedBox';
import { typeTaskOptions } from '@/constants/typeTask';
import { useTask } from '@/hooks/useTask';
import type { Task } from '@/types/task';
import type { TypeTask } from '@/types/typeTasks';
import { useState } from 'react';
import * as S from './styles';

export interface ICardTask {
  task: Task;
  onChangeCheck: (id: number) => void;
}

export default function CardTask({ task, onChangeCheck }: ICardTask) {
  const { setFormIsOpen, setSelectedTask, setSelectedTypeTask } = useTask();
  const { id, name, type, checked, category } = task;
  const [isChecked, setChecked] = useState<boolean>(checked);
  const descrptionFormated = name.length > 91 ? name.slice(0, 90) + '...' : name;
  const typeTaskOption = typeTaskOptions.find(item => item.type === type);
  const { name: title, icon } = typeTaskOption as TypeTask;

  const handleEditTask = () => {
    setSelectedTask(task);
    setFormIsOpen(true);
    setSelectedTypeTask(type);
  };

  const handleChecked = (id: number) => {
    setChecked(!isChecked);
    onChangeCheck(id);
  };
  return (
    <S.Container category={type} checked={isChecked}>
      <S.Title>
        <i>{icon}</i>
        {title}
      </S.Title>
      <S.ContainerDescription>
        <p>{descrptionFormated}</p>
        <CustonCheckedBox
          checked={isChecked}
          id={id.toString()}
          onClick={() => handleChecked(id)}
        />
      </S.ContainerDescription>
      <S.ContainerBtnIcon>
        <S.Button>{category}</S.Button>
        <ButtonEdit onClick={handleEditTask} />
      </S.ContainerBtnIcon>
    </S.Container>
  );
}
