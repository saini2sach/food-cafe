import React, { Component } from 'react';
import Category from '../Category';
import s from './Main.module.scss';

export default class Main extends Component {
    state = {
        cartItem: [],
        itemAdded: false
    }

    addItem = (item) => {
        this.setState({
            cartItem: [...this.state.cartItem, item],
            itemAdded: true
        })
    }

    getCategory(item, index) {
        if (item.list.length > 0) {
            return (
                <div className={s.productContainer} key={index}>
                    <h2>{item.subhead}</h2>
                    <Category key={index} item={item} addItem={this.addItem} />
                </div>
            )
        }
        else {
            return null
        }
    }

    proceedHandle = () => {
        console.log("Your added item are : ", this.state.cartItem);
        let cartItemArr = [];
        let price = 0;
        for (let item of this.state.cartItem) {
            cartItemArr.push(item.item);
            price += Number(item.price)
        }
        alert("Your order has been Placed of Rupees - " + price + ". Your order details are - " + cartItemArr.join(', '))
    }

    render() {
        const { productData } = this.props;
        const { itemAdded, cartItem } = this.state;
        return (
            <div className={s.mainContainer}>
                {
                    itemAdded &&
                    <div className={s.cartContainer}>
                        <div><b>{cartItem.length}</b> Items Added :
                            {cartItem.map((item, index) => <span key={index}><b>{item.item}</b> {cartItem.length !== index + 1 ? ', ' : ''} </span>)}
                        </div>
                        <button onClick={this.proceedHandle} >Proceed to Pay</button>
                    </div>
                }
                {productData.products
                    ? productData.products.map((item, index) => this.getCategory(item, index))
                    : <p>Please wait, products are loading...</p>
                }
            </div>
        )
    }
}
