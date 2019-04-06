# Product list page of an e-commerce site

This project reproduces the product list page of an e-commerce fashion website. The original page the reproduction is based on is [here](https://www.pullandbear.com/fr/homme/vêtements/graphic-tees-c1030139007.html)

The main focus of this project is to practice js and jquery. 

The essential elements of the page include: when clicking a brand-logo, the page will automatically update the whole page with content related to the brand logo. This concerns: the main banner on the top of the page, an introduction text and the products displayed.


👉 The final version of the project is available here: [cookiesandwifi.ovh/teestigers](http://cookiesandwifi.ovh/teestigers/)


------


## Key Elements in the project 

* **JSON format** : The main content of the page, such as the image source path of the banners and the list of products, are stored in JSON format. Data is queried using loops, Each() function and iteration of the same elements which simplifies code by avoiding repetition.

* **Switch statement** : Products have different sorting options. They can be sorted randomly, by popularity index, from low to high price and high to low price. The statement looks into the data-attributes of the products. The products' price and popularity index are generated randomly and take into consideration a set minimum and maximum.

* **Events** : the product images change on mouseOver and mouseOut events. Use of fadeIn for a smooth transition when the image changes.

* **Plugins** : Integration of a jQuery plugin 'Easy Autocomplete' for a search bar. The search input returns matching product names and brand names.

* **If condition** : Incrementation of the number of items in the shopping cart when a product is added. An error message appears if the user doesn't select product size.

* Custom Nav is made from a modal and opens from left to right using the animate effect. 

* **Bootstrap 4** is used mainly for the responsive format of the page and to use shortcut style syntaxes.

* A stylish underline on hover is used for the Footer and Nav.


![preview](https://github.com/clairedonut/teesandtigers-shop-JS/blob/master/screencapture.png?raw=true)
