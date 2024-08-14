import { useState } from 'react';
import Todo from './components/Todo'
import AddTodo from './components/AddTodo';
import New from '../../New';
function App() {
  const [todoItems,setTodoItems] = useState([
    {
    id:1,
    title:'my todo1',
    done: false,
    },
    {
      id:2,
      title:'my todo2',
      done: false,
      },
    {
      id:3,
      title:'my todo3',
      done: true,
      },

]);

  // AddTodo 컴포넌트는 상위 컴포넌트 items에 접근 부락능 
  // 상위  컴포넌트인 App 은 AddTodo에 접근 가능 
  // -> APp 컴포넌트에 add()함수를 추가하고 해당 함수를 AddTodo 프로퍼티로 넘겨 AddTodo 이용

  const addItem = (newItem) => {
    newItem.id = todoItems.length + 1; // id 추가
    newItem.done = false; // done 초기화

    setTodoItems([...todoItems, newItem]);
    // ...todoItems : {id:1... },{id:2... }  전부 값 가져옴
  }
const deletedItem = (targetItem) => {
  console.log(">>>", targetItem);
  
  const newTodoItems = todoItems.filter((e)=> 
    e.id !== targetItem.id
  );
  setTodoItems(newTodoItems);
  
}
  return (
    <div className="App">
      <AddTodo addItem={addItem}/>
      {/* <Todo />
      <Todo />
      <Todo /> */}
      {todoItems.map((item)=>{
        console.log(item);
        return <Todo key={item.id} item={item} deletedItem={deletedItem}/>  // key,item,deletedItem = props
      })}
    </div>
  );
}

export default App;
