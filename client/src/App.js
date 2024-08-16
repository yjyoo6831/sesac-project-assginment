import { useEffect, useState } from 'react';
import Todo from './components/Todo'
import AddTodo from './components/AddTodo';
import './styles/App.scss';
import axios from 'axios';
function App() {
  const [todoItems,setTodoItems] = useState([
    
]);
// [백앤드, 프론토 API 연결]
// -Read API
  useEffect(()=>{
    console.log("첫 렌더링 완료 ");
    
    const getTodos = async () => {
      let res = await axios.get('http://localhost:8080/api/todos');
      setTodoItems(res.data);
    };
    getTodos();
  },[]);


  // AddTodo 컴포넌트는 상위 컴포넌트 items에 접근 부락능 
  // 상위  컴포넌트인 App 은 AddTodo에 접근 가능 
  // -> APp 컴포넌트에 add()함수를 추가하고 해당 함수를 AddTodo 프로퍼티로 넘겨 AddTodo 이용

  const addItem = (newItem) => {
    // 프론트에서 보여주기 위한 테스트 --> 백이랑 연결할 땐 필요가 없다.
    // newItem.id = todoItems.length + 1; // key를 위한 id 추가.
    // newItem.done = false; // done 초기화
    console.log('newItem >>>>> ', newItem);

    // setTodoItems([...todoItems, newItem]);
    const addTodo = async () => {
      let res = await axios.post(
        'http://localhost:8080/api/todo',
        {
          title:newItem.title,
          done:newItem.done
        }
        // newItem 으로 해도 됨.
        
      );  
      setTodoItems([...todoItems, res.data]);
    };
    addTodo();
  };
// Delete API 연결
const deletedItem = (targetItem) => {
  console.log("targetItem >>>", targetItem);
  const deletedItem = async() => {
    let res = await axios.delete(
      `http://localhost:8080/api/todo/${targetItem.id}`,
      {
        data: {
          id:targetItem.id
        }
      }
    )
  }
  deletedItem();
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
        // console.log(item);
        return <Todo key={item.id} item={item} deletedItem={deletedItem}/>  // key,item,deletedItem = props
      })}
    </div>
  );
}

export default App;
