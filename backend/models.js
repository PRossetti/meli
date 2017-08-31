// Models

class Product {
    constructor(id, title, price, picture, condition, free_shipping) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.picture = picture;
        this.condition = condition;
        this.free_shipping = free_shipping;
    }
}

class ProductDetail {
    constructor(id, title, price, picture, condition, free_shipping, sold_quantity, description) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.picture = picture;
        this.condition = condition;
        this.free_shipping = free_shipping;
        this.sold_quantity = sold_quantity;
        this.description = description;
    }
}

class ProductDetailResponse {
    constructor(author, item) {
        this.author = author;
        this.item = item;
    }
}

class Price {
    constructor(currency, amount, decimals) {
        this.currency = currency;
        this.amount = amount;
        this.decimals = decimals;
    }
}

class ProductsResponse {
    constructor(author, categories, items) {
        this.author = author;
        this.categories = categories;
        this.items = items;
    }
}

module.exports = {
    Product: Product,
    ProductDetail: ProductDetail,
    Price: Price,
    ProductsResponse: ProductsResponse,
    ProductDetailResponse: ProductDetailResponse
}
