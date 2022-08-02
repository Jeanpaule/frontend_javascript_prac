const menuEmail = document.querySelector(".navbar-email");
const menuHamIcon = document.querySelector(".burger-menu");
const menuCartIcon = document.querySelector(".navbar-shopping-cart");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCartIcon.addEventListener("click", toggleCartAside);

function toggleDesktopMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains("inactive");

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add("inactive");
  }

  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains("inactive");

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add("inactive");
  }

  mobileMenu.classList.toggle("inactive");
}

function toggleCartAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
  const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  }

  if (!isDesktopMenuClosed) {
    desktopMenu.classList.add("inactive");
  }

  shoppingCartContainer.classList.toggle("inactive");
}

const productList = [];

productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
  name: "Monitor",
  price: 220,
  image: "https://images.pexels.com/photos/400678/pexels-photo-400678.jpeg",
});

productList.push({
  name: "MacBook",
  price: 1200,
  image:
    "https://images.pexels.com/photos/792194/pexels-photo-792194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

productList.push({
  name: "Desktop",
  price: 320,
  image:
    "https://images.pexels.com/photos/6368911/pexels-photo-6368911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productImage = document.createElement("img");
    // productImage.setAttribute("src", product.image);
    productImage.src = product.image;

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.innerText = `$${product.price}`;

    const productName = document.createElement("p");
    productName.innerText = product.name;

    productInfoDiv.append(productPrice, productName);

    const productInfoFigure = document.createElement("figure");

    const productImgCart = document.createElement("img");
    productImgCart.src = "./icons/bt_add_to_cart.svg";

    productInfoFigure.append(productImgCart);

    productInfo.append(productInfoDiv, productInfoFigure);

    productCard.append(productImage, productInfo);

    cardsContainer.append(productCard);
  }
}

renderProducts(productList);
