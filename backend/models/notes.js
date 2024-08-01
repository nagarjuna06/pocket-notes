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
  },
  {
    _id: "id",
    timestamps: true,
    versionKey: false,
  }
);

noteSchema.set("toJSON", {
  transform: (doc, ret) => {
    ret.edited = ret.createdAt !== ret.updatedAt;
    return ret;
  },
});

const noteModel = models("notes", noteSchema);

export default noteModel;
