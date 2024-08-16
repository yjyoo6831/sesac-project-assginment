import { useEffect, useMemo, useState } from 'react';
import Todo from './components/Todo'
import AddTodo from './components/AddTodo';
import './styles/App.scss';
import axios from 'axios';
import { API_BASE_URL } from './app-config';
function App() {
  const [todoItems,setTodoItems] = useState([
    
]);
// [백앤드, 프론트 API 연결]
// -Read API
  useEffect(()=>{
    console.log("첫 렌더링 완료 ");
    // [env] 버전
    console.log(process.env.REACT_APP_DB_HOST);

    // [app-config.js 버전]
    console.log(`${API_BASE_URL}`);
    
    const getTodos = async () => {
      let res = await axios.get(`${process.env.REACT_APP_DB_HOST}/api/todos`);
      setTodoItems(res.data);

      // [app-config.js 버전]
      //let res = await axios.get(`${API_BASE_URL}/api/todos`);

    };
    getTodos();
  },[]);


  // AddTodo 컴포넌트는 상위 컴포넌트 items에 접근 부락
  // 상위 컴포넌트인 App 은 AddTodo에 접근 가능 
  // -> APP 컴포넌트에 add()함수를 추가하고 해당 함수를 AddTodo 프로퍼티로 넘겨 AddTodo 이용

  const addItem = async(newItem) => {
    // 프론트에서 보여주기 위한 테스트 --> 백이랑 연결할 땐 필요가 없다.
    // newItem.id = todoItems.length + 1; // key를 위한 id 추가.
    // newItem.done = false; // done 초기화
    console.log('newItem >>>>> ', newItem);

    // setTodoItems([...todoItems, newItem]);
    
      let res = await axios.post(
        `${process.env.REACT_APP_DB_HOST}/api/todo`,
        {
          title:newItem.title,
          done:newItem.done}
        // newItem 으로 해도 됨.    
      );  
      setTodoItems([...todoItems, res.data]);
      if (res.status === 200){
        setTodoItems([...todoItems, res.data]);
      }else{
        console.error('failed to add item');
        
      }
  };

// Delete API 연결
const deleteItem = async(targetItem) => {
  console.log("targetItem >>>", targetItem);
  
  const res = await axios.delete(
      `${process.env.REACT_APP_DB_HOST}/api/todo/${targetItem.id}`,
      {
        data: {
          id:targetItem.id
        }
      }
    )
      //   await axios.delete(`http://localhost:8080/api/todo/${targetItem.id}`);
if(res.status === 200){
  const newTodoItems = todoItems.filter((e)=> 
    e.id !== targetItem.id
  );
  setTodoItems(newTodoItems);
};
};

/* => 즉, update()함수를 App.js 에서 만들지 않았어도 됐음.(프론트 단에서만)
하지만 API 이용해 update 하려면 
1) Server API를 이용해 서버 데이터를 업데이트 한 후 
2. 변경된 내용을 화면에 다시 출력하는 두가지 작업이 필요하다. 
*/
const updateItem = async (targetItem) => {
  console.log('targetItem update > ',targetItem);
  const res = await axios.patch(
    `${process.env.REACT_APP_DB_HOST}/api/todo/${targetItem.id}`,
    targetItem
  )
  if(res.status === 200){
    console.log("update completed.");
    
  }else {
    console.error("failed to update item");
    
  }
};
  
  const memoizedComponents = useMemo(()=>{
    
  })
  return (
    <div className="App">
      <AddTodo addItem={addItem}/>
      <div className='left-todos'>💡 {todoItems.length}</div>
      
      {todoItems.length >0 ? todoItems.map((item)=>{
        // console.log(item);
        return <Todo 
        key={item.id} 
        item={item} 
        deleteItem={deleteItem}
        updateItem={updateItem}
        />  // key,item,deletedItem = props
      })  
      : (<p className='empty-todos'>Todo를 추가해주세요!</p>)}
      
        </div>
  );
}

export default App;
