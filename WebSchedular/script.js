const inputBox = document.getElementById('input-box');  // input box
const listContainer = document.getElementById('list-container');        // list container
function addTask() {    // add task function
    if(inputBox.value === '') {    // if input box is empty
        alert('Please enter a task');   // alert message
    }
    else{
        let li =document.createElement('li');   // create li element
        li.innerHTML = inputBox.value;  // input box value
        listContainer.appendChild(li);  // append li to list container
        let span = document.createElement('span');  // create span element
        span.innerHTML = '\u00d7';  // span value
        li.appendChild(span);   // append span to li
    }
    inputBox.value = '';    // empty input box
    saveData()  // save data
}
listContainer.addEventListener('click', function (e){   // event listener
    if(e.target.tagName === 'LI') {    // if target is li
        e.target.classList.toggle('checked');   // toggle checked class
        saveData();
    }
    else if(e.target.tagName === 'SPAN') {  // if target is span
        let li = e.target.parentElement;    // get parent element
        listContainer.removeChild(li);  // remove child
        saveData(); // save data
    }
}, false);  // false
function saveData(){    // save data function
    localStorage.setItem("data", listContainer.innerHTML);  // set item
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data"); // get item
}
showTask(); // show task
function addEditButton(li) {
    let editButton = document.createElement('button');
    editButton.innerHTML = 'Edit';
    editButton.className = 'edit-button';
    li.appendChild(editButton);

    editButton.addEventListener('click', function () {
        let newText = prompt('Edit the task:', li.textContent);
        if (newText !== null && newText.trim() !== '') {
            li.textContent = newText;
            saveData();
        }
    });
}




