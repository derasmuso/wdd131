const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('______');

const li = document.createElement('li');
const deletebutton = document.createElement('button');

li.textContent = input.value;
deletebutton.textContent = '❌';
li.append(deletebutton);
list.append(li);