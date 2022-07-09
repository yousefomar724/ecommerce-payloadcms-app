import { CollectionConfig } from "payload/types";
import { MediaType } from "./Media";

export type ProductType = {
  productName: string;
  description: string;
  image: MediaType;
  price: number;
};

const Product: CollectionConfig = {
  slug: "products",
  access: {
    read: (): boolean => true, // Everyone can read Product
  },
  fields: [
    {
      name: "name",
      label: "Name",
      type: "text",
      required: true,
    },
    {
      name: "description",
      label: "description",
      type: "text",
      required: true,
    },
    {
      name: "price",
      label: "Price",
      type: "number",
      required: true,
    },
    {
      name: "image",
      label: "Image",
      type: "upload",
      relationTo: "media",
    },
  ],
};

export default Product;
