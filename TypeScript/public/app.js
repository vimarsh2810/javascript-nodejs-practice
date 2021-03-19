"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var invoice_js_1 = require("./classes/invoice.js");
var ListTemplate_js_1 = require("./classes/ListTemplate.js");
var payment_js_1 = require("./classes/payment.js");
var form = document.querySelector('.new-item-form');
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
var ul = document.querySelector('ul');
var list = new ListTemplate_js_1.ListTemplate(ul);
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var doc;
    if (type.value === 'invoice') {
        doc = new invoice_js_1.Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new payment_js_1.Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
var docFour = {
    UID: 3,
    resourceName: 'person',
    data: { name: 'Vimarsh' }
};
var docFive = {
    UID: 5,
    resourceName: 'shoppingList',
    data: ['bread', 'milk']
};
console.log(docFour, docFive);
