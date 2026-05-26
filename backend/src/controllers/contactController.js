import Contact from "../models/Contact.js";
import transporter from "../config/mail.js";

export const submitContactForm = async (
  req,
  res
) => {
  try {
    const { name, email, phone, message } =
      req.body;

    // Validation
    if (!name || !email || !phone || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Create new contact
    const newContact = new Contact({
      name,
      email,
      phone,
      message,
    });

    // Save to database
    await newContact.save();

    res.status(201).json({
      success: true,
      message: "Form submitted successfully",
    });

    // Send email AFTER response
    transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "New Contact Form Submission",
      html: `
    <h2>New Contact Form Submission</h2>

    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Message:</strong> ${message}</p>
  `,
    });

    res.status(201).json({
      success: true,
      message: "Form submitted successfully",
    });
  } catch (error) {
    console.error("EMAIL ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};