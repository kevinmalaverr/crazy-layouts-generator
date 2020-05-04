$( document ).ready(function() {
    
var colorActual;
var idActual;
var matriz = [[],[],[],[],[],[],[],[],[],[]];

var r = 2;
var c = 2;

var dict = [
    [".","#bdc3c7"],
    ["item-a","#c0392b"],
    ["item-b","#d35400"],
    ["item-c","#f39c12"],
    ["item-d","#27ae60"],
    ["item-e","#16a085"],
    ["item-f","#2980b9"],
    ["item-g","#8e44ad"],
    ["item-h","#2c3e50"],
    ["item-i","#ff7979"],
    ["item-j","#ffbe76"],
    ["item-k","#f6e58d"],
    ["item-l","#badc58"],
    ["item-m","#7ed6df"],
    ["item-n","#686de0"],
    ["item-o","#e056fd"],
    ["item-p","#535c68"],
]

function addCells(){
    r = parseInt($("#rows").children("option:selected").val());
    c = parseInt($("#cols").children("option:selected").val());

    $(".container").css("grid-template","repeat("+ r +",40px) /repeat("+ c + ",40px)")
    $( ".container" ).empty();
    for(var i = 0;i<r;i++){
        for(var j = 0;j<c;j++){
            $( ".container" ).append( "<div class='item' id='"+ i.toString() + j.toString() + "'></div>");
            matriz[i][j] = ".";
        }
    }

    $(".item").click(function(){
        $( this ).css("background-color", colorActual);
        var position = $(this).attr("id");
        var x = position.substring(0,1);
        var y = position.substring(1,2);
        if(idcAtual = "none"){
            idcAtual = "."
        }
        matriz[x][y] = idActual;
    });
}

function addColors(){
    for(i in dict){

        var color = document.createElement("div");
        $(color).attr("id",dict[i][0]);
        $(color).attr("class","color");
        $(color).css("background-color",dict[i][1]);
        $(".color-ls").append(color);
        
        
    }
    $(".color").click(function(){
        var color = $(this).css("background-color");
        colorActual = color;
        idActual = $(this).attr("id");
    });
}

function generate(){
    console.log(matriz);

    var onMatriz = [];

    //generate template-areas

    var areas = "";

    for(var i = 0;i<r;i++){
        areas += '"'
        for(var j = 0;j<c;j++){
            areas += matriz[i][j];
            areas += " ";
            if(onMatriz.indexOf(matriz[i][j]) < 0){
                onMatriz.push(matriz[i][j]);
            }
        }
        areas += '"\n\t\t\t\t\t'
    }

    //generate items
    $(".result").empty();
    $(".result").copyCSS('.container');
    $(".result").css("grid-template-areas",areas);

    $("#code").empty();

    var text = "<style>\n\t.container{\n";
    text += "\t\tdisplay: grid;\n\t\tgap: 8px;\n\t\theight: 100vh;\n";
    text += "\t\tgrid-template-areas:    " + areas +";\n\t}\n";
    text += "</style>\n\n"

    text += ('<div class="container">\n');

    var myCode = document.getElementById('code');
    for(var i = 0;i<onMatriz.length;i++){
        var a = document.createElement("div");
        var x = onMatriz[i];

        if(x=="."){
            continue;
        }
        $(a).css("background-color","#2c3e50");
        $(a).css("grid-area",x);
        $(".result").append(a);        
        text += ('\t<div style="background-color: rgb(44, 62, 80); grid-area: ' + x +'"></div>\n');
    }

    text += ('</div> \n');

    $("#code").append(text);

    myCode.innerHTML = myCode.innerHTML.replace(/</g,'&lt;').replace(/>/g,'&gt;');

}

$("#generate").click(generate);

addCells(2,2);
$( "select" ).change( addCells );
addColors();

$("#see").click(view);

function view() {

    var newD = document.createElement("div");
    var cont = $( ".result" ).clone();
    $(cont).css("grid-template-columns","repeat("+ c +",1fr)");
    $(cont).css("grid-template-rows","repeat("+ r +",1fr)");
    $(cont).css("height","100vh");
    $(cont).css("width","100%");
    $(newD).append(cont);

    var opened = window.open("");
    opened.document.write("<html><head><title>Crazy layout Output</title></head><body>"+  $(newD).html() +"</body></html>");
  }

function example(){
    $(".container").remove();
    $("#edit").append('<div class="container" style="grid-template-rows: repeat(5, 40px); grid-template-columns: repeat(7, 40px); grid-template-areas: none;"><div class="item" id="00" style="background-color: rgb(192, 57, 43);"></div><div class="item" id="01" style="background-color: rgb(192, 57, 43);"></div><div class="item" id="02" style="background-color: rgb(192, 57, 43);"></div><div class="item" id="03" style="background-color: rgb(192, 57, 43);"></div><div class="item" id="04" style="background-color: rgb(39, 174, 96);"></div><div class="item" id="05" style="background-color: rgb(39, 174, 96);"></div><div class="item" id="06" style="background-color: rgb(83, 92, 104);"></div><div class="item" id="10" style="background-color: rgb(192, 57, 43);"></div><div class="item" id="11" style="background-color: rgb(192, 57, 43);"></div><div class="item" id="12" style="background-color: rgb(192, 57, 43);"></div><div class="item" id="13" style="background-color: rgb(192, 57, 43);"></div><div class="item" id="14" style="background-color: rgb(243, 156, 18);"></div><div class="item" id="15" style="background-color: rgb(243, 156, 18);"></div><div class="item" id="16" style="background-color: rgb(243, 156, 18);"></div><div class="item" id="20" style="background-color: rgb(192, 57, 43);"></div><div class="item" id="21" style="background-color: rgb(192, 57, 43);"></div><div class="item" id="22" style="background-color: rgb(192, 57, 43);"></div><div class="item" id="23" style="background-color: rgb(192, 57, 43);"></div><div class="item" id="24" style="background-color: rgb(243, 156, 18);"></div><div class="item" id="25" style="background-color: rgb(243, 156, 18);"></div><div class="item" id="26" style="background-color: rgb(243, 156, 18);"></div><div class="item" id="30" style="background-color: rgb(255, 121, 121);"></div><div class="item" id="31" style="background-color: rgb(142, 68, 173);"></div><div class="item" id="32" style="background-color: rgb(41, 128, 185);"></div><div class="item" id="33" style="background-color: rgb(41, 128, 185);"></div><div class="item" id="34" style="background-color: rgb(243, 156, 18);"></div><div class="item" id="35" style="background-color: rgb(243, 156, 18);"></div><div class="item" id="36" style="background-color: rgb(243, 156, 18);"></div><div class="item" id="40" style="background-color: rgb(186, 220, 88);"></div><div class="item" id="41" style="background-color: rgb(142, 68, 173);"></div><div class="item" id="42" style="background-color: rgb(41, 128, 185);"></div><div class="item" id="43" style="background-color: rgb(41, 128, 185);"></div><div class="item" id="44" style="background-color: rgb(44, 62, 80);"></div><div class="item" id="45" style="background-color: rgb(44, 62, 80);"></div><div class="item" id="46" style="background-color: rgb(44, 62, 80);"></div></div>');
    
    r = 5;   
    c = 7;

    matriz=[["item-a", "item-a" ,"item-a" ,"item-a" ,"item-d", "item-d", "item-p"],
            ["item-a", "item-a", "item-a", "item-a" ,"item-c" ,"item-c" ,"item-c"],
            ["item-a", "item-a" ,"item-a" ,"item-a", "item-c" ,"item-c" ,"item-c"],
            ["item-i" ,"item-o" ,"item-f", "item-f" ,"item-c", "item-c" ,"item-c"],
            ["item-l" ,"item-o", "item-f" ,"item-f", "item-h" ,"item-h", "item-h"],
            [],[],[],[],[]]


    generate();

    
}

$("#example").click(example);

$("#clean").click(function(){
    location.reload();
});

});

