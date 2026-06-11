import mongoose, { Schema } from "mongoose";

const AdminNoteSchema = new Schema(
  {
    entityType: {
      type: String,
      required: true,
      index: true
    },
    entityId: {
      type: String,
      required: true,
      index: true
    },
    note: {
      type: String,
      required: true,
      maxlength: 5000
    },
    visibility: {
      type: String,
      enum: ["INTERNAL_ONLY", "CUSTOMER_VISIBLE"],
      default: "INTERNAL_ONLY"
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true
    }
  },
  { timestamps: true }
);

export const AdminNote =
  mongoose.models.AdminNote ||
  mongoose.model("AdminNote", AdminNoteSchema);
