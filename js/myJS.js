$(document).ready(function () {
    var toogle=true;
    console.log("12 row")
    /*var hideIMG = function (sel) {
        console.log("dentro hideIMG")
        $(sel).hide();
    }*/
    /*var showIMG = function (sel) {
        $(sel).show();
    }*/
    $('#show1').click(function () {
        console.log('dentro show1')
        $('.grid-item1').show();
    })
    $('#hide1').click(function () {
        console.log("dentro hide1-> ",$('.grid').siblings())
        $('.grid-item1').hide();
    })
    /*var hideAbarth = function () {
        $('.grid').firstChild.hide();
    }*/
   /* var $grid = */
   var $grid=$('.grid').masonry({
       // options
       itemSelector: '.grid-item',
       columnWidth: '.grid-sizer',
       percentPosition:true
       //fitWidth:true
   })

    $grid.imagesLoaded().progress(function(){
      $('.grid').masonry;
    })

    $grid.on( 'click', '.grid-item', function() {
  // change size of item via class
  console.log("clicked");
  $( this ).toggleClass('gigante');
  // trigger layout
  $grid.masonry();
});

    // $grid=imagesLoaded.progress(function () {
    //     $('.grid').masonry();
    // });

    // init Masonry
    /*var $grid = $('.grid').masonry({
        itemSelector: '.grid-item',
        percentPosition: true,
        columnWidth: '.grid-sizer'
    });

    // layout Masonry after each image loads
    $grid.imagesLoaded().progress( function() {
        $grid.masonry();
    });*/

})
