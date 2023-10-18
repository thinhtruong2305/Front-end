function KiemTraNhap(giaTri) {
	if(giaTri == 8){
		alert('Đây là số tám');
	}
	else if(giaTri == 9){
		alert('Đây là số chín')
	}
	else{
		alert('Đây không phải số tám hoặc số chín')
	}
}
function KiemTraHocLuc(diemTrungBinh) {
	var thongBao = "";
	switch(diemTrungBinh){
		case 9:
			thongBao = "Học lực xuất sắc"; break;
		case 8:
			thongBao = "Học lực giỏi"; break;
		case 7:
			thongBao = "Học lực khá"; break;
		case 6:
			thongBao = "Học lực trung bình"; break;
		default:
			thongBao = "Không xác định được học lực";
	}
	alert(thongBao);
}
function Xuat10Cau() {
	for (var i = 0; i < 10; i++) {
		document.write("Xin chào lần thứ " + i + "<br/>");
	}
}
function ChangeColor(choose) {
	var txt = document.getElementById("test");
	if(choose == 1){
		txt.style.border = "solid 5px red";
	}else if(choose == 2){
		txt.style.border = "solid 5px green";
	}
}
function ThayDoiChon() {
	var theP = document.getElementById("xuat");
	var dropdown = document.getElementById("chon");
	theP.innerHTML = dropdown.value;
}
function ChangeColorButton(choose) {
	var nut = document.getElementById("btn");
	if(choose == 1){
		nut.style.backgroundColor = "red";
	}else if(choose == 2){
		nut.style.backgroundColor = "blue";
	}else if(choose == 3){
		nut.style.backgroundColor = "green";
	}else{
		nut.style.backgroundColor = "cadetblue";
	}
}
function LayGiaTriThePByTagName(viTriTheP) {
	var tatCaP = document.getElementsByTagName("p");
	alert("Tổng số thẻ P: " + tatCaP.length + ", nội dung thẻ p thứ " + viTriTheP + " là " + tatCaP[viTriTheP].innerHTML)
}
function LayGiaTriThePByClass(viTriTheP) {
	var tatCaP = document.getElementsByClassName("demo");
	alert("Tổng số thẻ P: " + tatCaP.length + ", nội dung thẻ p thứ " + viTriTheP + " là " + tatCaP[viTriTheP].innerHTML)
}