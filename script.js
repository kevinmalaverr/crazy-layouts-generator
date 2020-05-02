$( document ).ready(function() {
    
var colorActual;
var idActual;
var matriz = [[],[],[],[],[],[],[],[],[],[]];

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
    var r = parseInt($("#rows").children("option:selected").val());
    var c = parseInt($("#cols").children("option:selected").val());

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

    var onMatriz = [];

    //generate template-areas

    var areas = "";

    var r = parseInt($("#rows").children("option:selected").val());
    var c = parseInt($("#cols").children("option:selected").val());

    for(var i = 0;i<r;i++){
        areas += '"'
        for(var j = 0;j<c;j++){
            areas += matriz[i][j];
            areas += " ";
            if(onMatriz.indexOf(matriz[i][j]) < 0){
                onMatriz.push(matriz[i][j]);
            }
        }
        areas += '"'
    }

    //generate items
    $(".result").empty();
    $(".result").copyCSS('.container');
    $(".result").css("grid-template-areas",areas);

    for(var i = 0;i<onMatriz.length;i++){
        var a = document.createElement("div");
        var x = onMatriz[i];

        if(x=="."){
            continue;
        }
        $(a).css("background-color","#2c3e50");
        $(a).css("grid-area",x);
        $(".result").append(a);
    }

   
}



$("#generate").click(generate);

addCells(2,2);
$( "select" ).change( addCells );
addColors();


$("#clean").click(function(){
    location.reload();

});

});

