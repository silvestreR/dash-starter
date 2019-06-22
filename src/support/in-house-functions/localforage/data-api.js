import storage from 'localforage'

export const addItemLocalForage = (key, item) => storage.setItem(key, item)
export const removeItemLocalForage = arrKeys => arrKeys.map(cur => storage.removeItem(cur).then(() => {}).catch(err => console.log(err)))
export const getItemLocalForage = key => storage.getItem(key).then(result => Promise.resolve(result)).catch(err => Promise.reject(new Error('NOT_FIND_KEY', err)))
