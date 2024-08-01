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
    versionKey: false,
    timestamps: true,
  }
);

groupSchema.set("toJSON", {
  transform: (doc, ret) => {
    ret.profile = ret.title.chartAt(0).toUpperCase();
    return ret;
  },
});

const groupModel = models("groups", groupSchema);

export default groupModel;
