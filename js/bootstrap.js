$(window).scroll(function() {
  $(".slideanim").each(function(){
    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
    if (pos < winTop + 600) {
      $(this).addClass("slide");
    }
  });
});

.bg-light_blue{
  background-color: #006A71;
  opacity: 0.5;
}

.bg-light_grey{
  background-color:#d3d3d3;
}
.bg-grey{
  background-color: grey;
}
