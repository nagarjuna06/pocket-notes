import { model, Schema } from "mongoose";

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
    versionKey: false,
    timestamps: true,
  }
);

groupSchema.set("toJSON", {
  transform: (_, ret) => {
    const id = ret._id;
    const profile = ret.title
      .split(" ")
      .map((each) => each.charAt(0).toUpperCase())
      .join("");
    delete ret._id;
    return { id, profile: profile.slice(0, 2), ...ret };
  },
});

const groupModel = model("groups", groupSchema);

export default groupModel;
