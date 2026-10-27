// HTMLの要素を取得し、TypeScriptの「型（HTMLInputElementなど）」を指定する
const todoInput = document.getElementById('todo-input') as HTMLInputElement;
const addBtn = document.getElementById('add-btn') as HTMLButtonElement;
const todoList = document.getElementById('todo-list') as HTMLUListElement;

// 「追加」ボタンがクリックされた時の処理
addBtn.addEventListener('click', () => {
  const taskText: string = todoInput.value.trim();

  // 入力が空の場合は何もしない
  if (taskText === '') {
    alert('タスクを入力してください！');
    return;
  }

  // 新しい <li> (リスト項目) を作成
  const li: HTMLLIElement = document.createElement('li');
  li.textContent = taskText;

  // 「削除」ボタンを作成
  const deleteBtn: HTMLButtonElement = document.createElement('button');
  deleteBtn.textContent = '削除';
  deleteBtn.className = 'delete-btn';

  // 削除ボタンが押されたら、そのタスクを消す処理
  deleteBtn.addEventListener('click', () => {
    todoList.removeChild(li);
  });

  // <li> の中に削除ボタンを追加し、それを画面のリスト (<ul>) に追加
  li.appendChild(deleteBtn);
  todoList.appendChild(li);

  // 入力欄を空にする
  todoInput.value = '';
});