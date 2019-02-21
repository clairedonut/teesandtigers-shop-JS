$(function(){

        console.log('aloha');

// Display dynamic product images

var catalogue = $('.catalogue');

catalogue.each(function(index) {

        // for (i = 1; i < 5; i++) {
        //         $(this).append('<div class="col-6"><img class="img-fluid product" src="img/collection/img' + i + '_1.jpg"/><h3>Title</h3><p class="price"></p></div>') ;
        // }

}); // END function

// // Changing Product Image, on hover
//
// $('.product').each(function(){
//
//     // Get your image src
//     var source = $('.product').attr('src');
//     console.log('Before: ' + source);
//
//     // Replace your source
//     var updatedSource = source.replace('_1.jpg','_2.jpg');
//     console.log('Now: ' + updatedSource);
//
//     var img = $('.product');
//
//     img.mouseenter(function() {
//             $( this ).attr("src", updatedSource);
//     });
//
//     img.mouseleave(function() {
//             $( this ).attr("src", source);
//     });
// });



        // img.mouseenter(function() {
        //         console.log('byebye');
        //         $( this ).attr("src","img/collection/img1_2.jpg");
        //
        //
        // });

        // img.mouseleave(function() {
        //         console.log('byebye');
        //         $( this ).attr("src","img/collection/img1_1.jpg");
        //
        //
        // });


        console.log('hello');



// Generate a random number for product price

        // $('.price').each(function() {
        //     $(this).append( (Math.random() * (15 - 5) + 5).toFixed(2) + ' €' ) ;
        // });

        // function getRandomInt(min, max) {
        //
        //         $('.price').each(function() {
        //                 $(this).append( (Math.random() * (max - min) + min).toFixed(2) + ' €' ) ;
        //         });
        //
        // }; // END function getRandomInt
        //
        // return getRandomInt(4,15);
        //


}) // END
