function quanti1() {
    var c = document.getElementById("pan").value;
    var total = c * 50;
    document.getElementById("total1").innerHTML = "R$ " + total + ",00";
}
function quanti2() {
    var f = document.getElementById("coel").value;
    var total = f * 100;
    document.getElementById("total2").innerHTML = "R$ " + total + ",00";
}
function quanti3() {
    var h = document.getElementById("fre").value;
    var total = h * 80;
    document.getElementById("total3").innerHTML = "R$ " + total + ",00";
}
function quanti4() {
    var s = document.getElementById("incr").value;
    var total = s * 75;
    document.getElementById("total4").innerHTML = "R$ " + total + ",00";
}
function quanti5() {
    var na = document.getElementById("med").value;
    var total = na * 150;
    document.getElementById("total5").innerHTML = "R$ " + total + ",00";
}
function quanti6() {
    var hb = document.getElementById("ter").value;
    var total = hb *150;
    document.getElementById("total6").innerHTML = "R$ " + total + ",00";
}
function quanti7() {
    var sc = document.getElementById("papel").value;
    var total = sc * 120;
    document.getElementById("total7").innerHTML = "R$ " + total + ",00";
}
function quanti8() {
    var nd = document.getElementById("pol").value;
    var total = nd * 100;
    document.getElementById("total8").innerHTML = "R$ " + total + ",00";
}
function quanti9() {
    var ne = document.getElementById("palha").value;
    var total = ne * 110;
    document.getElementById("total9").innerHTML = "R$ " + total + ",00";
}


function calculartotal() {
    var a = document.getElementById("pan").value||0;
    var b = document.getElementById("coel").value||0;
    var c = document.getElementById("fre").value||0;
    var d = document.getElementById("incr").value||0;
    var e = document.getElementById("med").value||0;
    var f = document.getElementById("ter").value||0;
    var g = document.getElementById("papel").value||0;
    var h = document.getElementById("pol").value||0;
    var i = document.getElementById("palha").value||0;

    total = (parseFloat(a) * 50) + (parseFloat(b) *100) + (parseFloat(c) * 80) + (parseFloat(d) * 75) + (parseFloat(e) * 150) + (parseFloat(f) * 150) + (parseFloat(g) * 120) + (parseFloat(h) * 100) + (parseFloat(i) * 110);
    document.getElementById("totalfinal").innerHTML = "R$ " + total + ",00";
}
(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Pega todos os formulários que nós queremos aplicar estilos de validação Bootstrap personalizados.
        var forms = document.getElementsByClassName('needs-validation');
        // Faz um loop neles e evita o envio
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();
       