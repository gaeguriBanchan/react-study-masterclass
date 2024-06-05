import React from 'react';
import { useForm } from 'react-hook-form';
import { atom, useRecoilState } from 'recoil';

interface IForm {
  todo: string;
}

interface ITodo {
  text: string;
  id: number;
  category: 'TO_DO' | 'DOING' | 'DONE';
}

const todoState = atom<ITodo[]>({
  key: 'todo',
  default: [],
});

export default function TodoList() {
  // useRecoilValue : value 를 불러올때
  // const value = useRecoilValue(todoState);
  // useSetRecoilState : value를 바꾸고 싶을때
  // const modFn = useSetRecoilState(todoState);
  // useRecoilState: value를 불러오고 변경함수도 얻고싶을때, setState 와 유사
  const [todos, setTodos] = useRecoilState(todoState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValue = (data: IForm) => {
    console.log('add todo', data.todo);
    setTodos((oldTodos) => [
      { text: data.todo, id: Date.now(), category: 'TO_DO' },
      ...oldTodos,
    ]);
    setValue('todo', '');
  };
  console.log(todos);

  return (
    <div>
      <h1>ToDos</h1>
      <hr />
      <form onSubmit={handleSubmit(handleValue)}>
        <input
          {...register('todo', { required: 'Please write todo' })}
          placeholder="Write a todo"
        />
        <button>Add</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}
