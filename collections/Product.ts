import { CollectionConfig } from "payload/types";
import slug from '../fields/slug';
import meta from '../fields/meta';

const Product : CollectionConfig = {
  slug: "product",
  fields: [
    {
      name: "productName",
      label: "Product Name",
      type: 'text',
      required: true,
    },
    {
        name: 'productImage',
        label: 'Products Image',
        type: 'upload',
        relationTo: 'media',
        required: true,
    },
    slug,
    meta,
    {
      name: 'price',
      label: 'Price',
      type: 'number',
      
    },
    {
      name: 'description',
      label: 'Description',
      type: 'richText',
    },
    {
      name: 'brand',
      label: 'Brand',
      type: 'text'
    },
    {
      name: 'categories',
      label: 'Categories',
      type: 'relationship',
      relationTo: 'categories',
      hasMany: true,
      admin: {
        position: 'sidebar',
      },
    },
  ],
};

export default Product;