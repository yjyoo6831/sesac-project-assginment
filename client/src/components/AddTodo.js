import React, { useState } from 'react'
import '../styles/AddTodo.scss';

export default function AddTodo({addItem}) {
    const [todoItem, setTodoItem] = useState({
        title: '',

    }); // 사용자 입력을 저장할 객체(id, title, done )
    const onButtonClick = () => {
        addItem(todoItem); //add함수 사용
        setTodoItem({
            title:'', // 상태 초기화
        })
    }
    // readOnly true : enter 누르면 자동 저장 
  const enterKeyEventHandler = (e) => {
    if(e.key === 'Enter'){
        addItem(todoItem); //add함수 사용
        setTodoItem({
            title:'', // 상태 초기화
        })
    }
  }


  return (
    <div>
        <input type="text" 
        placeholder="Add your new Todo" 
        value={todoItem.title}
        onChange={(e)=> setTodoItem({title:e.target.value})}
        onKeyDown={enterKeyEventHandler}
        >
        </input>
        <button onClick={onButtonClick} type="button">ADD</button>

    </div>
  )
}

