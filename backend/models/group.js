import { models, Schema } from "mongoose";

const groupSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
  },
  {
    _id: "id",
  }
);

groupSchema.set("toJSON", {
  transform: (doc, ret) => {
    delete ret.__v;
    return ret;
  },
});

const groupModel = models("groups", groupSchema);

export default groupModel;
