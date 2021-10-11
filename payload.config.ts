import { buildConfig } from 'payload/config';
import dotenv from 'dotenv';
import Page from './collections/Page';
import Media from './collections/Media';
import FormSubmission from './collections/FormSubmission';
import Product from './collections/Product';
import Category from './collections/Category';
import MegaMenu from './globals/MegaMenu';
dotenv.config();

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  collections: [
    Page,
    Media,
    Product,
    Category,
    FormSubmission
  ],
  globals: [
    MegaMenu,
  ],
});
