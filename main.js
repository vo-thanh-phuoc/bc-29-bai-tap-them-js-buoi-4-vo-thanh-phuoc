
/**
 *Bài tập1: hiện thị ngày, tháng, năm của ngày hôm trước và ngày hôm sau khi nhập ngày hôm nay
 *Đầu vào
 +Nhập ngày, tháng, năm ngày hôm nay
 *xử lý
 +Ngày tiếp theo
 -tháng 2 có 28 ngày (không xét năm nhuận). ngày tiếp theo ngay=1, tháng=(++tháng).
 -tháng 1,3,5,7,8,10,12 có 31 ngày. ngày tiếp theo ngày=1, tháng =(++tháng).
 -tháng 12 ngày 31, ngày tiếp theo ngày=1, tháng=1, năm=(++năm),
 -tháng 4,6,9,11 có 30 ngày
 +Ngày trước đó
 - ngày 1 tháng 3, ngày trước đó ngày=28, tháng =(--tháng).
 -ngày 1 tháng 1, ngày trước đó ngày =31,tháng=12, năm=(--năm).
 -ngày 1 tháng 2,4,9,11 ngày trước đó ngày=31, tháng=(--tháng).
 -ngày 1 tháng 5,7,10,12 ngày trước đó ngày =30, tháng=(--tháng).
 *Đầu ra
 xuất kết quả ngày hôm trước và ngày hôm sau.
 
 */
document.getElementById("tuongLai").onclick = function () {
    var ngay = document.getElementById("nhapNgay").value * 1;
    var thang = document.getElementById("nhapThang").value * 1;
    var nam = document.getElementById("nhapNam").value * 1;


    if (ngay === 28 && thang === 2) {

        ngay = 1;
        thang = (++thang);
        var result = "ngày " + ngay + " tháng " + thang + " năm " + nam;
    } else if (ngay === 29 && thang === 2) {
        var result = "Chỉ có khi đó là năm nhuận"
    }
    else if (ngay > 29 && thang === 2) {
        var result = "không có ngày đó";
    }
    else if (ngay === 31 && thang === 1 || ngay === 31 && thang === 3 || ngay === 31 && thang === 5 || ngay === 31 && thang === 7 || ngay === 31 && thang === 8 || ngay === 31 && thang === 10) {
        ngay = 1;
        thang = (++thang);
        var result = "ngày " + ngay + " tháng " + thang + " năm " + nam;
    } else if (ngay > 31 && thang === 1 || ngay > 31 && thang === 3 || ngay > 31 && thang === 5 || ngay > 31 && thang === 7 || ngay > 31 && thang === 8 || ngay > 31 && thang === 10 || ngay > 31 && thang === 12) {
        var result = "không có ngày đó";
    }
    else if (ngay === 30 && thang === 4 || ngay === 30 && thang === 6 || ngay === 30 && thang === 9 || ngay === 30 && thang === 11) {
        ngay = 1;
        thang = (++thang);
        var result = "ngày " + ngay + " tháng " + thang + " năm " + nam;

    } else if (ngay > 30 && thang === 4 || ngay > 30 && thang === 6 || ngay > 30 && thang === 9 || ngay > 30 && thang === 11) {
        var result = "không có ngày đó";

    } else if (ngay === 31 && thang === 12) {
        ngay = 1;
        thang = 1;
        nam = (++nam);
        var result = "ngày " + ngay + " tháng " + thang + " năm " + nam;
    }
    else {
        ngay = (++ngay);
        var result = "ngày " + ngay + " tháng " + thang + " năm " + nam;
    }

    document.getElementById("ketQua1").innerHTML = result;
};

