import {formatCurrencyString} from "use-shopping-cart";

export default function formatProductPrice(product) {
    return formatCurrencyString({
        value: product.price,
        currency: 'AUD',
        language: navigator.language
    });
}
