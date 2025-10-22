const bookslist = document.querySelector('.booklist')
const addbooks = document.querySelector('#addbook')
const contactform = document.querySelector('.contactform')

let nav = document.querySelectorAll('.navbar a')

bookslist.classList.remove('hidden');
addbooks.classList.add('hidden');
contactform.classList.add('hidden');


nav.forEach((navlinks) => {
  navlinks.addEventListener('click', (e) => {
    e.preventDefault();

    const text =e.target.textContent.toLowerCase();

   bookslist.classList.add('hidden');
   addbooks.classList.add('hidden');
   contactform.classList.add('hidden');

    if (text === 'list') 
      { bookslist.classList.remove('hidden');
        //  addbooks.style.display = 'flex'; 
      } 
    else if (text === 'add new') 
      
      { addbooks.classList.remove('hidden'); }
     else if (text === 'contact')
       {contactform.classList.remove('hidden'); }
  })
})


// main js
const booklist=document.getElementById('list')
const booktitle=document.getElementById('booktitle')
const bookauth=document.getElementById('bookauth')
const addbtn=document.getElementById('btn')

let books=JSON.parse(localStorage.getItem('books') )  || [ ]; 

function displaylist(){
  booklist.innerHTML='';
  books.forEach((book,index)=> {
  const div=document.createElement('div')
  div.classList.add('bookcollection');
  div.innerHTML=`
  <p>"${book.title}" by ${book.author}</p>
  <button onclick= "removed(${index})"> Remove </button>
  `
  booklist.appendChild(div)
  });

}

// addbooka
addbtn.addEventListener('click' , ()=>{
  const title=booktitle.value.trim();
  const author=bookauth.value.trim();

if(title && author){
  const newbook={
    title ,author
  }
  books.push(newbook);
localStorage.setItem('books' ,JSON.stringify(books))
booktitle.value='';
bookauth.value=''; 
 
displaylist();
}
else{
  alert ('fill both fields')
}
})

function removed(index){
  books.splice(index,1);
  localStorage.setItem('books' , JSON.stringify(books))
 displaylist();
}
 displaylist();