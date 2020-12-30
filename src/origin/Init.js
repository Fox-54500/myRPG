import {load} from './Save&Load'
import itemList from '../item.json'
import Store from '../store'

export default function init() {
  load()
  Store.commit('getItemList', itemList)
}