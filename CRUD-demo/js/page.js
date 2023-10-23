//Attribute
var employees = [];
var counter = 0;

//Construction
function Employee(name, department, phone) {
    this.id = ++counter;
    this.name = name;
    this.department = department;
    this.phone = phone;
}

//alert
function showAlert() {
    $("#alert").fadeTo(2000, 500).slideUp(500, function (){
        $("#alert").slideUp(500);
    });
}

//Load
$(function(){
    $(".header").load("header.html"); 
    $(".body").load("home.html"); 
    $(".footer").load("footer.html");
});
function initEmployee() {
    if(employees != null && employees.length > 0)
        return;
    employees.push(new Employee("John Doe", "Administration", "(171) 555-2222"));
    employees.push(new Employee("Peter Parker", "Customer Service", "(313) 555-5735"));
    employees.push(new Employee("Fran Wilson", "Human Resources", "(503) 555-9931"));
}
function loadTable() {
    $('tbody').empty();
    setTimeout(function name(params){
        initEmployee()
        employees.forEach(function(item){
            $('tbody').append('<tr>'+
                '<td>'+item.name+'</td>'+
                '<td>'+item.department+'</td>'+
                '<td>'+item.phone+'</td>'+
                '<td>'+
                    '<a class="edit" title="Edit" data-toggle="tooltip" onclick="openUpdateModal('+ item.id +')"><i class="material-icons">&#xE254;</i></a>'+
                    '<a class="delete" title="Delete" data-toggle="tooltip" onclick="openConfirmDelete('+ item.id +')"><i class="material-icons">&#xE872;</i></a>'+
                '</td>'+
            '</tr>')
        });
    }, 500);
}
function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("department").value = "";
    document.getElementById("phone").value = "";
}
function resetAlert(){
    var alert = document.getElementById("alert");
    var alertText = document.getElementById("alert-text");

    alertText.innerHTML = "";
    if(alert.classList.contains("alert-danger")){
        alert.classList.remove("alert-danger");
    }
    if(alert.classList.contains("alert-success")){
        alert.classList.remove("alert-success");
    }
}
//Onclick
//Navbar
function homePage() {
    $(".body").load("home.html"); 
}
function listPage() {
    $(".body").load("list.html"); 
    loadTable();
}
//Modal
function openAddModal(){
    openModal();
    resetForm();
}
function openUpdateModal(id) {
    var index = employees.findIndex(x => x.id == id);

    document.getElementById("id").value = employees[index].id;
    document.getElementById("name").value = employees[index].name;
    document.getElementById("department").value = employees[index].department;
    document.getElementById("phone").value = employees[index].phone;

    openModal();
}
function openModal() {
    $('#myModal').modal('show');
}
function hideModal() {
    $('#myModal').modal('hide');
}
//CRUD
function add() {
    var name = document.getElementById("name").value;
    var department = document.getElementById("department").value;
    var phone = document.getElementById("phone").value;

    employees.push(new Employee(name, department, phone));

    hideModal();
    showAlert();
    loadTable();
}
function update() {
    var id = document.getElementById("id").value;
    var name = document.getElementById("name").value;
    var department = document.getElementById("department").value;
    var phone = document.getElementById("phone").value;

    var index = employees.findIndex(x => x.id == id);

    employees[index].name = document.getElementById("name").value;
    employees[index].department = document.getElementById("department").value;
    employees[index].phone = document.getElementById("phone").value;

    hideModal();
    showAlert();
    loadTable();
}
function openConfirmDelete(id) {
    var index = employees.findIndex(x => x.id == id);
    var name = employees[index].name;

    var result = confirm("Want to delete " + name + "?");
    if(result){
        employees.splice(index, 1);
        showSuccessAlert();
        loadTable();
    }
}
function save() {
    var id = document.getElementById("id").value;
    var name = document.getElementById("name").value;
    var department = document.getElementById("department").value;
    var phone = document.getElementById("phone").value;
    var alert = document.getElementById("alert");
    var alertText = document.getElementById("alert-text");

    resetAlert();
    //validate
    if(validate(name, department, phone)){
        if(id == null || id == ""){
            alert.classList.add("alert-success");
            alertText.innerHTML = "SUCCESS!";
            add();
        }
        else{
            alert.classList.add("alert-success");
            alertText.innerHTML = "SUCCESS!";
            update();
        }
    }
    else{
        hideModal();
        showAlert();
        loadTable();
    }
}
//validation
function KiemTraKyTu(input) {
    var letters = /^[a-zA-Z]+$/;
    var thongBao = document.getElementById("alert");

    if(!input.match(letters)){
        return false;
    }
    else{
        return true;
    }
} 
function KiemTraSo(input) {
    var letters = /^[0-9]+$/;
    var thongBao = document.getElementById("alert");

    if(!input.match(letters)){
        return false;
    }
    else{
        return true;
    }
}
function validate(name, department, phone){
    var alert = document.getElementById("alert");
    var alertText = document.getElementById("alert-text");
    var kiemTra = true;

    if(!KiemTraKyTu(name)){
        alert.classList.add("alert-danger");
        alertText.innerHTML = "FAILED!";
        kiemTra = false;
    }
    if(!KiemTraKyTu(department)){
        alert.classList.add("alert-danger");
        alertText.innerHTML = "FAILED!";
        kiemTra = false;
    }
    if(!KiemTraSo(phone)){
        alert.classList.add("alert-danger");
        alertText.innerHTML = "FAILED!";
        kiemTra = false;
    }
    return kiemTra;
}