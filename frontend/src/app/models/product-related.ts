export class ProductDetail {
    id: number;
    title: string;
    price: object;
    picture: string;
    condition: boolean;
    free_shipping: object;
    sold_quantity: number;
    description: string;
}

export class ProductDetailResponse {
    author: Author;
    item: ProductDetail;
}

export class Product {
    id: number;
    title: string;
    price: Price;
    picture: string;
    condition: boolean;
    free_shipping: object;
}

export class Price {
    currency: string;
    amount: number;
    decimals: number;
}

export class ProductsResponse {
    author: Author;
    categories: [string];
    items: [Product];
}

export class Author {
    name: string;
    apellido: string;
}
