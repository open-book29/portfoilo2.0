"use server";

import React from "react";
import { getErrorMessage } from "@/lib/utils";
import { Resend } from "resend";
import { ContactFormEmail } from "@/email/ContactFormEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

const validateString = (value: unknown, maxLength: number) => {
  if (!value || typeof value !== "string" || value.length > maxLength) {
    return false;
  }
  return true;
};

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Failed to send message",
    };
  }
  let data

  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "anujmaurya704@gmail.com",
      subject: "Message from concat form",
      reply_to: senderEmail as string,
      text: message as string,
      react: React.createElement(ContactFormEmail, {message: message as string, senderEmail: senderEmail as string}) 
    });
  } catch (error: unknown) {
    return{
      error: getErrorMessage(error)
    }
  }

  return {
    data
  }

};
