function KiemTraNhap() {
	var soDongId = document.getElementById("soDong");
	var soCotId = document.getElementById("soCot");
	if(isNaN(soDongId.value) || isNaN(soCotId.value)){
		alert("Vui lòng nhập số đừng nhập chữ")
		return false;
	}else{
		TaoBang(soDongId, soCotId);
		return true;
	}
}
function TaoBang(soDongId, soCotId) {
	var divId = document.getElementById("container");
	var soDong = parseInt(soDongId.value);
	var soCot = parseInt(soCotId.value);

	//tạo bảng
	var tagTable = document.createElement("table");
	tagTable.border = 1;

	//tạo dòng, tạo cột
	for (var i = 0; i < soDong; i++) {
		//tạo thẻ dòng
		var tagTR = document.createElement("tr");
		tagTable.appendChild(tagTR);
		for (var j = 0; j < soCot; j++) {
			//tạo thẻ cột
			var tagTD = document.createElement("td");
			//tạo dữ liệu cho ô
			var textNode = document.createTextNode("ô" + i + "," + j);
			tagTD.appendChild(textNode);
			tagTR.appendChild(tagTD);
		}
	}
	divId.appendChild(tagTable)
}
function Chuoi() {
	var chuoi = "thịnh thích Chơi, thịnh thích Code, thích Viết và thịnh thích Học";
	var chuoiCanTim = "thịnh";

	//Xác định vị trí chuỗi trong 1 chuỗi
	var viTriXuatHienDauTien = "vị trí xuất hiện đầu tiên: " + chuoi.indexOf(chuoiCanTim);
	var viTriXuatHienSauCung = "vị trí xuất hiện cuối cùng: " + chuoi.lastIndexOf(chuoiCanTim);
	var timViTriXuatHien = "vị trí xuất hiện: " + chuoi.search(chuoiCanTim);

	document.writeln(
		"<b>Xác định vị trí<b/>" + "<br/>" + 
		viTriXuatHienDauTien + "<br/>" + 
		viTriXuatHienSauCung + "<br/>" + 
		timViTriXuatHien + "<br/>"
	);

	//Cắt chuỗi
	//Slice
	//số âm slice lỗi
	var sliceSoAm = "Slice truyền số âm: " + chuoi.slice(-20, 55);
	var slice = "Slice 2 tham số: " + chuoi.slice(15, 30);
	var sliceMotThamSo = "Slice 1 tham số: " + chuoi.slice(35);

	//SubString
	var subString = "SubString 2 tham số: " + chuoi.substring(22, 30);
	var subStringSoAm = "SubString truyền số âm: " + chuoi.substring(-20, 10);

	//SubStr
	var subStr = "SubStr 2 tham số: " + chuoi.substr(5, 10);
	var subStrSoAm = "SubStr truyền số âm: " + chuoi.substr(-30, 20);

	document.writeln(
		"<b>Cắt chuỗi<b/>" + "<br/>" +
		"<b>Slice<b/>" + "<br/>" +
		slice + "<br/>" +
		sliceSoAm + "<br/>" +
		sliceMotThamSo + "<br/>" +
		"<b>SubString<b/>" + "<br/>" +
		subString + "<br/>" +
		subStringSoAm + "<br/>" +
		"<b>SubStr<b/>" + "<br/>" +
		subStr + "<br/>" +
		subStrSoAm + "<br/>"
	);

	//Tìm kiếm và thay thế
	var chuoiThayThe = "Chuỗi thay thế: " + chuoi.replaceAll("thích", "yêu");
	
	//Chuyển hoa thường
	var chuoiThuong = "Chuỗi thường: " + chuoi.toLowerCase();
	var chuoiHoa = "Chuỗi hoa: " + chuoi.toUpperCase();

	//Nối chuỗi
	//Dấu +
	var chuoiNoiDauCong = "Chuỗi nối bằng dấu +: " + chuoiCanTim + "<3 giang";

	//Concat
	var chuoiNoiConcat = "Chuỗi nối bằng dấu +: " + chuoiCanTim.concat("<3 giang");
	
	document.writeln(
		"<b>Tìm kiếm và thay thế<b/>" + "<br/>" +
		chuoiThayThe + "<br/>" +
		"<b>Chuyển hoa thường<b/>" + "<br/>" +
		chuoiThuong + "<br/>" +
		chuoiHoa + "<br/>" +
		"<b>Nối chuỗi<b/>" + "<br/>" +
		chuoiNoiDauCong + "<br/>" +
		chuoiNoiConcat
	);
}
function ThongBao() {
	alert("Xin chào! 5 lốp em ơi");
}
function XacNhan() {
	var xacNhan = confirm("Nộp 5 lốp chưa em ơi?")
	if(xacNhan){
		document.write("<p>Ngoan<p/>");
	}else{
		NhapLieu();
	}
}
function NhapLieu() {
	var data = prompt("Mấy roi đây em?");
	document.write("<p>Hư nha phạt " + data + " roi<p/>")
}
function ChangeImage() {
	var image = document.getElementById("myImage");
	if(image.src.match("light-on")){
		image.src = "https://img.icons8.com/carbon-copy/100/000000/light-off--v2.png";
	}else{
		image.src = "https://img.icons8.com/plasticine/100/000000/light-on.png";
	}
}
function KiemTraNhapChua(inputName) {
	var input = document.getElementById(inputName);
	var thePThongBao = document.getElementById("thongBaoUserName");
	if(input.value == ""){
		thePThongBao.style.display = "block";
		thePThongBao.style.color = "red";
		thePThongBao.innerHTML = "Vui lòng nhập " + inputName;
		return false;
	}else{
		thePThongBao.style.display = "none";
		return true;
	}
}
function KiemTraTatCaLaKiTu(inputName) {
	var input = document.getElementById(inputName);
	var letters = /^[A-za-z]+$/;
	var thePThongBao = document.getElementById("thongBaoUserName");
	if(!input.value.match(letters)){
		thePThongBao.style.display = "block";
		thePThongBao.style.color = "red";
		thePThongBao.innerHTML = "Vui lòng nhập kí tự";
		return false;
	}else{
		thePThongBao.style.display = "none";
		return true;
	}
}
function KiemTraTatCaLaSo(inputName) {
	var input = document.getElementById(inputName);
	var number = /^[0-9]+$/;
	var thePThongBao = document.getElementById("thongBaoPhone");
	if(!input.value.match(number)){
		thePThongBao.style.display = "block";
		thePThongBao.style.color = "red";
		thePThongBao.innerHTML = "Vui lòng nhập số";
		return false;
	}else{
		thePThongBao.style.display = "none";
		return true;
	}
}
function KiemTraEmail(inputName){
	var input = document.getElementById(inputName);
	//var email = /^ <code> $/; duyệt từ đầu đến cuối
	//([\w\.]) phần này là user name
		//\w kiểm tra kí tự word a-z A-Z 0-9 hoặc _
		//\. user name có thể sử dụng dấu .
		//+ dạng {1,} bắt buộc phải có 1 user name
	//@ là @
	//([a-zA-Z0-9\-]) cái này là <domain> có thể có các kí tự a-z A-Z 0-9 hoặc -
	//+ dạng {1,} bắt buộc phải có 1 user name
	//\.([a-zA-z]{2,4}) đây là phần .com
		//\. có thể sử dụng dấu .
		//[a-zA-z]{2,4} đuôi tên miền gồm các kí tự a-z A-Z trong khoảng từ 2-4 chữ
	//(\.[a-zA-z]{2,4})?$/
		//\.[a-zA-z]{2,4} tương tự phần trên
		//? có thể có hoặc không
	var email = /^([\w\.])+@([a-zA-Z0-9\-])+\.([a-zA-z]{2,4})(\.[a-zA-z]{2,4})?$/;
	var thePThongBao = document.getElementById("thongBaoEmail");
	if(!input.value.match(email)){
		thePThongBao.style.display = "block";
		thePThongBao.style.color = "red";
		thePThongBao.innerHTML = "Vui lòng nhập lại email";
		return false;
	}else{
		thePThongBao.style.display = "none";
		return true;
	}
}
function KiemTraMinMax(inputName, min, max) {
	var input = document.getElementById(inputName);
	var field = input.value;
	var thePThongBao = document.getElementById("thongBaoUserName");
	if(field.length < min || field.length > max){
		thePThongBao.style.display = "block";
		thePThongBao.style.color = "red";
		thePThongBao.innerHTML = "Vui lòng nhập giá từ " + min + " đến " + max;
		return false;
	}else{
		thePThongBao.style.display = "none";
		return true;
	}
}