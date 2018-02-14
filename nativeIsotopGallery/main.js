$(function(){
    // active class begin
    $("li").click(function(){
        $("li").removeClass("active");
        $(this).addClass("active");
    })
    // active class end
    // image src begin
    let images = ["messi","iniesta","xavi","busquets","cautinho","neymar",
    "puyol","riquelme","suarez",];

    let item = document.querySelectorAll(".item");
    for(i = 0;i < images.length; i++)
    {
        item[i].style.backgroundImage = 'url('+'images/'+images[i]+'.jpg'+')';
    }
    // image src end
    // events begin
    let all = $(".item"); 
    let choosen;
    function blockAll(){
        for(i=0;i<all.length;i++){
            all[i].style.display = "block";
        }
    }

  $(".all").click(function(){
      blockAll();
  })

   $(".best").click(function(){
       blockAll();
      choosen = $(".item:not([data-sort='best'])");
      for(i=0;i<choosen.length;i++)
      {
          choosen[i].style.display = "none";
      }
   })

   $(".midfilder").click(function(){
       blockAll();
       $(".item:not([data-sort='midfilder'])").each(function(){
        $(this).hide();
       })
   })

   $(".forward").click(function(){
    blockAll();
    $(".item:not([data-sort='forward'])").each(function(){
     $(this).hide();
    })
})

    $(".stopper").click(function(){
       blockAll();
       $(".item:not([data-sort='stopper'])").each(function(){
       $(this).hide();
      })
  })

  $(".legend").click(function(){
    blockAll();
    $(".item").each(function(){
        if($(this).hasClass('legends')){
            $(this).show();
        }
        else{
            $(this).hide();
        }
    })
})
    // events end

})