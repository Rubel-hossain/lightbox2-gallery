(function($){

 "use strick";

 var lightboxControler = $(".lightbox-index ul li a");

  $(lightboxControler).hover(function(){

    var src  = $(this).find("img").attr("src");
    var href = $(this).attr("href");

    var other =  $(".img-big-box a img").attr("src",src);
    var otherhref =  $(".img-big-box a").attr("href",href);

  },

  function(){

  });


}(jQuery));
