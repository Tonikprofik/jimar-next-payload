import { CollectionConfig } from "payload/types";
import slug from "../fields/slug";

export type Type = {
    title: string
    slug: string
}

const Category: CollectionConfig = {
  slug: "categories",
  admin: {
    useAsTitle: "title",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "Name",
      label: "Category Name",
      type: "text",
      required: true,
    },

    slug,
  ],
};

export default Category;
