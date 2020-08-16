$(document).ready(function () {
    $("ul.menu li.menu-item a,ul#menu li.menu-item a").on("click", function (event) {
        event.preventDefault();
        $("nav[role='navigation']").removeClass('expanded');
        $('body').removeClass('expanded');
        var id = $(this).attr("data");
        console.log("clicked--->",id);
        $.smoothScroll({ scrollTarget: 'div#' + id });
    })

    $('#totopicon').gototop();
    $("#menuToggle > input").on("click", function(){
        $("nav[role='navigation']").addClass('expanded');
        $('body').addClass('expanded');
    });
    $("nav a#close").on("click", function(){
        $("nav[role='navigation']").removeClass('expanded');
        $('body').removeClass('expanded');
    })
})