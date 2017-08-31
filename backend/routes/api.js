// Dependencies
const meliApi = require('../config.js').meliApi;
var express = require('express');
var router = express.Router();

var Client = require('node-rest-client').Client;
var http = new Client();

const { Product, ProductDetail, ProductsResponse, Price, ProductDetailResponse } = require('../models.js');

// Routes
router.get('/items', function(req, res, next) {
    http.get(`${meliApi}/sites/MLA/search?q=${req.query.search}&limit=4`, function(data, response) {
        var categories = [];
        data.filters.forEach(function(filter) {
            if (filter.id == 'category') {
                filter.values.forEach(function(value) {
                    if (value.path_from_root.length > 0) {
                        value.path_from_root.forEach(function(element) {
                            categories.push(element.name);
                        });
                    }
                });
            }
        });
        var products = new ProductsResponse({ name: 'Pablo', apellido: 'Rossetti' }, categories, []);
        data.results.forEach(function(item) {
            products.items.push(new Product(
                item.id,
                item.title,
                new Price(item.currency_id, Math.trunc(item.price), (item.price - Math.floor(item.price)).toFixed(2) * 100),
                item.thumbnail,
                item.condition,
                item.shipping.free_shipping));
        });
        res.send(products);
    });
});

// ID example: MLA605735622
router.get('/items/:id', function(req, res, next) {
    http.get(`${meliApi}/items/${req.params.id}`, function(data, response) {
        http.get(`${meliApi}/items/${req.params.id}/description`, function(desc, resp) {
            var product = new ProductDetailResponse({ name: 'Pablo', apellido: 'Rossetti' },
                new ProductDetail(data.id, data.title,
                    new Price(data.currency_id, Math.trunc(data.price), (data.price - Math.floor(data.price)).toFixed(2) * 100),
                    data.pictures[0].url,
                    data.condition,
                    data.shipping.free_shipping,
                    data.sold_quantity,
                    desc.plain_text != '' ? desc.plain_text : desc.text));
            res.send(product);
        });
    });
});

// Return router
module.exports = router;