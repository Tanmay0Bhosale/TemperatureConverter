function getANDupdate() {
    tit = document.getElementById('title').value;
    desc = document.getElementById('description').value;
    if (localStorage.getItem('itemJson') == null) {
        itemJsonArray = [];
        itemJsonArray.push([tit, desc]);
        localStorage.setItem('itemJson', JSON.stringify(itemJsonArray));
    } else {
        itemJsonArraystr = localStorage.getItem('itemJson');
        itemJsonArray = JSON.parse(itemJsonArraystr);
        itemJsonArray.push([tit, desc]);
        localStorage.setItem('itemJson', JSON.stringify(itemJsonArray));
    }
    update();
}
function update() {
    if (localStorage.getItem('itemJson') == null) {
        itemJsonArray = [];
        localStorage.setItem('itemJson', JSON.stringify(itemJsonArray));
    } else {
        itemJsonArraystr = localStorage.getItem('itemJson');
        itemJsonArray = JSON.parse(itemJsonArraystr);
    }
    let tableBody = document.getElementById('tableBody');
    let str = "";
    itemJsonArray.forEach((element, index) => {
        str += `
    <tr>
          <th scope="row"><input type="checkbox"></th>
          <td>${element[0]}</td>
          <td>${element[1]}</td>
          <td><button class="btn btn-sm btn-primary" onclick="deleted(${index})">Delete</button></td>
    </tr>`;
    });
    tableBody.innerHTML = str;
}
add = document.getElementById("addto");
add.addEventListener("click", getANDupdate);
update();
function deleted(itemIndex) {
    itemJsonArraystr = localStorage.getItem('itemJson');
    itemJsonArray = JSON.parse(itemJsonArraystr);
    itemJsonArray.splice(itemIndex, 1);
    localStorage.setItem('itemJson', JSON.stringify(itemJsonArray));
    update();
};
function clearme() {
    if(confirm("Do you really want to clear!")){
    console.log('clearing!!');
    localStorage.clear();
    update();
    }  
};