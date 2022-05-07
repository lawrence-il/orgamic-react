import { FC } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import { useGetCartQuery, useDeleteProductMutation} from "../../../api/apiSlice";
import { IDataProduct } from "../../../interfaces/interfaces";
import Spinner from "../../spinner/Spinner";
import ErrorMessage from "../../errorMessage/ErrorMessage";

import "./cart.sass";

const Cart:FC = () => {

    const {
        data: products = [],
        isError,
        isLoading
    } = useGetCartQuery();

    const [delProduct] = useDeleteProductMutation();

    const deletingProductId = (id: string | number) => {
        delProduct(id);
        
    };

    const creatingListProducts = (products: IDataProduct[]) => {
        
        if (products.length === 0) return <div className="cart__empty">Empty</div>; 

        return products.map(({id, name, category, cost}) => {
                return (
                    <div 
                        key={id} 
                        className="cart__product"
                        >
                        <div className="cart__product-name">
                            {name}
                        </div>
                        <div className="cart__product-category">
                            {category}
                        </div>
                        <div className="cart__product-cost">
                            {cost}
                        </div>
                        <button 
                            className="link link_small link_btn"
                            onClick={() => deletingProductId(id)}>
                                delete   
                        </button>
                    </div>  
                );
            });
    };

    const listProducts = creatingListProducts(products);
    return(
        <HelmetProvider>
            <Helmet>
                <meta 
                    name="description"
                    content="your shopping cart"
                    />
                    <title>Shopping cart</title>
            </Helmet>
            <div className="cart">
                <div className="cart__title">
                    Products    
                </div>
                <div className="container">
                    <div className="cart__wrapper-products">
                        {isLoading ? <Spinner/> : isError ? <ErrorMessage/> : null}
                        {listProducts}
                    </div>
                </div>    
            </div>
        </HelmetProvider>
    );
};

export default Cart;