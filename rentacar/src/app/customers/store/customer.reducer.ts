import { Customer } from '../Customer';
import * as fromActions from './customer.actions';

export interface CustomerState {
  customer: Customer[];
}

const initialState: CustomerState = {
  customer: [],
};

export function CustomerReducer(
  state = initialState,
  action: fromActions.CustomersTypes
) {
  switch (action.type) {
    case fromActions.GET_CUSTOMERS_START:
      return {
        ...state,
      };
    case fromActions.GET_CUSTOMERS_SUCCESS:
      return {
        ...state,
        customer: action.payload,
      };
    case fromActions.CREATE_CUSTOMERS_START:
      return {
        ...state
      };
    case fromActions.CREATE_CUSTOMERS_SUCCESS:
      return {
        ...state,
        customer: [...state.customer, action.payload],
      };

    default:
      return state;
  }
}

export const getCustomerState = (state: CustomerState) => state.customer;
