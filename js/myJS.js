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
    $('.grid').masonry({
        // options
        itemSelector: '.grid-item1',
        columnWidth: '.grid-container',
        percentPosition:true
    });
})
