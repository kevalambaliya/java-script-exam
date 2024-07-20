let myitem = Array();

function additem(){
    let val=document.getElementById('inp-add').value;

    myitem.push(val);
    
    let table = document.getElementById("table");
    let tr = document.createElement("tr");
    let td = document.createElement("td");

    td.id = "td" + val;
    td.innerHTML = val;
    tr.append(td);
    table.append(tr);
    tr.id = val; 

}

function deleteitems(){
     
    let val = document.getElementById("remove-item").value;
    let row = document.getElementById(val);
    row.remove();
}

function updateitems(){
    let olditems = document.getElementById("old-item").value;
    let newitems = document.getElementById("new-item").value;

    let row = document.getElementById(olditems);
    row.id = newitems;

    let td = document.getElementById("td" + olditems);

    
    td.innerHTML = newitems;
    td.id = "td" + newitems;
}



