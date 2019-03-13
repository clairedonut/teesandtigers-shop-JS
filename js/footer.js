$(function (){

  // Content in Footer

  $.ajax({
    type: 'GET',
    url: 'json/footer.json',

    success: function(response) {      // <= this is the change
      var footer = response.footer;      // <= going inside the data itself

      // Footer category #1 - Guide d'achat
      $('#footerNav > div:nth-child(1) > .footerCategory').append('<a href=""><h4>' + footer[0]['category'] + '</h4></a>');
      for (var i = 0; i < footer.length; i++) {
        $('#footerNav > div:nth-child(1) > .footerSubcategory').append('<a href="">' + footer[0]['subcategory'][i]['name'] + '</a>');
      };

      // Footer category #2 - Entreprise
      $('#footerNav > div:nth-child(2) > .footerCategory').append('<a href=""><h4>' + footer[1]['category'] + '</h4></a>');
      for (var i = 0; i < footer.length; i++) {
        $('#footerNav > div:nth-child(2) > .footerSubcategory').append('<a href="">' + footer[1]['subcategory'][i]['name'] + '</a>');
      };

      // Footer category #3 - Politique
      $('#footerNav > div:nth-child(3) > .footerCategory').append('<a href=""><h4>' + footer[2]['category'] + '</h4></a>');
      for (var i = 0; i < footer.length; i++) {
        $('#footerNav > div:nth-child(3) > .footerSubcategory').append('<a href="">' + footer[2]['subcategory'][i]['name'] + '</a>');
      };

      // Footer category #4 - Social Media links
      $('#footerNav > div:nth-child(4) > .footerCategory').append('<a href=""><h4>' + footer[3]['category'] + '</h4></a>');
      for (var i = 0; i < footer.length; i++) {
        $('#footerNav > div:nth-child(4) > .footerSubcategory').append('<div class""><a href="" class=""><i class=" ' + footer[3]['subcategory'][i]['icon'] +  '"></i>' + footer[3]['subcategory'][i]['name'] + '</a></div>');
      };

      // Footer category #5 - Payment options
      $('#footerNav > div:nth-child(5) > .footerCategory').append('<a href=""><h4>' + footer[4]['category'] + '</h4></a>');
      for (var i = 0; i < footer.length; i++) {
        $('#footerNav > div:nth-child(5) > .footerSubcategory').append('<div class""><a href="" ><i class="' + footer[4]['subcategory'][i]['icon'] +  '"></i>' + footer[4]['subcategory'][i]['name'] + '</a></div>');
      };

    }

  }); // End AJAX call

}); // END
