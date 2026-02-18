import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { text } from 'stream/consumers';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

/*
const transporter = nodemailer.createTransport({
  service: 'gmail', // Or your email provider
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // Use an "App Password," not your login password
  },
});
*/

// 1. Configure the SMTP Transporter
const transporter = nodemailer.createTransport({
  host: "smtpout.secureserver.net", // Change this if using Outlook/AWS SES/etc.
  port: 465, // Use 465 for SSL or 587 for STARTTLS
  secure: true, // true for 465, false for 587
  auth: {
    user: "info@connectdev.pro",//process.env.SMTP_USER, // Your email address
    pass: "FDa4cwkkAd,rj%?",//process.env.SMTP_PASS, // Your App Password
    //user: process.env.SMTP_USER, // Your email address
    //pass: process.env.SMTP_PASS, // Your App Password
  },
});

app.post('/api/contact', async (req, res) => {
  const { name, email, phone, organization, subject, message, services } = req.body;

  // 2. SOFT VALIDATION: Handle optional fields for the email body
  // If phone or organization is null/undefined, we display "Not Provided"
  const safePhone = phone && phone.trim() !== "" ? phone : "Not Provided";
  const safeOrg = organization && organization.trim() !== "" ? organization : "Not Provided";
  
  // Handle services array safely
  const safeServices = Array.isArray(services) && services.length > 0 
    ? services.join(', ') 
    : "None Selected";
  
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `New Contact Form: ${subject}`,
    //text: `Name: ${name}\nEmail: ${email}\nServices: ${services.join(', ')}\n\nMessage:\n${message}`,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${safePhone}\nOrganization: ${safeOrg}\nServices: ${safeServices}\n\nMessage:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Success' });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    res.status(500).json({ message: 'Failed to send email' + ' > ' + process.env.SMTP_USER + ' > ' + errorMessage });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));