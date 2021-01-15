import Battle from "./Battle";

let id = 0

function deleteFromId(arr, id) {
  const idx = arr.findIndex(item => item.id === id)
  if (idx > -1) {
    arr.splice(idx, 1)
  }
}

export default class Message {
  speed = 0
  message = []

  constructor(speed) {
    this.speed = speed
  }

  append({content, type}) {
    this.message.push({
      id: ++id,
      content,
      type,
    })
    return id
  }

  addMessage(messages) {
    const ids = messages.map(message => {
      return this.append(message)
    })
    setTimeout(() => {
      this.off(ids)
    }, this.speed)
  }

  off(ids) {
    ids.forEach(id => {
      deleteFromId(this.message, id)
    })
  }
}