let data = document.getElementById('data');
let userList = document.getElementById('userList');
// add data function   
let counter = 0;
let adddata = () => {
let inputData = data.value;
let result = `<div class="row disp-row" id="data ${counter}" >
<div class="col-md-6">
<input type="text" class="form-control inp" value="${inputData}" disabled></div>
<div class="col-md-2">
<button class="btn btn-success butn1" onclick="edit(this)" id="edit ${counter}">Edit</button></div>
<div class="col-md-2">
<button class="btn btn-success butn2" onclick="update(this)" id="update ${counter}">Update</button></div>
<div class="col-md-2">
<button class="btn btn-danger butn3" onclick="remove(this.id)" id="remove ${counter}">Remove</button></div>
</div>`
userList.insertAdjacentHTML('beforeend', result);
counter++;
data.value="";
}
let edit = (e) => {
    $(e).closest('.disp-row').find('.inp').removeAttr("disabled");
}
let update = (u) => {
    $(u).closest('.disp-row').find('.inp').attr("disabled","disabled");
}
let remove = (removeId) => {
    let parent = document.getElementById(removeId).parentNode.parentNode;
    parent.remove();
    console.log(parent);
}