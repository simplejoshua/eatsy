function closeOverlay() {
    document.getElementById("overlay-section").style.display = "none";
}

function openOverlay() {
    document.getElementById("overlay-section").style.display = "block";
}

var pizzaProducts = [{
        productName: "Cheese Pizza",
        productPrice: 325,
        productDesc: "Enjoy a cheesy perfection with our Cheese Pizza.",
        productPhoto: "./assets/img/pizza/cheese-pizza.jpg"
    },
    {
        productName: "Hawaiian Pizza",
        productPrice: 355,
        productDesc: "Experience a tropical twist on pizza perfection with our Hawaiian Pizza.",
        productPhoto: "./assets/img/pizza/hawaiian-pizza.jpg"
    },
    {
        productName: "Ham & Cheese Pizza",
        productPrice: 355,
        productDesc: "Savor the delightful blend of savory ham and melted cheese.",
        productPhoto: "./assets/img/pizza/ham-cheese-pizza.jpg"
    },
    {
        productName: "Bacon & Mushroom Pizza",
        productPrice: 355,
        productDesc: "Indulge in the rich, smoky flavors of bacon and earthy mushrooms.",
        productPhoto: "./assets/img/pizza/bacon-mushroom-pizza.jpg"
    },
    {
        productName: "Pepperoni Pizza",
        productPrice: 355,
        productDesc: "Perfectly crispy pepperoni slices atop a bed of melted cheese and savory tomato sauce.",
        productPhoto: "./assets/img/pizza/pepperoni-pizza.jpg"
    },
    {
        productName: "Super Pepperoni Pizza",
        productPrice: 420,
        productDesc: "Loaded with an abundance of crispy pepperoni slices for the ultimate flavor explosion.",
        productPhoto: "./assets/img/pizza/super-pepperoni-pizza.jpg"
    }
]

var burgerProducts = [
    {
        productName: "Bacon Cheeseburger",
        productPrice: 110,
        productDesc: "Beef patties, crispy bacon, and melted cheese, all nestled in a soft, toasted bun.",
        productPhoto: "./assets/img/burger/bacon-cheese.png"
    },
    {
        productName: "Bacon Single Burger",
        productPrice: 130,
        productDesc: "Juicy beef patty topped with crispy bacon, served in a perfectly toasted bun.",
        productPhoto: "./assets/img/burger/bacon-single.png"
    },
    {
        productName: "Bacon Double Burger",
        productPrice: 190,
        productDesc: "Two juicy beef patties, layered with crispy bacon and topped with melted cheese, all in a freshly toasted bun.",
        productPhoto: "./assets/img/burger/bacon-double.png"
    },
    {
        productName: "Bacon Mushroom Double Burger",
        productPrice: 205,
        productDesc: "Two juicy patties, crispy bacon, and savory mushrooms in every bite.",
        productPhoto: "./assets/img/burger/double-bacon-mushroom.png"
    },
    {
        productName: "Bacon Mushroom Burger",
        productPrice: 145,
        productDesc: "Savor the perfect blend of savory and earthy flavors in our Bacon Mushroom Burger.",
        productPhoto: "./assets/img/burger/bacon-mushroom.png"
    },
    {
        productName: "Tomato Single Burger",
        productPrice: 125,
        productDesc: "A juicy beef patty and fresh, ripe tomatoes in a perfectly toasted bun",
        productPhoto: "./assets/img/burger/tomato-single.png"
    },
    {
        productName: "Tomato Double Burger",
        productPrice: 185,
        productDesc: "Two juicy beef patties and twice the fresh, ripe tomatoes in a perfectly toasted bun",
        productPhoto: "./assets/img/burger/tomato-double.png"
    },
    {
        productName: "Tomato Triple Burger",
        productPrice: 235,
        productDesc: "Three succulent beef patties and layers of fresh, ripe tomatoes, all in one mouthwatering bite.",
        productPhoto: "./assets/img/burger/tomato-triple.png"
    }
]

var beverageProducts = [
    {
        productName: "Iced Tea",
        productPrice: 45,
        productDesc: "Home-blend iced tea to quench your thirst.",
        productPhoto: "./assets/img/beverage/iced-tea.png"
    },
    {
        productName: "Coke in Can",
        productPrice: 45,
        productDesc: "Nothing beats the classic Coke in can.",
        productPhoto: "./assets/img/beverage/coke_in_can.png"
    },
    {
        productName: "Royal in Can",
        productPrice: 45,
        productDesc: "Go for the orange taste with Royal in can.",
        productPhoto: "./assets/img/beverage/royal-in-can.png"
    },
    {
        productName: "Sprite in Can",
        productPrice: 45,
        productDesc: "You can't go wrong with Sprite in can.",
        productPhoto: "./assets/img/beverage/sprite-in-can.png"
    },
    {
        productName: "San Mig in Can",
        productPrice: 45,
        productDesc: "Get a little dose of alcohol with San Mig Beer.",
        productPhoto: "./assets/img/beverage/SMB.png"
    },
    {
        productName: "Bottled Water",
        productPrice: 45,
        productDesc: "Back to basics with our bottled water.",
        productPhoto: "./assets/img/beverage/bottled-water.png"
    },

]

