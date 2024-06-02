import * as actionCreator from './actionCreator';
import { DeleteState, DeleteActionType } from './types';
const initialState: DeleteState = { shouldDelete: false };

export function deleteReducer(state = initialState, action: DeleteActionType) {
  switch (action.type) {
    case actionCreator.deleteModal: {
      return {
        shouldDelete: !state.shouldDelete
      };
    }
    default: {
      return state;
    }
  }
}
