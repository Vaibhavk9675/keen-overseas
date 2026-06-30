import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      maxlength: 100,
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      lowercase: true,
      trim: true,
    },

    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
    },

    message: {
      type: String,
      default: "",
      trim: true,
    },

    source: {
      type: String,
      enum: ["Home", "Contact"],
      default: "Contact",
    },

    status: {
      type: String,
      enum: ["New", "Contacted", "Follow Up", "Converted"],
      default: "New",
    },

    preferredCountry: {
      type: String,
      default: "",
      trim: true,
    },

    preferredIntake: {
      type: String,
      default: "",
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Contact = mongoose.model("Contact", contactSchema);

export default Contact;