var dessertProducts = [
    {
        productName: "Berry Banana Waffles",
        productPrice: 225,
        productDesc: "Fluffy waffles topped with sweet berries and ripe banana slices.",
        productPhoto: "./assets/img/dessert/berry-banana-waffles.jpg"
    },
    {
        productName: "Triple Cake",
        productPrice: 305,
        productDesc: "A delectable trio of Hummingbird Cake, Fudge Brownie Cake, and Carrot Cake.",
        productPhoto: "./assets/img/dessert/triple-cake.jpg"
    },
]


function displayProducts(products, id) {
    var content = "";
    products.forEach(function(item) {
        content += '<div class="menu-item">' +
        '<img src="' + item.productPhoto + '"/>' +
        '<p class="product-name">' + item.productName + '</p>' +
        '<p class="product-price"> PHP <span>' + item.productPrice + '</span></p>' +
        '<p class="product-desc">' + item.productDesc + '</p>' +
        '<div class="cart-action">'+
        '<input type="number" class="product-quantity" name="quantity" value="1" min="1" />'+
        '<input type="submit" value="Add to Bag" class="add-to-bag" onClick="addToCart(this)" />'+
    '</div>'+
      '</div>'
    })
    var container = document.getElementById(id);
    container.innerHTML = content;
}

function addToCart(element) {
	var productParent = element.closest('div.menu-item');

	var productPrice = productParent.querySelector('.product-price span').textContent;
	var productName = productParent.querySelector('.product-name').textContent;
	var productQuantity = productParent.querySelector('.product-quantity').value;

	var cartItem = {
		productName: productName,
		productPrice: productPrice,
		productQuantity: productQuantity
	};
	var cartItemJSON = JSON.stringify(cartItem);

	var cartArray = new Array();
	// If javascript shopping cart session is not empty
	if (sessionStorage.getItem('shopping-cart')) {
		cartArray = JSON.parse(sessionStorage.getItem('shopping-cart'));
	}
    var isPresent = false;
    cartArray.forEach(function(item) {
        var check = JSON.parse(item);
        if (check.productName == productName) {
            var objIndex = cartArray.indexOf(item);
            check.productQuantity = Number(check.productQuantity) + Number(productQuantity);

            cartArray[objIndex] = JSON.stringify(check);
            isPresent = true;
            return;
        }
            
    })

    if (isPresent == false) {
        cartArray.push(cartItemJSON);
    }
	var cartJSON = JSON.stringify(cartArray);
	sessionStorage.setItem('shopping-cart', cartJSON);
	showCartTable();
    alert(productQuantity + " " + productName + "/s added to your bag!");
}

function showCartTable() {
	var cartRowHTML = "";
	var itemCount = 0;
	var grandTotal = 0;

	var price = 0;
	var quantity = 0;
	var subTotal = 0;

	if (sessionStorage.getItem('shopping-cart')) {
		var shoppingCart = JSON.parse(sessionStorage.getItem('shopping-cart'));
		itemCount = shoppingCart.length;

		//Iterate javascript shopping cart array
		shoppingCart.forEach(function(item) {
			var cartItem = JSON.parse(item);
			price = parseFloat(cartItem.productPrice);
			quantity = parseInt(cartItem.productQuantity);
			subTotal = price * quantity

			cartRowHTML += "<tr>" +
				"<td>" + cartItem.productName + "</td>" +
				"<td class='text-right'>" + price.toFixed(2) + "</td>" +
				"<td class='text-right'>" + quantity + "</td>" +
				"<td class='text-right'>" + subTotal.toFixed(2) + "</td>" +
				"</tr>";

			grandTotal += subTotal;
		});
	}

	document.getElementById('cartTableBody').innerHTML = cartRowHTML;
	document.getElementById('itemCount').textContent = itemCount;
	document.getElementById('totalAmount').textContent = grandTotal.toFixed(2);
}

function emptyCart() {
	if (sessionStorage.getItem('shopping-cart')) {
		// Clear JavaScript sessionStorage by index
		sessionStorage.removeItem('shopping-cart');
		showCartTable();
	}
}

function removeCartItem(index) {
	if (sessionStorage.getItem('shopping-cart')) {
		var shoppingCart = JSON.parse(sessionStorage.getItem('shopping-cart'));
		sessionStorage.removeItem(shoppingCart[index]);
		showCartTable();
	}
}
