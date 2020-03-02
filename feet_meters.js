 function chuyenDoi() {
    let a = Number(document.getElementById("nhiet do").value);
    let b = document.getElementById("nhiet do ban dau").value;
    let c = document.getElementById("nhiet do sau khi doi").value;
     let y = 0;
     if(b == "1" && c =="2"){
         y = 0.035*a;
     }else if(b == "2" && c =="1"){
         y = 3.279 * a;
     }
     document.getElementById("ket qua").innerHTML = y;
 }