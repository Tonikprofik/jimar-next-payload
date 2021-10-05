import { CollectionConfig } from "payload/types";
import slug from '../fields/slug';

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