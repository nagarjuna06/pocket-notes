import { models, Schema } from "mongoose";

const noteSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    groupId: {
      type: Schema.Types.ObjectId,
      ref: "groups",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    _id: "id",
  }
);

noteSchema.set("toJSON", {
  transform: (doc, ret) => {
    delete ret.__v;
    return ret;
  },
});

const noteModel = models("notes", noteSchema);

export default noteModel;
