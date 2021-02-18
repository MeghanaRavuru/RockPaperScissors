var control = true;
var l = ['Rock','Paper','Scissors'];
var ds = 0;
var us = 0;


$(".option").click(function(e){
    var a = $(this).attr('id');
    var i = Math.ceil(Math.random()*3)-1;
    $(".ui").attr("src",a+".png")
    $(".di").attr("src",l[i]+".png")
    if((a==='Rock' && l[i]==='Paper') || (a==='Paper' && l[i]==='Scissors') || (a==='Scissors' && l[i]==='Rock') ){
        ds++;
        $(".devicescore").text(ds);
        $("h3").text(`${l[i]}`+" won  over "+  `${a}`);
        $("h3").css("color","#5f1656");
        console.log("d:"+ds);
    }
        
    else if((a==='Rock' && l[i]==='Scissors') || (a==='Paper' && l[i]==='Rock') || (a==='Scissors' && l[i]==='Paper')){
        us++;
        $(".userscore").text(us);
        console.log("u: "+us);
        $("h3").css("color","#5f1656");
        $("h3").text(`${a}`+" won  over "+  `${l[i]}`);
    }

    else{
        console.log("tie");
        $("h3").css("color","#5f1656");
        $("h3").text("Tie");
    }

    $(".endbtn").click(function(){
        if(us>ds){
            $("h3").css("color","#5f1656");
            $("h3").text("User has won");
        }
        else if(ds>us){
            $("h3").css("color","#5f1656");
            $("h3").text("Device has won");
        }
        else{
            $("h3").css("color","#5f1656");
            $("h3").text("It's a Tie")
        }
    })
})   


