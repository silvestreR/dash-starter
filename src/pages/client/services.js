import services from '@in-house-functions/services'

export const getAll = services.getAll
export const deleteById = services.deleteById
export const updateById = services.updateById
export const getById = services.getById
export const postCreate = services.postCreate

export default {
  getAll,
  deleteById,
  updateById,
  getById,
  postCreate
}
