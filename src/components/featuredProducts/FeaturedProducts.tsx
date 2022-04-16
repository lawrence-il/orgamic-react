import { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useGetFiltersQuery } from "../../api/apiSlice";
import { IDataFilters } from "../../interfaces/interfaces";
import { changingActiveBtn } from "./featuredProductsSlice";

import "./featured-products.sass"

const FeaturedProducts: FC = () => {

    const {activeBtn} = useSelector((state: any)=> state.activeBtn)
    const dispatch = useDispatch();
    
    const {
        data: filters = [],
        isError
    } = useGetFiltersQuery();

    const onClickBtn = (item: IDataFilters) => {
        dispatch(changingActiveBtn(item))
    }

    const creatingBtns = (filters: IDataFilters[]) => {
        return filters.map(item => (
            <button
                key={Date.now() + Math.random()}
                type="submit" 
                className={`featured-products__btn ${activeBtn === item ? "active" : ''}`}
                onClick={() => onClickBtn(item)}
                >
                    {item}
            </button>
        ))
    }

    const btns = creatingBtns(filters);

    return (
        <div className="featured-products">
            <div className="container">
                <h2 className="featured-products__title">Featured Products</h2>
                <input type="text" className="featured-products__search" placeholder="enter the product name"/>
                <div className="featured-products__group-btns">
                    {isError ? <div>ERROR</div> : null}
                    {btns}
                </div>    
            </div>    
        </div>
    )
}

export default FeaturedProducts;