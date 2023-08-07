var totalTasks = 0;
var checkedTasks = 0;

function saveText() {
    var inputValue = document.getElementById('myInput').value;// to take input as variable

    if (inputValue.trim() !== '') { //to handle task should not be empty
    var displayElement = document.getElementById('displayValue');
    var newEntry = document.createElement('div');
    newEntry.classList.add('entry');
    newEntry.innerHTML = '<input type="checkbox" onchange="moveEntry(this)">' + inputValue + " <button onclick=\"deleteEntry(this)\">Delete</button>";

    displayElement.appendChild(newEntry);// to append new entry
    document.getElementById('myInput').value = '';
    totalTasks++;
    updateTotalCount();// function to update count
    } 
    else {
    alert('Please enter a valid task.'); // alert to handle empty input-box
}
}

function moveEntry(checkbox) { // function to move entry towards right side
    var entryDiv = checkbox.parentNode;
    var displayElement = document.getElementById('displayValue');
    entryDiv.classList.toggle('moved');
}

function deleteEntry(button) { // to handle deleted entries
    var entryDiv = button.parentNode;
    var displayElement = document.getElementById('displayValue');
    displayElement.removeChild(entryDiv);
    totalTasks--;
    updateTotalCount();

}

function updateTotalCount() { // to update count value
    var totalCountElement = document.getElementById('totalCount');
    var uncheckedTasks = totalTasks;
    totalCountElement.textContent = "Total tasks: " + uncheckedTasks;
}
