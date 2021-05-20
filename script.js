function insert(num){
    var numero = document.getElementById('textArea').value;
    document.getElementById('textArea').value = numero + num;
}

function backspace(){
    var numero = document.getElementById('textArea').value;
    document.getElementById('textArea').value = numero.substring(0, numero.length -1);
}

var btnClear = document.getElementById('btnClear').addEventListener('click', function clear(){
    var output = document.getElementById('textArea');
    output.value = "";

},false)

function calcular(){
    var resultado = document.getElementById('textArea').value;
    if(resultado){
        document.getElementById('textArea').value = eval(resultado);
    }else{
        document.getElementById('textArea').value = "Nothing Here";
    }
}