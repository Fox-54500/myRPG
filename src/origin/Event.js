const once = []
const on = []
let id = 0

function deleteFromId(arr, id) {
  const idx = arr.findIndex(item => item.id === id)
  if (idx > -1) {
    arr.splice(idx, 1)
  }
}

export default {
  $emit(name, payload) {
    on.forEach(item => {
      if (item.name === name) {
        item.handle(payload)
      }
    })
  },
  $once(name, fn) {
    once.push({
      id: ++id,
      name,
      handle: fn
    })
    return id
  },
  $on(name, fn) {
    on.push({
      id: ++id,
      name,
      handle: fn
    })
    return id
  },
  $off(id) {
    deleteFromId(once, id)
    deleteFromId(on, id)
  }
}