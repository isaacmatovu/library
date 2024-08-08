const myLibrary=[];


var form=document.getElementById('form-details');
var addBook =document.getElementById('form');
var booklist=document.getElementById('books');
var addbtn=document.getElementById('add');

addbtn.addEventListener('click',showForm)

function showForm() {

   form.style.display='grid';

  }

form.addEventListener('submit',addForm)


function addForm(e){
    e.preventDefault();
  
  
    var name=document.querySelector('#name')
    var author=document.querySelector('#author')
    var pages=document.querySelector('#pages')
    var read=document.querySelector('#read')

    


    
    //create elements
    var div=document.createElement('div');
    var h1=document.createElement('h1');
    var h2=document.createElement('h2');
    var p1=document.createElement('p1');
    var p2=document.createElement('p2');
    var button=document.createElement('button')

    
    //class properties
    div.classList.add('bookitems');
    h1.classList.add('h1');
    h2.classList.add('h2');
    p1.classList.add('p1');
    p2.classList.add('p2');
    button.classList.add('del');
  
        


//appending elememts
div.appendChild(h1)
div.appendChild(h2)
div.appendChild(p1)
div.appendChild(p2)
div.appendChild(button)
booklist.appendChild(div)


//textnodes
    h1.textContent=`name: ${name.value}`
    h2.textContent=`Author: ${author.value}`;
    p1.textContent=`pages: ${pages.value}`;
    p2.textContent=`Status: ${read.checked ? "Read" : "Not read"}`;
    button.textContent='DELETE';

    button.addEventListener('click',removeItem)

   function removeItem(e){
    var li= e.target.parentElement;
    booklist.removeChild(div);
   }

// Clear the form
name.value = '';
author.value = '';
pages.value = '';
read.checked = false;
form.style.display = 'none';

}




