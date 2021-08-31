function addRow()
{
    var table = document.getElementById("emptable");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var id = prompt("Please enter value for ID");
    var name = prompt("Please enter value for Name");
    var coun = prompt("Please enter value for Country");
    cell1.innerHTML = id;
    cell2.innerHTML = name;
    cell3.innerHTML = coun;
}