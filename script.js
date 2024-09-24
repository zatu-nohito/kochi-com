'use strict';

const key = document.getElementById('key')
const memo = document.getElementById('memo')

if (localStorage.getItem('accessKey') === null){
  const password = prompt('パスワードを設定してください');
  if (password === null){
    alert('error');
  } else {
    localStorage.setItem('accessKey' , password);
  }
  

} else {
  document.getElementById('saveButton').addEventListener('click' ,() =>{
    localStorage.setItem(key.value , memo.value);
  });
  document.getElementById('deleteButton').addEventListener('click' ,()=>{
    let checkTheAccessKey = prompt('パスワードを教えてください') ;
    if (checkTheAccessKey === localStorage.getItem('accessKey')){
      localStorage.removeItem(key.value);
      checkTheAccessKey = '';
    } else {
      alert('error');
    }
    
  });
}



