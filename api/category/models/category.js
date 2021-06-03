"use strict";

const slugify = require("slugify");

module.exports = {
  lifecycles: {
    //* Triggered before user creation.
    //  It is for making slug autocomplete acc to cate name
    async beforeCreate(data) {
      if (data.category_name) {
        data.Slug = slugify(data.category_name, { lower: true });
      }
    },
    async beforeUpdate(params, data) {
      if (data.category_name) {
        data.Slug = slugify(data.category_name, { lower: true });
      }
    },
  },
};
