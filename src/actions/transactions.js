export const TRANSACTIONS_CREATE = 'TRANSACTIONS_CREATE';
export const TRANSACTIONS_DELETE = 'TRANSACTIONS_DELETE';
export const TRANSACTIONS_RESTORE = 'TRANSACTIONS_RESTORE';

export const create = (data) => ({
  type: TRANSACTIONS_CREATE,
  data
})

export const remove = (id) => ({
  type: TRANSACTIONS_DELETE,
  id
})

export const restore = (id) => ({
  type: TRANSACTIONS_RESTORE,
  id
})