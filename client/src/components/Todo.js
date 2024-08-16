import React, { useState } from 'react'

export default function Todo({item, deletedItem}) {
  // console.log('item > ',item); // {id: 1, title: 'my todo1', done: false}

  const [todoItem, setTodoItem] = useState(item);
  const [readOnly, setReadOnly] = useState(true);

  const onDeleteButtonClick = () => {
    deletedItem(todoItem);
  }
  // title 클릭시 실행될 함수 : readOnly를 false 로 변경
  const offReadOnlyMode = () => {
    setReadOnly(false);
  }
  // readOnly true : enter 누르면 자동 저장 
  const enterKeyEventHandler = (e) => {
    if(e.key === 'Enter'){
      setReadOnly(true);
    }
  }

  // 커서가 깜빡인다고 수정 가능한 것은 아님 
  // 사용자가 키보드 입력할 때 마다 item 새 값으로 변경 
  const editEventHandler = (e) => {
    // rest : id, done 정보 
    const {title, ...rest} = todoItem;
    setTodoItem({
      title: e.target.value,
      ...rest,
    })
  }

  // checkbox 업데이트 
  const checkboxEventHandler = (e) => {
    console.log("todoItem >>>>> ", todoItem);

    const {done, ...rest} = todoItem;
    console.log(">>>>> ", e.target.checked);
    
    setTodoItem({
      done : e.target.checked,
      ...rest
    })
  };
  return (
    <div className='Todo'>
        <input 
        type="checkbox" 
        name={`todo${todoItem.id}`} 
        id={`todo${todoItem.id}`} 
        value={`todo${todoItem.id}`} 
        defaultChecked = {todoItem.done}  // true : V , false : X 
        onChange={checkboxEventHandler}
        
        />  

        <input 
        type="text" 
        name="" 
        id="" 
        value={todoItem.title}
        readOnly={readOnly}
        onClick={offReadOnlyMode}
        onChange={editEventHandler}
        onKeyDown={enterKeyEventHandler}
        
        />
        {/* <label htmlFor={`todo${item.id}`}>{item.title}</label> */}
        <button onClick={onDeleteButtonClick}>DELETE</button>
    </div>
  )
}
