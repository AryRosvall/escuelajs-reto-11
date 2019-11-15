const joi = require('@hapi/joi');

const productIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);
const productTitleSchema = joi.string().max(80);
const productPriceSchema = joi
  .number()
  .min(0);
const productImageSchema = joi.string().uri();
const productDescriptionSchema = joi.string().max(300);

const createproductSchema = {
  title: productTitleSchema.required(),
  price: productPriceSchema.required(),
  description: productDescriptionSchema.required(),
  image: productImageSchema.required(),
 
};

const updateproductSchema = {
  title: productTitleSchema,
  price: productPriceSchema,
  description: productDescriptionSchema,
  image: productImageSchema,
};

module.exports = {
  productIdSchema,
  createproductSchema,
  updateproductSchema
};
