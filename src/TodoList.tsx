import React from 'react';
import { useForm } from 'react-hook-form';

export default function TodoList() {
  // handleSubmit 이 validation, preventDefault 등을 담당
  // formState: 에러 처리
  const { register, handleSubmit, formState } = useForm();
  const onValid = (data: any) => {
    console.log(data);
  };
  console.log(formState.errors);

  return (
    <div>
      <form
        style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          // HTML에 required 를 넣는것보다 안전.
          {...register('name', { required: true, minLength: 3 })}
          placeholder="Write a name"
        />
        <input
          {...register('email', {
            required: true,
            // 에러 처리시에 메세지를 보내는것도 가능
            minLength: {
              value: 10,
              message: 'email is to short.',
            },
          })}
          placeholder="Write a email"
        />
        <input
          {...register('password1', { required: true })}
          placeholder="Write a password1"
        />
        <input
          // 에러 처리시에 메세지를 보내는것도 가능
          {...register('password2', { required: 'please write password2' })}
          placeholder="Write a password2"
        />
        <button>Add</button>
      </form>
    </div>
  );
}
