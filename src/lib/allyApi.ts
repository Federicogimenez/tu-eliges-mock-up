import axios from 'axios';
import type { AllyDataProps } from '../types/ally';

export const fetchAllyData = async (code: string): Promise<AllyDataProps> => {
  try {
    // const urlFetch = `https://api.tueliges.us/public/ally-code/${code}`;
    const urlFetch = `https://te-uc-platform-api.fly.dev/user/ally-code/${code}`;
    // const urlFetch = `https://lb-backend-tueliges-1205073002.us-east-1.elb.amazonaws.com/user/ally-code/${code}`;
    const response = await axios.get(urlFetch);
    
    
    return {
      alliedName: response.data.allyCompanyName || '',
      alliedCompanyImg: response.data.allyCompanyLogo || '',
      alliedCuponCode: response.data.alliedCuponCode || code,
      discount_percent: response.data.discount_percent || 0,
      membership_anual_fee: response.data.membership_anual_fee || 47.99,
      new_price_after_discount: response.data.new_price_after_discount || 47.99,
      hasCoupon: true,
      isLoading: false,
      userNotFound: false
    };
  } catch (error) {
    console.error('Error fetching ally data:', error);
    return {
      alliedName: '',
      alliedCompanyImg: '',
      alliedCuponCode: code,
      discount_percent: 0,
      membership_anual_fee: 47.99,
      new_price_after_discount: 47.99,
      hasCoupon: false,
      isLoading: false,
      userNotFound: true
    };
  }
};