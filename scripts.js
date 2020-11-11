var add=document.getElementById("submit");
var title=document.getElementById("title");
var description=document.getElementById("description");

document.addEventListener("DOMContentLoaded",(e)=>{
    e.preventDefault();
    update();
});
add.addEventListener("click",getandupdate);
update();

function getandupdate(){
    if(localStorage.getItem('itemsJson')==null){
        itemJsonArray=[];
        itemJsonArray.push([title.value,description.value]);
        localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray));
    } 
    else{
        itemJsonArrayStr=localStorage.getItem('itemsJson');
        itemJsonArray=JSON.parse(itemJsonArrayStr);
        itemJsonArray.push([title.value,description.value]);
        localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray));
    }
    update();
}
function update(){
        if (localStorage.getItem('itemsJson')==null){
            itemJsonArray = [];
            localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
        }
        else{
            itemJsonArrayStr = localStorage.getItem('itemsJson')
            itemJsonArray = JSON.parse(itemJsonArrayStr);
        }
        var tablebody=document.getElementById("tablebody");
        var str="";
        itemJsonArray.forEach((element,index) => {
             str+=`<tr>
             <th scope="row">${index+1}</th>
             <td>${element[0]}</td>
             <td>${element[1]}</td>
             <td><button class="btn btn-primary btn-sm" onclick="deleteitem(${index})">Delete</button></td>
           </tr>`
        });
        tablebody.innerHTML=str;

}
function deleteitem(item){
    itemJsonArrayStr=localStorage.getItem('itemsJson');
    itemJsonArray=JSON.parse(itemJsonArrayStr);
    itemJsonArray.splice(item,1);
    localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray));
    update();
    }
   function clearStorage(){
        if (confirm("Do you areally want to clear?")){
        console.log('Clearing the storage')
        localStorage.clear();
        update();
        }
    }
