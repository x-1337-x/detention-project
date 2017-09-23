export const TRANSACTIONS_DELETE = 'TRANSACTIONS_DELETE';

export const remove = (id) => ({
  type: TRANSACTIONS_DELETE,
  id
})