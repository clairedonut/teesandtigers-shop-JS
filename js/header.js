$(function (){

  // retreive content for <nav> Header
  
  $.ajax({
    type: 'GET',
    url: 'json/nav.json',

    success: function(response) {
      var nav = response.nav;

      for (var i = 0; i < nav[0]['femme'].length; i++) {
        $('#nav > aside > div > div ').append('<div><a href=""><h4>' + nav[0]['femme'][i]['category'] + '</h4></a></div>');
      };

      for (var i = 0; i < nav[0]['femme'][1]['subcategory'].length; i++) {
        $('#nav > aside > div > div > div:nth-child(2)').append('<a href=""><p>' + nav[0]['femme'][1]['subcategory'][i]['name'] + '</p></a>');
      };

    }

  }); // End AJAX call

}); // END
