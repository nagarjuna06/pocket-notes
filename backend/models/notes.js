import { model, Schema } from "mongoose";

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
    timestamps: true,
    versionKey: false,
  }
);

noteSchema.set("toJSON", {
  transform: (doc, ret) => {
    const edited = ret.createdAt.getTime() !== ret.updatedAt.getTime();
    const id = ret._id;
    delete ret._id;
    return { id, edited, ...ret };
  },
});

const noteModel = model("notes", noteSchema);

export default noteModel;
