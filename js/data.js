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
      var product = response.product;  // <= going inside the data itself

      // Loop into and display all product items
      $.each(product, function(i, product){
        $productList.append('<div data-pricing="" class="mamachu product col-6 col-md-4 ' + product.brand + '"><img class="product img-fluid" src="'+ product.src1 +'" alt=""><aside class="info"><select id="sizeSelect"><option disabled value="0">Select a size</option><option value="1">Small</option><option value="2">Medium</option><option value="3">Large</option></select><button>Ajouter</button><p id="infoUpdate"></p></aside><h3>' + product.name + '</h3><p class="price float" data-pricing=""></p><div class="d-flex justify-content-center float"><i style="color: #FF69B4; padding-right: 0.5em" class="fas fa-heart"></i><p class="pop"></p></div></div>');
      });

      // Loop into and display all brand-logo items
      $.each(brand, function(i, brand){
        $brandList.append('<div class="col-3 col-md-2 col-lg-2 ' + brand.name + '"><img class="img-fluid '+ brand.name + '" src="img/brands/logos/logo' + brand.id + '.png" alt=""></div>');
      });

      // Display generic brand banner on page
      $brandBanner.append( '<img class="img-fluid" src="img/brands/banners/banner' + brand[0]['id'] + '.jpg" alt="">');

      // Display generic brand description text on page
      $brandDescription.append( brand[0]['description'] );


// ------------------------------------------------------------------------------------

      // Event : Change product image on hover

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

// ------------------------------------------------------------------------------------

      // If Statement: display and increment # of items in shopping cart (and update color fill) when a product is added if size is selected. Else display "Select size"


      $.each(product, function(i, product){

        var cart = 0;

        $( 'button' ).click(function() {

          if ($('#sizeSelect').val() > 0) {

            $('#infoUpdate').hide();

            cart++;
            $("#shopping-cart").css({
              "color" : "#6fd5a4"
            });
            $("#numberItems").css({
              "color" : "#6fd5a4",
              "font-weight" : "800",
              "text-align" : "center"
            });
            $("#numberItems").text(cart);


          } else {

            $('#infoUpdate').show();
            $('#infoUpdate').text('Select size');
          };

        });
      });


// ------------------------------------------------------------------------------------

    // Switch Statement : when clicking on Logo, update banner img, brand description text and products

      var $brandLogo = $('#brandList').children('div');

      $brandLogo.click(function() {
        switch (true) {

          case $(this).hasClass('CocaCola'):

          // 1. Update banner page with Logo Banner
          $('#brandBanner img').attr("src", "img/brands/banners/banner" + brand[1]['id'] + ".jpg");

          // 2. Update descriptive text with it's Logo/Brand text
          $brandDescription.text( brand[1]['description'] );

          // 3. Hide product divs that don't have the class
          $('#productList div').show();
          $('#productList div').not('.CocaCola').hide();
          $('#productList div').hasClass('CocaCola').show();
          break;

          case $(this).hasClass('Marvel'):
          $('#brandBanner img').attr("src", "img/brands/banners/banner" + brand[2]['id'] + ".jpg");
          $brandDescription.text( brand[2]['description'] );
          $('#productList div').show();
          $('#productList div').not('.Marvel').hide();
          $('#productList div').hasClass('Marvel').show();
          break;

          case $(this).hasClass('Movies'):
          $('#brandBanner img').attr("src", "img/brands/banners/banner" + brand[5]['id'] + ".jpg");
          $brandDescription.text( brand[5]['description'] );
          $('#productList div').show();
          $('#productList div').not('.Movies').hide();
          $('#productList div').hasClass('Movies').show();
          break;

          case $(this).hasClass('VideoGames'):
          $('#brandBanner img').attr("src", "img/brands/banners/banner" + brand[6]['id'] + ".jpg");
          $brandDescription.text( brand[6]['description'] );
          $('#productList div').show();
          $('#productList div').not('.VideoGames').hide();
          $('#productList div').hasClass('VideoGames').show();
          break;

          case $(this).hasClass('Kodak'):
          $('#brandBanner img').attr("src", "img/brands/banners/banner" + brand[7]['id'] + ".jpg");
          $brandDescription.text( brand[7]['description'] );
          $('#productList div').show();
          $('#productList div').not('.Kodak').hide();
          $('#productList div').hasClass('Kodak').show();
          break;

          case $(this).hasClass('Disney'):
          $('#brandBanner img').attr("src", "img/brands/banners/banner" + brand[8]['id'] + ".jpg");
          $brandDescription.text( brand[8]['description'] );
          $('#productList div').show();
          $('#productList div').not('.Disney').hide();
          $('#productList div').hasClass('Disney').show();
          break;

          case $(this).hasClass('Lego'):
          $('#brandBanner img').attr("src", "img/brands/banners/banner" + brand[9]['id'] + ".jpg");
          $brandDescription.text( brand[9]['description'] );
          $('#productList div').show();
          $('#productList div').not('.Lego').hide();
          $('#productList div').hasClass('Lego').show();
          break;

          case $(this).hasClass('PopCulture'):
          $('#brandBanner img').attr("src", "img/brands/banners/banner" + brand[10]['id'] + ".jpg");
          $brandDescription.text( brand[10]['description'] );
          $('#productList div').show();
          $('#productList div').not('.PopCulture').hide();
          $('#productList div').hasClass('PopCulture').show();
          break;

          case $(this).hasClass('Music'):
          $('#brandBanner img').attr("src", "img/brands/banners/banner" + brand[11]['id'] + ".jpg");
          $brandDescription.text( brand[11]['description'] );
          $('#productList div').show();
          $('#productList div').not('.Music').hide();
          $('#productList div').hasClass('Music').show();
          break;

          default:

          // Display all products by default
          $('#brandBanner img').attr("src", "img/brands/banners/banner" + brand[0]['id'] + ".jpg");
          $brandDescription.text( brand[0]['description'] );
          $('#productList div').show();
        }
      }); // End of function

// ------------------------------------------------------------------------------------

      // Generate a random price and popularity score for product divs

      // Generate a random popularity score per product div

      $('#productList div').each(function() {

        var randomPop = Math.floor(Math.random() * (999 - 100) + 100);

        $(this).children('.pop').append(randomPop);
        $(this).parent('.mamachu').attr("data-popularity", randomPop); // <= populate 'data-popularity' attribute with same random integer

      });


      function getRandomInt(min, max) {

        // Random price per product div:

        $('.price').each(function() {

          var randomInt = ( Math.random() * (max - min) + min ).toFixed( 2 )  ;

          $(this).append( randomInt + ' €' ) ; // <= display  a random number for product price
          $(this).attr("data-pricing", randomInt); // <= populate 'data-pricing' attribute with same random integer
          $(this).parent('div').attr("data-pricing", randomInt); // <= populate 'data-pricing' attribute with same random integer

        });

      }; // END function getRandomInt

      return getRandomInt(4,15);

    } // end JSON query
  }); // End AJAX call

}); // END
