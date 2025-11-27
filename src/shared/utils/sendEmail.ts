import nodemailer from "nodemailer";
import { Resend } from 'resend';
import { config } from "../../config/env.config";

const sendEmail = async (to: string, subject: string, html: string) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: config.smtp.user,
      pass: config.smtp.pass,
    },
  });

  return await transporter.sendMail({
    from: config.smtp.user,
    to: [],
    bcc: to,
    subject,
    html,
  });
};

const resend = new Resend(config.resend.apiKey);

export const sendEmailResend = async (to: string, subject: string, html: string) => {
  return resend.emails.send({
    from: "onboarding@resend.dev",
    to,
    subject,
    html,
  })
}

export default sendEmail;