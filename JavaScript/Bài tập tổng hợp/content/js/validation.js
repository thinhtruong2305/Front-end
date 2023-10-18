function OnDangKy() {
    var divDangKy = document.getElementById("dangKy");
    var divDangNhap = document.getElementById("dangNhap");
    var tabDangKy = document.getElementById("tabDangKy");
    var tabDangNhap = document.getElementById("tabDangNhap");

    divDangKy.style.display = "block";
    tabDangKy.style.backgroundColor = "rgba(255, 255, 0, 0.877)";

    divDangNhap.style.display = "none";
    tabDangNhap.style.backgroundColor = "lightgray";
}
function OnDangNhap() {
    var divDangKy = document.getElementById("dangKy");
    var divDangNhap = document.getElementById("dangNhap");
    var tabDangKy = document.getElementById("tabDangKy");
    var tabDangNhap = document.getElementById("tabDangNhap");

    divDangNhap.style.display = "block";
    tabDangNhap.style.backgroundColor = "rgba(255, 255, 0, 0.877)";

    divDangKy.style.display = "none";
    tabDangKy.style.backgroundColor = "lightgray";
}
//Dùng để kiểm tra cho nút submit
function KiemTraNullDangKy() {
    //Các input cần kiểm tra
    var userName = document.getElementById("userNameDangKy");
    var password = document.getElementById("passwordDangKy");
    var email = document.getElementById("email");
    var ngheNghiep = document.getElementById("nghenghiep");
    var tuoi = document.getElementById("tuoi");
    var nam = document.getElementById("nam");
    var nu = document.getElementById("nu");

     //Các thẻ để thông báo
    var pUserName = document.getElementById("thongBaoUserNameDangKy");
    var pPassword = document.getElementById("thongBaoPasswordDangKy");
    var pEmail = document.getElementById("thongBaoEmail");
    var pNgheNghiep = document.getElementById("thongBaoNgheNghiep");
    var pTuoi = document.getElementById("thongBaoTuoi");
    var pGioiTinh = document.getElementById("thongBaoGioiTinh");

    var kiemTra = true;

    if(userName.value == ""){
        pUserName.style.display = "block";
        pUserName.innerHTML = "Vui lòng không để trống";
        userName.style.outline = "none";
        userName.style.borderColor = "rgb(255, 70, 70)";
        userName.style.boxShadow = "0 0 10px red";
        kiemTra = false;
    }if(password.value == ""){
        pPassword.style.display = "block";
        pPassword.innerHTML = "Vui lòng không để trống"
        password.style.outline = "none";
        password.style.borderColor = "rgb(255, 70, 70)";
        password.style.boxShadow = "0 0 10px red";
        kiemTra = false;
    }if(email.value == ""){
        pEmail.style.display = "block";
        pEmail.innerHTML = "Vui lòng không để trống";
        email.style.outline = "none";
        email.style.borderColor = "rgb(255, 70, 70)";
        email.style.boxShadow = "0 0 10px red";
        kiemTra = false;
    }if(ngheNghiep.selectedIndex == 0){
        pNgheNghiep.style.display = "block";
        pNgheNghiep.innerHTML = "Vui lòng chọn nghề nghiệp";
        kiemTra = false;
    }if(tuoi.selectedIndex == 0){
        pTuoi.style.display = "block";
        pTuoi.innerHTML = "Vui lòng chọn tuổi";
        tuoi.style.outline = "none";
        tuoi.style.borderColor = "rgb(255, 70, 70)";
        tuoi.style.boxShadow = "0 0 10px red";
        kiemTra = false;
    }if(!nam.checked && !nu.checked){
        pGioiTinh.style.display = "block";
        pGioiTinh.innerHTML = "Vui lòng chọn giới tính";
        kiemTra = false;
    }
    return kiemTra;
}
function KiemTraNullDangKy2TS(inputId, thongBaoId) {
    var input = document.getElementById(inputId);
    var thongBao = document.getElementById(thongBaoId);

    if(input.value == ""){
        thongBao.style.display = "block";
        thongBao.innerHTML = "Vui lòng không để trống";
        input.style.outline = "none";
        input.style.borderColor = "rgb(255, 70, 70)";
        input.style.boxShadow = "0 0 10px red";
        return false;
    }
    else{
        thongBao.style.display = "none";
        return true;
    }
}
function KiemTraEmail() {
    var emailLetters = /^([\w\.])+@([a-zA-Z0-9\-])+\.([a-zA-z]{2,4})(\.[a-zA-z]{2,4})?$/;
    var email = document.getElementById("email");
    var thongBao = document.getElementById("thongBaoEmail")

    if(!email.value.match(emailLetters)){
        thongBao.style.display = "block";
        thongBao.innerHTML = "Vui lòng kiểm tra lại email";
        email.style.outline = "none";
        email.style.borderColor = "rgb(255, 70, 70)";
        email.style.boxShadow = "0 0 10px red";
        return false;
    }else{
        thongBao.style.display = "none";
        return true;
    }
}
function KiemTraKyTu(inputId, thongBaoId) {
    var letters = /^[a-zA-Z0-9]+$/;
    var input = document.getElementById(inputId);
    var thongBao = document.getElementById(thongBaoId);

    if(!input.value.match(letters)){
        thongBao.style.display = "block";
        thongBao.innerHTML = "Vui lòng nhập ký tự";
        input.style.outline = "none";
        input.style.borderColor = "rgb(255, 70, 70)";
        input.style.boxShadow = "0 0 10px red";
        return false;
    }
    else{
        thongBao.style.display = "none";
        return true;
    }
}
function KiemTraDoDai(inputId, thongBaoId, min, max) {
    var input = document.getElementById(inputId);
	var thongBao = document.getElementById(thongBaoId);
	if((input.value.length < min || input.value.length > max) && !input.value == ""){
		thongBao.style.display = "block";
        thongBao.innerHTML = "Vui lòng nhập từ " + min + " đến " + max + " ký tự";
        input.style.outline = "none";
        input.style.borderColor = "rgb(255, 70, 70)";
        input.style.boxShadow = "0 0 10px red";
        return false;
	}else{
		thongBao.style.display = "none";
		return true;
	}
}
function LamMoiTrangThaiInput(inputId, thongBaoId) {
    var input = document.getElementById(inputId);
    var thongBaoInput = document.getElementById(thongBaoId);

    input.style.border = "2px solid #DADADA";
    input.style.boxShadow = "none";
    thongBaoInput.style.display = "none";
}
function LamMoiTrangThaiInput1TS(thongBaoId) {
    var thongBaoInput = document.getElementById(thongBaoId);

    thongBaoInput.style.display = "none";
}
function KiemTra2TS(inputId, thongBaoId) {
    var kiemTra = false;
    if(KiemTraNullDangKy2TS(inputId, thongBaoId)){
        if(KiemTraEmail()){
            kiemTra = true;
        }
    }
    return kiemTra;
}
function KiemTra4TS(inputId, thongBaoId, min, max){
    var kiemTra = false;
    if(KiemTraNullDangKy2TS(inputId, thongBaoId)){
        if(KiemTraKyTu(inputId, thongBaoId)){
            if(KiemTraDoDai(inputId, thongBaoId, min, max)){
                kiemTra = true;
            }
        }
    }
    return kiemTra;
}