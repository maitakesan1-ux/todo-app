"use strict";
// 画面の要素を取得
const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');
// 保存されているタスク一覧を取得する関数
const getStoredTasks = () => {
    const tasksJson = localStorage.getItem('tasks');
    return tasksJson ? JSON.parse(tasksJson) : [];
};
// タスク一覧をローカルストレージに保存する関数
const saveTasks = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
};
// 画面にタスクを描画する関数
const renderTask = (taskText) => {
    const li = document.createElement('li');
    li.textContent = taskText;
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '削除';
    deleteBtn.className = 'delete-btn';
    // 削除ボタンの処理
    deleteBtn.addEventListener('click', () => {
        todoList.removeChild(li);
        // ストレージからも削除して保存
        const tasks = getStoredTasks().filter((t) => t !== taskText);
        saveTasks(tasks);
    });
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
};
// 初回読み込み時：保存されているタスクを画面に表示
const initialTasks = getStoredTasks();
initialTasks.forEach((task) => renderTask(task));
// 「追加」ボタンがクリックされた時の処理
addBtn.addEventListener('click', () => {
    const taskText = todoInput.value.trim();
    if (taskText === '') {
        alert('タスクを入力してください！');
        return;
    }
    // 画面に追加
    renderTask(taskText);
    // ストレージに保存
    const tasks = getStoredTasks();
    tasks.push(taskText);
    saveTasks(tasks);
    todoInput.value = '';
});
