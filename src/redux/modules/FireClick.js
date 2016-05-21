import {
  CLICK_FIRE
} from '../../actions/types'

export default function(state = {}, action) {
  switch (action.type) {
    case CLICK_FIRE:
      return { ...state, triggerColorAnim: false }
  }
  return state
}
