import Store from '../store'

export function save(role) {
  localStorage.setItem('RPG_ROLE', JSON.stringify({
    name: role.name,
    sexId: role.sexId,
    strength: role.strength,
    agility: role.agility,
    intelligence: role.intelligence,
    lucky: role.lucky,
    point: role.point
  }))
}

export function load() {
  const roleData = localStorage.getItem('RPG_ROLE')
  try {
    if (roleData) {
      Store.commit('createPlayer', JSON.parse(roleData))
    }
  } catch (e) {
    console.log(e)
    // error handle
  }
}

