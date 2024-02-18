import React, { useCallback, useReducer, useRef } from 'react';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }
  return array;
}

function todoReducer(todos, action) {
  switch (action.type) {
    case 'INSERT':
      return todos.concat(action.todo);
    case 'REMOVE':
      return todos.filter((todo) => todo.id !== action.id);
    case 'TOGGLE':
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,
      );
    default:
      return todos;
  }
}

const App = () => {
  // Array
  const array = [1, 2, 3, 4, 5];

  const nextArrayBad = array;
  nextArrayBad[0] = 100;
  console.log('array : ' + array);
  console.log('nextArrayBad : ' + nextArrayBad);
  console.log(array === nextArrayBad);

  const nextArrayGood = [...array];
  nextArrayGood[0] = 100;
  console.log('array : ' + array);
  console.log('nextArrayGood : ' + nextArrayGood);
  console.log(array === nextArrayGood);

  // Object
  const object = {
    foo: 'bar',
    value: 1,
  };

  const nextObjectBad = object;
  nextObjectBad.value = nextObjectBad.value + 1;
  console.log('object : ' + object);
  console.log('nextObjectBad : ' + nextObjectBad);
  console.log(object === nextObjectBad);

  const nextObjectGood = {
    ...object,
    value: object.value + 1,
  };
  console.log('object : ' + object);
  console.log('nextObjectGood : ' + nextObjectGood);
  console.log(object === nextObjectGood);

  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);
  // const [todos, setTodos] = useState(createBulkTodos);
  const nextId = useRef(2501);
  // const [todos, setTodos] = useState([
  //   { id: 1, text: '리액트의 기초 알아보기', checked: true },
  //   { id: 2, text: '컴포넌트 스타일링 해보기', checked: true },
  //   { id: 3, text: '일정관리앱 만들어보기', checked: false },
  // ]);

  // const nextId = useRef(4);

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      // setTodos(todos.concat(todo));
      // setTodos((todos) => todos.concat(todo));
      dispatch({ type: 'INSERT', todo });
      nextId.current += 1;
    },
    // [todos],
    [],
  );

  const onRemove = useCallback(
    (id) => {
      // setTodos(todos.filter((todo) => todo.id !== id));
      // setTodos((todos) => todos.filter((todo) => todo.id !== id));
      dispatch({ type: 'REMOVE', id });
    },
    // [todos],
    [],
  );
  //asd
  const onToggle = useCallback(
    (id) => {
      // setTodos(
      //   (todos) =>
      //     todos.map((todo) =>
      //       todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      //     ),
      // );
      dispatch({ type: 'TOGGLE', id });
    },
    // [todos],
    [],
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
