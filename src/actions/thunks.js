import { setData } from './action-creators'

const pricingData = {
  pricing: {
    subtotal: 102.92,
    savings: 3.85,
    tax: 8.92,
    total: 108.03,
    zip: 85050
  },
  itemDetails: {
    item_bname: 'Essentials by OFM ESS-3085 Racing Style Leather Gaming Chair, Red',
    quantity: 1
  }
}

export const getPricingData = (delay = 1000) => {
  console.warn('check: ')
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(pricingData)
    }, delay)
  })
}