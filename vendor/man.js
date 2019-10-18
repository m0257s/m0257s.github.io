document.addEventListener("DOMContentLoaded", function() {
	// khai bao de su dung off noi dung xo ra (nd)
	var ntt = document.getElementsByClassName('nuttuongtrung');
    // bien de su dung click vao co xay ra su kien
    var nut = document.getElementsByClassName('declick');
      
    for (var i = 0; i < nut.length; i++) {
        nut[i].onclick = function() {
        	// click vao thi tat ca cac nut con lai khong con mau trang nua
	          for (var k = 0; k < nut.length; k++) {
	            nut[k].classList.remove('mautrang');

	          }

	          // on/off css class mautrang
	          this.classList.toggle('mautrang');

	          // lay ve THUOC TINH data-hienlen
	          var ndhienra = this.getAttribute('data-hienlen'); //đặt thông tin data- giống id để truy xuất phần tử ID css.
	          // Cách này để khắc phục thao tác truy tìm ID độc nhất bằng 1 dòng lệnh

	          var phantuhienra = document.getElementById(ndhienra);// lấy giá trị biến ndhienra trong js ở dòng trên
	          // (nd)
	          for (var s = 0; s < nd.length; s++) {
	          	nd[s].classList.remove('ra');
	          }
	          //hien thi ra
	          phantuhienra.classList.toggle('ra')
        }
    }
},false)