document.getElementById("quaKhu").onclick = function () {
    var ngay = document.getElementById("nhapNgay").value * 1;
    var thang = document.getElementById("nhapThang").value * 1;
    var nam = document.getElementById("nhapNam").value * 1;
    if (ngay == 1 && thang === 3) {
        ngay = 28;
        thang = (--thang);
        var result = "Ngày " + ngay + " tháng " + thang + " năm " + nam;
    } else if (ngay === 1 && thang === 2 || ngay === 1 && thang === 4 || ngay === 1 && thang === 6 || ngay === 1 && thang === 9 || ngay === 1 && thang === 11) {
        ngay = 31;
        thang = (--thang);
        var result = "Ngày " + ngay + " tháng " + thang + " năm " + nam;
    } else if (ngay === 1 && thang === 5 || ngay === 1 && thang === 7 || ngay === 1 && thang === 10 || ngay === 1 && thang === 12) {
        ngay = 30;
        thang = (--thang);
        var result = "Ngày " + ngay + " tháng " + thang + " năm " + nam;
    } else if (ngay === 1 && thang === 1) {
        ngay = 31;
        thang = 12;
        nam = (--nam);
        var result = "Ngày " + ngay + " tháng " + thang + " năm " + nam;
    } else {
        ngay = (--ngay);
        var result = "Ngày " + ngay + " tháng " + thang + " năm " + nam;
    }

    document.getElementById("ketQua1").innerHTML = result;
};
/*
*Bài tập 2:kiểm tra 1 tháng trong năm có bao nhiêu ngày bao gồm cả năm nhuận
*Đầu vào
+Nhập vào tháng và năm
*Xử lý
+tháng 1,3,5,7,8,10,12 có 31 ngày.
+tháng 4,6,9,11 có 30 ngày.
+năm%4=0 và năm%100!==0 hoặc năm%400=0 thì đó là năm nhuận tháng 2 có 29 ngày ngược lại tháng 2 có 28 ngày
*Đầu ra
xuất ra màn hình tháng vừa nhập có bao nhiêu ngày
 */
document.getElementById("kiemTraThangNam").onclick = function () {
    var months = document.getElementById("month").value * 1;
    var years = document.getElementById("year").value * 1;
    if (months === 1 || months === 3 || months === 5 || months === 7 || months === 8 || months === 10 || months === 12) {
        var result = "tháng " + months + " năm " + years + " có 31 ngày";

    } else if (months === 2 && (years % 4) === 0 && months === 2 && (years % 100) !== 0 || months === 2 && (years % 400) === 0) {
        var result = "tháng " + months + " năm " + years + " có 29 ngày" + "<br/> Năm nhuận";
    } else if (months === 2 && (years % 4) !== 0 && months === 2 && (years % 100) === 0 || months === 2 && (years % 400) !== 0) {
        var result = "tháng " + months + " năm " + years + " có 28 ngày";
    } else {
        var result = "tháng " + months + " năm " + years + " có 30 ngày";
    }

    document.getElementById("ketQua2").innerHTML = result;
};

/*
*Bài 3:Nhập số nguyên có 3 số sau đó in cách đọc số đó
*Đầu vào
+nhập 1 số nguyên có 3 chữ số
*Xử lý
+lấy số hàng trăm và làm tròn trăm=Math.floor(số nhập vào/100)
+lấy số hàng chục và làm tròn chục==Math.floor(số nhập vào%100/10);
+lấy số hàng đơn vị đơn vị= số nhập vào%10;
+chuyển đổi số hàng trăm,chục,đơn vị từ số về chữ. if...else if...
*Đầu ra
Xuất ra màn hình cách đọc số đã nhập.
 */
