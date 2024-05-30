import React, { useState } from "react";

export const App = () => {
 const [todoText, setTodoText] = useState(""); *1
 const [todoList, setNewTodoList] = React.useState([]);

 // インプットフォームの状態を管理
  const onChangeTodoText = (event) => {
    setTodoText(event.target.value);
  };

  // 追加ボタンを押すとタスクがToDoリストに追加される
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodo = {
      comment: todoText,
      status: "作業中"
    }
    // DOMが更新される
    todoList.push(newTodo);
    // 入力フォーム内を""にする
    setTodoText("");
  };


 return (
    <> *2
      <div className="task-area">
        <h1>ToDoリスト</h1>
        <table>
          <thead>
            <tr>
              <td >ID</td>
              <td>コメント</td>
              <td>状態</td>
            </tr>
          </thead>
          <tbody id="todo-body">  
            {todoList.map((todo, index) => (
              <tr>
                <td>{index}</td>
                <td>{todo.comment}</td>
                <td><button>{todo.status}</button></td>
                <td><button>削除</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>新規タスクの追加</h2>
      <div className="add-todo">
        <input value={todoText} onChange={onChangeTodoText} />
        <button onClick={onClickAdd}>追加</button>
      </div>
    </>
  );
}
