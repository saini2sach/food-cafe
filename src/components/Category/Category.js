import React, { Component } from 'react';
import CategoryItem from '../CategoryItem';
import s from './Category.module.scss';

export default class Category extends Component {

    addItem = (item) => {
        this.props.addItem(item);
    }

    render() {
        const { list = [] } = this.props.item;
        return (
            <div>
                {
                    list.length > 0 ?
                        <div className={s.listContainer}>
                            {list.map((subitem) => <CategoryItem key={subitem.id} subitem={subitem} addItem={this.addItem} />)}
                        </div>
                        : "No Item Found"
                }
            </div>
        )
    }
}
