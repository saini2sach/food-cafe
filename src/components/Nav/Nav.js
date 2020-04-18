import React, { Component } from 'react';
import s from './Nav.module.scss';
import Checkbox from '../Checkbox';
import { ExtractId } from '../../utils';

export default class Nav extends Component {
    constructor() {
        super()
        this.initialObj = {
            pizza: false,
            burger: false,
            icecream: false,
            veg: false,
            nonveg: false,
            drinks: false
        }
        this.state = {
            searchVal: '',
            showFilterDrawer: false,
            filterCriteria: this.initialObj,
            filterArr: []
        }
    }

    handleChange = (evt) => {
        this.setState({
            searchVal: evt.target.value
        })
    }

    handleKeyUp = (evt) => {
        if (evt.keyCode === 13) {
            this.props.handleSearch(this.state.searchVal)
        }
    }

    handleSearchClick = () => {
        this.props.handleSearch(this.state.searchVal);
    }

    toggleDrawer = (bool) => {
        this.setState({
            showFilterDrawer: bool
        })
    }

    closeDrawer = () => {
        this.setState({
            showFilterDrawer: false
        })
    }

    handleCheckChange = (data) => {
        console.log('data', data);

        let obj = { ...this.state.filterCriteria };
        obj[data.name] = data.value;
        this.setState({
            filterCriteria: obj
        })
    }

    handleCancelClick = () => {
        this.setState({
            filterCriteria: this.initialObj,
            filterArr: []
        })
    }

    handleApplyClick = () => {

        let arr = [];
        let namedArr = []

        Object.keys(this.state.filterCriteria).map((item) => {
            if (this.state.filterCriteria[item]) {
                namedArr.push(item);
                arr.push(ExtractId(item));
            }
            return item
        })

        this.setState({
            showFilterDrawer: false,
            filterArr: namedArr
        })
        this.props.applyFilter(arr);
    }

    render() {
        const { searchVal, showFilterDrawer, filterCriteria, filterArr = [] } = this.state;
        return (
            <nav className={s.navContainer}>
                <div className={s.main}>
                    <input name="search" value={searchVal} onChange={this.handleChange} placeholder="Search the products" onKeyUp={this.handleKeyUp} />
                    <button onClick={this.handleSearchClick} className={s.searchBtn}>Search</button>
                    <button className={s.filterBtn} onClick={this.toggleDrawer.bind(true)}>Filter</button>
                </div>
                {filterArr.length > 0 &&
                    <div className={s.filterArr}>
                        <span>Filter Applied: </span>
                        {filterArr.map((item, index) => <span key={index}>{item.toUpperCase()}</span>)}
                    </div>
                }
                {showFilterDrawer &&
                    <div className={s.filterDrawer}>
                        <div>
                            <span onClick={this.closeDrawer}>Close</span>
                            <h3>Filter By</h3>
                        </div>
                        <div className={s.filterType}>
                            <h5>Category</h5>
                            <Checkbox handleChange={this.handleCheckChange} checked={filterCriteria['pizza']} name='pizza'>Pizza</Checkbox>
                            <Checkbox handleChange={this.handleCheckChange} checked={filterCriteria['burger']} name='burger'>Burger</Checkbox>
                            <Checkbox handleChange={this.handleCheckChange} checked={filterCriteria['icecream']} name='icecream'>Icecream</Checkbox>
                            <Checkbox handleChange={this.handleCheckChange} checked={filterCriteria['drinks']} name='drinks'>Drinks</Checkbox>
                        </div>
                        <div className={s.filterType}>
                            <h5>Type of Food</h5>
                            <Checkbox handleChange={this.handleCheckChange} checked={filterCriteria['veg']} name='veg'>Veg</Checkbox>
                            <Checkbox handleChange={this.handleCheckChange} checked={filterCriteria['nonveg']} name='nonveg'>Non-Veg</Checkbox>
                        </div>
                        <div className={s.btnContainer}>
                            <button className={s.applyBtn} onClick={this.handleApplyClick}>Apply</button>
                            <button className={s.cancelBtn} onClick={this.handleCancelClick}>Cancel</button>
                        </div>
                    </div>
                }
            </nav>
        )
    }
}
