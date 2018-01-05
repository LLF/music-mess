// Player Actions
import * as TYPES from '../../mutation-types'

const actions = {
  selectPlay ({commit, state}, {list, index}) {
    commit(TYPES.SET_PLAYING_INDEX, index)
  }
}

export default actions
