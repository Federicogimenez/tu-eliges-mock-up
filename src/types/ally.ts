export interface AllyDataProps {
  alliedName: string;
  alliedCompanyImg: string;
  alliedCuponCode: string;
  discount_percent: number;
  membership_anual_fee: number;
  new_price_after_discount: number;
  isLoading: boolean;
  userNotFound: boolean;
}

export interface AllyContextType {
  code: string | null;
  allyData: AllyDataProps;
}