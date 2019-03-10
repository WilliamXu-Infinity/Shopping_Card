import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setDetailsCheck, setPromoCheck, setDiscountCode, submitDiscountCode } from '../actions/action-creators'

class Menu extends Component {
  render() {
    const { subtotal, savings, tax, zip} = this.props.pricing
    const { item_bname, quantity } = this.props.itemDetails
    const { see_item_details, apply_promo_code } = this.props.checks
    const { discount, discount_code } = this.props.purchase_summary
    const discountOff = (1 * 100 - discount * 100)
    const currentSubtotal = subtotal * discount
    const currentTax = tax * discount
    const total = currentSubtotal - savings + currentTax
    const current_price = currentSubtotal - savings

    return (
      <div className='menu_body'>
        <div className='menu_content'> 
          <div className='title'>Subtotal</div>
          <div className='value'>${roundUp(currentSubtotal)} {discount !== 1 && `(${discountOff} %)`}</div>
        </div>
        <div className='menu_content'> 
          <div className='title_tooltip text_underline'>Pickup savings
            <span className='tooltiptext'>Picking up your order in the store helps cut costs, and we pass the savings on to you.</span>
          </div>
          <div className='value_savings'>-${savings}</div>
        </div>
        <div className='menu_content'> 
          <div className='title'>Est eaxes & fees (Based on {zip})</div>
          <div className='value'>${roundUp(currentTax)}</div>
        </div>

        <hr/>

        <div className='menu_content'> 
          <div className='title'>Est. Total</div>
          <div className='value'>${roundUp(total)}</div>
        </div>
        <a className='text_underline' onClick={this.props.setDetailsCheck}>{see_item_details ? 'See' : 'Hide'} item details {see_item_details ? '-' : '+'}</a>
        {see_item_details && <div className='menu_content'> 
          <img alt='item' src='https://images.prod.meredith.com/product/c3c7c5914a86a57b81bbec689743d54f/1549456182337/l/essentials-racing-style-leather-gaming-chair-ergonomic-swivel-computer-office-or-gaming-chair-red-ess-3085-red' className='image'></img>
          <div className='details'>
            <div>{item_bname}</div>
            <div className='details_middle'>
              <div className='ui_current_price'>{roundUp(current_price)}</div>
              <div className='ui_quality'>Qty: {quantity}</div>
            </div>
            <div className='details_bottom'>${roundUp(currentSubtotal)} {discount !== 1 && `(${discountOff} %)`}</div>
          </div>
        </div>}

        <hr/>

        <a className='text_underline' onClick={this.props.setPromoCheck}>{apply_promo_code ? 'Apply' : 'Hide'} promo code {apply_promo_code ? '-' : '+'}</a>
        {apply_promo_code && <div>
            <div>Promo Code</div>
            <input onChange={this.props.setDiscountCode} type="text" value={discount_code}/>
            <button type='button' onClick={this.props.submitDiscountCode}>Apply</button>
          </div>}
      </div>
    )
  }
}

const roundUp = (num) => Math.round(num * 100) / 100

const mapStateToProps = (state) => ({
  pricing: state.pricing,
  itemDetails: state.itemDetails,
  checks: state.checks,
  purchase_summary: state.purchase_summary
})

const mapDispatchToProps = dispatch => {
  return({
    setDetailsCheck: () => {
      dispatch(setDetailsCheck())
    },
    setPromoCheck: () => {
      dispatch(setPromoCheck())
    },
    setDiscountCode: (payload) => {
      dispatch(setDiscountCode(payload))
    },
    submitDiscountCode: () => {
      dispatch(submitDiscountCode())
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps) (Menu)
