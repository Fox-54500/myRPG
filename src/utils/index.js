import { Name, Surname } from '@/const/Name'

export function createRoleName() {
  const rdnName = Math.round(Math.random() * (Name.length - 1))
  const rdnSurname = Math.round(Math.random() * (Surname.length - 1))
  return Surname[rdnSurname] + Name[rdnName]
}