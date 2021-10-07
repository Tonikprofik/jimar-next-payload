import React from "react";
import { Block } from "payload/types";
import RichText from "../../components/RichText";
import RedUnderline from '../../components/RichText/leaves/RedUnderline';
import classes from "./index.module.css";
import backgroundColor, {
  Type as backgroundColorType,
} from "../../fields/backgroundColor";

export type Type = {
  blockType: "content";
  blockName?: string;
  content: unknown;
};

export const Content: Block = {
  slug: "content",
  labels: {
    singular: "Content",
    plural: "Content Blocks",
  },
  fields: [
    backgroundColor,
    {
      name: "columns",
      type: "array",
      minRows: 1,
      labels: {
        singular: "Column",
        plural: "Columns",
      },
      fields: [
        {
          type: "row",
          fields: [
            {
              name: "width",
              label: "Column Width",
              defaultValue: "full",
              required: true,
              type: "select",
              options: [
                {
                  label: "One Third",
                  value: "oneThird",
                },
                {
                  label: "Half",
                  value: "half",
                },
                {
                  label: "2 Thirds",
                  value: "twoThirds",
                },
                {
                  label: "Full Width",
                  value: "fullWidth",
                },
              ],
              admin: {
                width: "50%",
              },
            },

            {
              name: "alignment",
              label: "Alignment",
              type: "select",
              defaultValue: "left",
              required: true,
              options: [
                {
                  label: "Left",
                  value: "left",
                },
                {
                  label: "Center",
                  value: "center",
                },
                {
                  label: "Right",
                  value: "right",
                },
              ],
              admin: {
                width: "50%",
              },
            },
          ],
        },

        {
          name: "content",
          type: "richText",
          required: true,
          admin: {
            leaves: [RedUnderline],
            elements: [
              "h2",
              "h3",
              "h4",
              "h5",
              "ul",
              "ol",
              "link",
              //HR,
            ],
          },
        },
      ],
    },

    {
      name: "accentLine",
      label: "Enable Accent Line",
      type: "checkbox",
      defaultValue: false,
    },
    {
      name: "accentLineAlignment",
      label: "Accent Line Alignment",
      type: "radio",
      defaultValue: "left",
      options: [
        {
          label: "Left",
          value: "left",
        },
        {
          label: "Right",
          value: "right",
        },
      ],
      admin: {
        condition: (_, siblingData) => Boolean(siblingData.accentLine),
        layout: "horizontal",
      },
    },
    {
      type: "row",
      fields: [
        {
          name: "paddingTop",
          label: "Padding Top",
          type: "select",
          defaultValue: "medium",
          options: [
            {
              label: "None",
              value: "none",
            },
            {
              label: "Small",
              value: "small",
            },
            {
              label: "Medium",
              value: "medium",
            },
            {
              label: "Large",
              value: "large",
            },
          ],
          admin: {
            width: "50%",
          },
        },
        {
          name: "paddingBottom",
          label: "Padding Bottom",
          type: "select",
          defaultValue: "medium",
          options: [
            {
              label: "None",
              value: "none",
            },
            {
              label: "Small",
              value: "small",
            },
            {
              label: "Medium",
              value: "medium",
            },
            {
              label: "Large",
              value: "large",
            },
          ],
          admin: {
            width: "50%",
          },
        },
      ],
    },
  ],
};

export const Component: React.FC<Type> = (props) => {
  const { content } = props;

  return (
    <div className={classes.wrap}>
      <RichText content={content} className={classes.content} />
    </div>
  );
};

export default Content;
