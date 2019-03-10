import * as Types from '../actions/action-types'
import { set, get } from 'lodash'

export default function (state, action) {
  const { type, payload } = action

  switch (type) {
    case Types.SET_DATA:
      return { ...state, ...payload }

    case Types.SET_DETAILS_CHECK:
      return { ...state, checks: { ...state.checks, see_item_details: !state.checks.see_item_details }}

    case Types.SET_PROMO_CHECK:
      return { ...state, checks: { ...state.checks, apply_promo_code: !state.checks.apply_promo_code }}

    case Types.SET_DISCOUNT_CODE:
      return { ...state, purchase_summary: { ...state.purchase_summary, discount_code: payload.target.value}}

    case Types.SUBMIT_DISCOUNT_CODE: {
      if (state.purchase_summary.discount_code === 'DISCOUNT') return { ...state, purchase_summary: {discount_code: '', discount: 0.9}}
      else return { ...state, purchase_summary: {discount_code: '', discount: 1}} 
    }
    
    default:
      return state
  }
}
