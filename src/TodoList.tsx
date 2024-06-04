import React from 'react';
import { useForm } from 'react-hook-form';

interface IForm {
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  password1: string;
  // 기타 에러 항목 추가
  extraError?: 'string';
}

export default function TodoList() {
  // handleSubmit 이 validation, preventDefault 등을 담당
  // formState: 에러 처리
  // RegExp : 코드에 문자열이 어떤 종류인지, 어떻게 생겨야하는지 정규식을 만들어 알려줄수있음 (이메일인지 전화번호인지 등)
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IForm>({
    defaultValues: {
      email: '@naver.com',
    },
  });
  const onValid = (data: IForm) => {
    // 패스워드 비교
    if (data.password !== data.password1) {
      setError(
        'password1',
        { message: 'password are not the same.' },
        { shouldFocus: true }
      );
    }
    // 다른 추가적인 에러도 추가가능
    // setError('extraError', { message: 'Server offline!!!!!!!' });
  };
  console.log(errors);

  return (
    <div>
      <form
        style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register('email', {
            // HTML에 required 를 넣는것보다 안전.
            required: 'Email is required',
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              // 에러 처리시에 메세지를 보내는것도 가능
              message: 'Only naver.com emails allowed',
            },
          })}
          placeholder="Email"
        />
        {/* 에러메시지를 html로 보여주기 */}
        <span>{errors?.email?.message}</span>
        <input
          // 특정 value 에러처리
          // validate: (value)=> false 로 하면 항상 에러 처리
          {...register('firstName', {
            required: 'write here',
            // nico, nick 포함시 validate에러처리 후 메세지
            validate: {
              noNico: (value) =>
                value.includes('nico') ? 'no nicos allow' : true,
              noNick: (value) =>
                value.includes('nick') ? 'no nicks allow' : true,
            },
          })}
          placeholder="First Name"
        />
        <span>{errors?.firstName?.message}</span>
        <input
          {...register('lastName', { required: 'write here' })}
          placeholder="Last Name"
        />
        <span>{errors?.lastName?.message}</span>
        <input
          {...register('username', { required: 'write here', minLength: 10 })}
          placeholder="Username"
        />
        <span>{errors?.username?.message}</span>
        <input
          {...register('password', { required: 'write here', minLength: 5 })}
          placeholder="Password"
        />
        <span>{errors?.password?.message}</span>
        <input
          {...register('password1', {
            required: 'Password is required',
            minLength: {
              value: 5,
              message: 'Your password is too short.',
            },
          })}
          placeholder="Password1"
        />
        <span>{errors?.password1?.message}</span>
        <button>Add</button>
        <span>{errors.extraError?.message}</span>
      </form>
    </div>
  );
}
