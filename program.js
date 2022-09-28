function addtodo(){
    if(!checkEmptyInput()){
    let table = document.getElementById("table"),
    newRow = table.insertRow(table.length),
    cell1 = newRow.insertCell(0),
    cell2=newRow.insertCell(1),
    todo = document.getElementById("todo").value;
    cell1.innerHTML=todo;
    cell2.innerHTML="done"
}
}
function checkEmptyInput()
{
    let isEmpty = false,
    todo = document.getElementById("todo").value;

    if(todo === ""){
        alert("You have nothing to do?");
        isEmpty = true;
}
return isEmpty;
}

let Index,
    table = document.getElementById('table');


function removing() {
    for(let i = 1; i < table.rows.length; i++)
{
table.rows[i].cells[1].onclick = function()
{
    let c = confirm("u sure?");
    if(c === true)
    {
        Index = this.parentElement.rowIndex;
        table.deleteRow(Index);
    }
}
}
}