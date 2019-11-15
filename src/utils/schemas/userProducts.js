const joi = require('@hapi/joi');

const { productIdSchema } = require('./products');
const { userIdSchema } = require('./users');

const userproductIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);

const createUserProductSchema = {
  userId: userIdSchema,
  productId: productIdSchema
};

module.exports = {
  userProductIdSchema,
  createUserProductSchema
};
