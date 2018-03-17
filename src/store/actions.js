import * as types from './mutation-types'
import {shuffle} from 'common/js/util'

export const playItem = function ({commit,state},{list,index}) {
  commit(types.SET_PLAY_LIST,list)
  commit(types.SET_SEQUENCE_LIST,list)
  commit(types.SET_PLAYING,true)
  commit(types.SET_CURRENT_INDEX,index)
  commit(types.SET_FULL_SCREEN,true)
}

export const randomPlay = function ({commit,state},{list}) {
  commit(types.SET_PLAY_MODE,2)
  commit(types.SET_PLAY_LIST,shuffle(list))
  commit(types.SET_SEQUENCE_LIST,list)
  commit(types.SET_CURRENT_INDEX,0)
  commit(types.SET_FULL_SCREEN,true)
  commit(types.SET_PLAYING,true)
}