document.getElementById("docSo").onclick = function () {
    var nhapSoCoBaSo = document.getElementById("soCoBaChuSo").value * 1;
    var tram = Math.floor(nhapSoCoBaSo / 100);
    var chuc = Math.floor(nhapSoCoBaSo % 100 / 10);
    var donVi = nhapSoCoBaSo % 10;
    if (tram === 1) {
        tram = "một trăm ";
    } else if (tram === 2) {
        tram = "hai trăm ";
    } else if (tram === 3) {
        tram = "Ba trăm ";
    } else if (tram === 4) {
        tram = "Bốn trăm ";
    } else if (tram === 5) {
        tram = "Năm trăm ";
    } else if (tram === 6) {
        tram = "Sáu trăm ";
    } else if (tram === 7) {
        tram = "Bảy trăm ";
    } else if (tram === 8) {
        tram = "Tám trăm ";
    } else {
        tram = "Chín trăm ";
    }
    if (chuc === 0) {
        chuc = " lẻ ";
    } else if (chuc === 1) {
        chuc = " mười ";
    } else if (chuc === 2) {
        chuc = " hai mươi ";
    } else if (chuc === 3) {
        chuc = " Ba mươi ";
    } else if (chuc === 4) {
        chuc = " Bốn mươi ";
    } else if (chuc === 5) {
        chuc = " Năm mươi ";
    } else if (chuc === 6) {
        chuc = " Sáu mươi ";
    } else if (chuc === 7) {
        chuc = " Bảy mươi ";
    } else if (chuc === 8) {
        chuc = " Tám mươi ";
    } else {
        chuc = " Chín mươi ";
    }
    if (donVi === 0) {
        donVi = "";
    } else if (donVi === 1) {
        donVi = " mốt ";
    } else if (donVi === 2) {
        donVi = " hai ";
    } else if (donVi === 3) {
        donVi = " ba ";
    } else if (donVi === 4) {
        donVi = " bốn ";
    } else if (donVi === 5) {
        donVi = " lăm ";
    } else if (donVi === 6) {
        donVi = " sáu ";
    } else if (donVi === 7) {
        donVi = " bảy ";
    } else if (donVi === 8) {
        donVi = " tám ";
    } else {
        donVi = " chín ";
    }
    var result = tram + chuc + donVi;
    document.getElementById("cachDoc").innerHTML = result;
};

/*
 *Bài 4:Nhập tọa độ nhà 3 sinh viên, so sánh với tọa độ nhà trường ai là người ở xa trường nhất 
 *Đầu vào
 +Nhập tên, tọa độ nhà và tọa độ trường
 *Xử lý
 +tính khoảng cách từ nhà đến trường của ba sinh viên
 khoảng cách = Math.sqrt((tọa đô X trường học- tọa đô X nhà sinh viên )*(tọa đô X trường học- tọa đô X nhà sinh viên )+(tọa đô Y trường học- tọa đô Y nhà sinh viên )*(tọa đô Y trường học- tọa đô Y nhà sinh viên ))
 + so sánh khoảng cách từ nhà dến trường của 3 sinh viên xem ai xa trường nhất if..else if...
 *Đầu ra
 xuất ra màn hình tên học sinh xa trường học nhất
 */
document.getElementById("xacDinhToaDo").onclick = function () {
    var name1 = document.getElementById("tenSinhVien1").value;
    var name2 = document.getElementById("tenSinhVien2").value;
    var name3 = document.getElementById("tenSinhVien3").value;
    var homeX1 = document.getElementById("toaDoX1").value * 1;
    var homeY1 = document.getElementById("toaDoY1").value * 1;
    var homeX2 = document.getElementById("toaDoX2").value * 1;
    var homeY2 = document.getElementById("toaDoY2").value * 1;
    var homeX3 = document.getElementById("toaDoX3").value * 1;
    var homeY3 = document.getElementById("toaDoY3").value * 1;
    var schoolX = document.getElementById("truongX").value * 1;
    var schoolY = document.getElementById("truongY").value * 1;
    var khoangCach1 = Math.sqrt((schoolX - homeX1) * (schoolX - homeX1) + (schoolY - homeY1) * (schoolY - homeY1));
    var khoangCach2 = Math.sqrt((schoolX - homeX2) * (schoolX - homeX2) + (schoolY - homeY2) * (schoolY - homeY2));
    var khoangCach3 = Math.sqrt((schoolX - homeX3) * (schoolX - homeX3) + (schoolY - homeY3) * (schoolY - homeY3));
    if (khoangCach2 < khoangCach1 && khoangCach1 > khoangCach3||khoangCach1>khoangCach2&&khoangCach2==khoangCach3) {
        var result = name1 + " là người xa trường nhất";
    } else if (khoangCach1 < khoangCach2 && khoangCach2 > khoangCach2||khoangCach1<khoangCach2&&khoangCach1===khoangCach3) {
        var result = name2 + " là người xa trường nhất";
    } else if (khoangCach1 < khoangCach3 && khoangCach3 > khoangCach2||khoangCach3>khoangCach1&&khoangCach1==khoangCach2) {
        var result = name3 + " là người xa trường nhất";
    } else {
        var result = " khoảng cách đến trường của 3 người là bằng nhau";
    }
    console.log(khoangCach1,khoangCach2,khoangCach3);
    document.getElementById("ketQua3").innerHTML = result;
};