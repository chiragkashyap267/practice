let btn = document.querySelector('button');

let inp = document.querySelector('input');

let ul = document.querySelector('ul');

btn.addEventListener('click',function(){

    let item = document.createElement('li');
    item.innerText = inp.value;

    let delbtn = document.createElement('button');
    delbtn.innerText = "delete";
    item.appendChild(delbtn);
    delbtn.classList.add('button');

    ul.appendChild(item);
    inp.value = "";


})


ul.addEventListener('click', function(event){
    if(event.target.nodeName == 'BUTTON'){
        let taskItem = event.target.parentElement;
        taskItem.remove();
    }

})