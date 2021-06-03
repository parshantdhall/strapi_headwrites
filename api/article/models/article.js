"use strict";

const slugify = require("slugify");

module.exports = {
  lifecycles: {
    //* Triggered before user creation.
    //  It is for making slug autocomplete acc to title
    async beforeCreate(data) {
      if (data.Title && !data.is_custom_slug) {
        data.Slug = slugify(data.Title, { lower: true });
      }
    },
    async beforeUpdate(params, data) {
      if (data.Title && !data.is_custom_slug) {
        data.Slug = slugify(data.Title, { lower: true });
      }
    },
  },
};
