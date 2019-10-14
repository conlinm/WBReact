import React from "react";
import { formatPrice } from "../helpers"
import { link } from "fs";

class Order extends React.Component {
    renderOrder = key => {
        const fish = this.props.fishes[key];
        const count = this.props.order[key];
        const isAvailable = fish.status === 'available';
        if(!isAvailable) {
            <li>
                Sorry {fish ? fish.name : 'fish'} is no longer available
            </li>
        }
        return (
        <li>
        {count} lbs {fish.name}
        {formatPrice(count * fish.price)}
        </li>
        );
    };
    render() {
        const orderIds = Object.keys(this.props.order);
        const total = orderIds.reduce((prevTotal, key) => {
            const fish = this.props.fishes[key];
            const count = this.props.order[key];
            const isAvailable = fish && fish.status === 'available';
            if(isAvailable) {
                return prevTotal + count * fish.price;   
            }
            return prevTotal;
        },
        0);

        return (
            <div className="order-wrap">
                <h2>Order</h2>
                <ul>
                  {orderIds.map(this.renderOrder)}  
                </ul>
                
                Total:
                <div className="total">
                    <strong>{formatPrice(total)}</strong>
                </div>
            </div>
        );
    }
}

export default Order;