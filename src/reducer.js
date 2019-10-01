import { OPEN_DRAWER, CLOSE_DRAWER, ADD_PROPERTY } from 'types.js'
export default function AppReducer(state, action) {
  switch (action.type) {
    case OPEN_DRAWER:
      return {
        ...state,
        drawer: action.drawer
      }
    case CLOSE_DRAWER:
      return {
        ...state,
        drawer: { isOpen: false, children: null, onClose: () => {} }
      }
    case ADD_PROPERTY:
      return {
        ...state,
        property: [...state.property, action.property]
      }
    default:
      return state
  }
}
