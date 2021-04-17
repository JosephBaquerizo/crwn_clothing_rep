import React from 'react';
import {connect} from 'react-redux';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors.js';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.actions.js';
import CustomButtom from '../custom-button/custom-button.component';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {
                    cartItems.length ?
                    (
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem}/>
                    ))
                    )   
                    : (
                    <span className='empty-message'>Your cart is empty</span>
                    )
                }
            </div>
            <CustomButtom onClick={() => {history.push('/checkout'); dispatch(toggleCartHidden())}}>
            GO TO CHECKOUT
            </CustomButtom>
        </div>
    )
}

/*
Con los selectors se evita el rerenderizado de los componentes
*/

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})


export default withRouter(connect(mapStateToProps)(CartDropdown));