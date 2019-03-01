$(function (){

    var $productList = $('#productList');
    var $brandList = $('#brandList');
    var $brandBanner = $('#brandBanner');
    var $brandDescription = $('#brandDescription');


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
                $brandList.append('<div class="col ' + brand.name + '"><img class="img-fluid '+ brand.name + '" src="img/brands/logos/logo' + brand.id + '.png" alt=""></div>');
            });

            // Display only 1 brand Banner img on page
            $brandBanner.append( '<img class="img-fluid" src="img/brands/banners/banner' + brand[2]['id'] + '.jpg" alt="">');

            // Display only 1 brand description text
            $brandDescription.append( brand[0]['description'] );

// Change Product Image on Hover

                $("#productList img").mouseover(function() {

                    $(this).hide();

                    var src = $(this).attr("src").replace("_1.jpg", "_2.jpg");
                    $(this).attr("src", src).fadeIn("slow");

                })
                $("#productList img").mouseout(function() {

                    $(this).hide();

                    var src = $(this).attr("src").replace("_2.jpg", "_1.jpg");
                    $(this).attr("src", src).fadeIn("slow");
                });



// UPDATE PAGE CONTENT ON EACH LOGO CLICK

            var $brandLogo = $('#brandList').children('div');

            $brandLogo.click(function() {
                switch (true) {

                    case $(this).hasClass('Maui'):
                    // When click on logo with class .Maui
                        console.log('i clicked on Logo Maui');

                        // 1. Update banner page with Logo Banner
                        $('#brandBanner img').attr("src", "img/brands/banners/banner1.jpg");

                        // 2. Update descriptive text with it's Logo/Brand text
                        $brandDescription.text( brand[2]['description'] );

                        // 3. Hide product divs that don't have the class
                        $('#productList div').show();
                        $('#productList div').not('.Maui').hide();
                        $('#productList div').hasClass('Maui').show();

                    break;

                    case $(this).hasClass('Kodak'):
                        // When click on logo with class .Maui
                        console.log('i clicked on Logo Kodak');

                        // 1. Update banner page with Logo Banner
                        $('#brandBanner img').attr("src", "img/brands/banners/banner2.jpg");

                        // 2. Update descriptive text with it's Logo/Brand text
                        $brandDescription.text( brand[7]['description'] );

                        // 3. Hide product divs that don't have the class
                        $('#productList div').show();
                        $('#productList div').not('.Kodak').hide();
                        $('#productList div').hasClass('Kodak').show();


                    break;

                    default:
                        console.log('i clicked on a different Logo');

                        $('#brandBanner img').attr("src", "img/brands/banners/banner3.jpg");

                        $brandDescription.text( brand[0]['description'] );

                        // Display all products
                        $('#productList div').show();



                }
            }); // End of function


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
                    $('#productList div').each(function() {

                            var randomPop = Math.floor(Math.random() * (150 - 100) + 100)  ;

                            $(this).attr("data-popularity", randomPop); // <= populate 'data-popularity' attribute with same random integer

                            $(this).children('.pop').append('popularity score  ' + randomPop);
                    });

            }; // END function getRandomInt

            return getRandomInt(4,15);

        } // end JSON query
    }); // End AJAX call

}); // END
