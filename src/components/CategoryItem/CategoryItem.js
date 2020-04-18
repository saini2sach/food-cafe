import React, { Component } from 'react';
import s from './CategoryItem.module.scss';

export default class CategoryItem extends Component {
    state = {
        added: false
    }

    addItem = () => {
        this.setState({
            added: true
        })

        this.props.addItem(this.props.subitem);
    }

    render() {
        const { price, item, ingredient, logo } = this.props.subitem;
        const { added } = this.state;
        return (
            <div className={s.categoryItem}>
                <div className={s.logoimg + ' ' + (s[logo])}></div>
                <h4>{item}</h4>
                <p>( {ingredient} )</p>
                <h5>₹{price}</h5>
                <button onClick={this.addItem} className={added ? s.disabledBtn : ''} disabled={added}>{added ? 'Added' : 'Add'}</button>
            </div>
        )
    }
}
