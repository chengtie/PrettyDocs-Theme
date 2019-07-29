$(document).ready(function () {

    /* ===== Stickyfill ===== */
    /* Ref: https://github.com/wilddeer/stickyfill */
    // Add browser support to position: sticky
    var elements = $('.sticky');
    Stickyfill.add(elements);


    /* Activate scrollspy menu */
    $('body').scrollspy({ target: '#doc-menu', offset: 100 });

    /* Smooth scrolling */
    $('a.scrollto').on('click', function (e) {
        //store hash
        var target = this.hash;
        e.preventDefault();
        $('body').scrollTo(target, 800, { offset: 0, 'axis': 'y' });

    });

    /* Bootstrap lightbox */
    /* Ref: http://ashleydw.github.io/lightbox/ */

    $(document).delegate('*[data-toggle="lightbox"]', 'click', function (e) {
        e.preventDefault();
        $(this).ekkoLightbox();
    });

    $(".doc-menu-switch-off").on("click", function (e) {
        $(".doc-menu").hide();
    })

    $(".doc-menu-switch-on").on("click", function (e) {
        $(".doc-menu").show();
    })
});