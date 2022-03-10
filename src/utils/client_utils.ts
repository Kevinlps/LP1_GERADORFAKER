import { Client } from '../models/Client'

export const isClientValid = (client: Client) => {
  const { name, address, cpf, email, phone } = client

  if (!name) {
    return false
  }

  if (!address) {
    return false
  }

  if (!email) {
    return false
  }

  if (!cpf.match(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/)) {
    return false
  }

  if (!phone.match(/^\(\d{2}\)\s\d{5}-\d{4}$/)) {
    return false
  }

  return true
}