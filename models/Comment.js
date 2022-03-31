const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    content: {type: String, required: true},
    //на чьей странице находится коммент
    pageId: {type: Schema.Types.ObjectId, red: "User", required: true},
    //кто оставил коммент
    userId: {type: Schema.Types.ObjectId, red: "User", required: true},
  },
  {
    timestamps: {createdAt: "created_at"}
  }
);

module.exports = model("Comment", schema);
