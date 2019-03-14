# Reproduction of a products list page in Jquery

This project is a reproduction of a page with products listed on it. The final version of the project is available here: [cookiesandwifi.ovh/teestigers](http://cookiesandwifi.ovh/teestigers/)

Main focus of this project: When clicking a brand-logo, the page automatically updates the head banner, introduction text and the products displayed to only show those related to that logo.

The original page the reproduction is based on is [here](https://www.pullandbear.com/fr/homme/vêtements/graphic-tees-c1030139007.html)


## Key Elements

* The main content of the page, such as the image path of the banners and list of products, are stored in JSON. Data is queried using loops, Each() function and iteration of the same elements which simplifies code by avoiding repetition.

* Switch statement: Products have different sorting options. They can be sorted randomly, by popularity index, from low to high price and high to low price. The statement looks into the data-attributes of the products. The products' price and popularity index are generated randomly and take into consideration a set minimum and maximum.

* the products' images change on mouseOver and mouseOut events. Use of fadeIn for a smooth transition when the image changes.

* Integration of a jQuery plugin 'Easy Autocomplete' for the search input to return product and brand names when whatever is typed in the input bar matches.

* If condition: Incrementation of the number of items in the shopping cart when a product is added. Error message appears if the user doesn't select product size.

* Custom Nav is made from a modal and opens from left to right using the animate effect. 

* Bootstrap 4 is used mainly for the responsive format of the page and shortcut for the style syntaxes.

* A stylish underline on hover is used for the Footer and Nav.


![preview](https://github.com/clairedonut/teesandtigers-shop-JS/blob/master/screencapture.png?raw=true)
