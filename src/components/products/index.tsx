import * as React from "react";
import * as faker from 'faker';
import ProductDetail from "../product-detail";

const Products = ({total}) => Array.from(Array(total).keys()).map(() => <ProductDetail name={faker.commerce.productName()} />);

export default Products;