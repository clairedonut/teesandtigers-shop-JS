$(function (){

    var $productList = $('#productList');
    var $brandList = $('#brandList');


    $.ajax({
        type: 'GET',
        url: 'json/data.json',

        success: function(response) {      // <= this is the change
            var brand = response.brand;      // <= going inside the data itself
            var product = response.product;      // <= going inside the data itself

            $.each(product, function(i, product){
                $productList.append('<div data-pricing="" data-popularity="" class="col-6 ' + product.brand + '"><img class="product img-fluid" src="'+ product.src1 +'" alt=""><h3>' + product.name + '</h3><p class="price" data-pricing="" ></p><p class=" pop"></p><p class="text"></p></div>');
            });

            $.each(brand, function(i, brand){
                $brandList.append('<div class="col ' + brand.name + '"><img class="img-fluid" src="img/brands/logos/logo' + brand.id + '.png" alt=""></div>');
            });

            // Change Product Image on Hover

            $("img")
                .mouseover(function() {
                    var src = $(this).attr("src").replace("_1.jpg", "_2.jpg");
                    $(this).attr("src", src);
                })
                .mouseout(function() {
                    var src = $(this).attr("src").replace("_2.jpg", "_1.jpg");
                    $(this).attr("src", src);
                });


            // Generate a random price and popularity index for product divs

            function getRandomInt(min, max) {


                // Generate a random price per product div
                    $('.price').each(function() {

                        var randomInt = ( Math.random() * (max - min) + min ).toFixed( 2 )  ;

                        $(this).append( randomInt + ' €' ) ; // <= display  a random number for product price

                        $(this).attr("data-pricing", randomInt); // <= populate 'data-pricing' attribute with same random integer

                        $(this).parent('div').attr("data-pricing", randomInt); // <= populate 'data-pricing' attribute with same random integer

                        // return randomInt;

                    });

                // Generate a random popularity score per product div
                    $('div').each(function() {

                            var randomPop = Math.floor(Math.random() * (150 - 100) + 100)  ;

                            $(this).attr("data-popularity", randomPop); // <= populate 'data-popularity' attribute with same random integer

                            $(this).children('.pop').append('popularity score  ' + randomPop);
                    });

            }; // END function getRandomInt

            return getRandomInt(4,15);

        } // end JSON query
    }); // End AJAX call

}); // END
