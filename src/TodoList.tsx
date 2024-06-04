import React from 'react';
import { useForm } from 'react-hook-form';

interface IForm {
  todo: string;
}

export default function TodoList() {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValue = (data: IForm) => {
    console.log('add todo', data.todo);
    setValue('todo', '');
  };
  return (
    <div>
      <form onSubmit={handleSubmit(handleValue)}>
        <input
          {...register('todo', { required: 'Please write todo' })}
          placeholder="Write a todo"
        />
        <button>Add</button>
      </form>
    </div>
  );
}
