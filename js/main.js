console.log("読み込みました")

$("#obentou").hide();
$("#ke-taringgu").hide();

$("#obentou").hide();

function toggle() {
    
    $("#obentou").toggle();
}

function slide() {
 
    $("#ke-taringgu").slideToggle();

}

$("#tabemono").on("click", function(){
    console.log("h3タグがクリックされました")
    $(this).next().slideToggle();
})