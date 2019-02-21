$(function (){

    console.log('JSON data');

    var $productList = $('#productList');
    var $brandList = $('#brandList');


    $.ajax({
        type: 'GET',
        url: 'json/data.json',

        success: function(response) {      // <= this is the change
            var brand = response.brand;      // <= going inside the data itself
            var product = response.product;      // <= going inside the data itself

            $.each(product, function(i, product){
                $productList.append('<div class="col-6 ' + product.brand + '"><img class="product img-fluid" src="'+ product.src1 +'" alt=""><h3>' + product.name + '</h3><p class="price"></p><p class="text"></p></div>');
            });

            $.each(brand, function(i, brand){
                console.log('yooooo');
                $brandList.append('<div class="col ' + brand.name + '"><img class="img-fluid" src="img/brands/logos/logo' + brand.id + '.png" alt=""></div>');
            });

            // Changing Product Image, on hover


            $("img")
                .mouseover(function() {
                    var src = $(this).attr("src").replace("_1.jpg", "_2.jpg");
                    $(this).attr("src", src);
                })
                .mouseout(function() {
                    var src = $(this).attr("src").replace("_2.jpg", "_1.jpg");
                    $(this).attr("src", src);
                });

            // Generate a random number for product price

            function getRandomInt(min, max) {

                    $('.price').each(function() {
                            $(this).append( (Math.random() * (max - min) + min).toFixed(2) + ' €' ) ;
                    });

            }; // END function getRandomInt

            return getRandomInt(4,15);

        }
    }); // End AJAX call

}); // END
