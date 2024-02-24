"use server";

import React from "react";
import { Resend } from "resend";
import { z } from "zod";
import ContactFormEmail from "~/email/ContactFormEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * Schema For Create Topic
 */
const sendEmailFormState = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(10),
});

/**
 * FormState InterFace
 */
export interface SendEmailFormState {
  success?: {
    message: string;
  };
  errors: {
    email?: string[];
    message?: string[];
    _form?: string[];
  };
}

/**
 * Sends an email using the provided form state and form data.
 * @param {FormData} formData - the form data containing email and message
 * @return {Promise<SendEmailFormState>} a promise that resolves to the updated email form state
 */
export async function sendEmail(
  formData: FormData,
): Promise<SendEmailFormState> {
  try {
    const result = sendEmailFormState.safeParse({
      email: formData.get("email"),
      message: formData.get("message"),
    });

    // Return Errors if not Successful
    if (!result.success) {
      return { errors: result.error.flatten().fieldErrors };
    }

    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>'",
      to: "abdelrhiimabdelmoneim@outlook.com",
      subject: "Hello from Resend",
      reply_to: result.data.email,
      react: React.createElement(ContactFormEmail, {
        message: result.data.message,
        senderEmail: result.data.email,
      }),
    });
  } catch (e) {
    if (e instanceof Error) {
      return {
        errors: {
          _form: [e.message],
        },
      };
    }
    return {
      errors: {
        _form: ["Something Went Wrong"],
      },
    };
  }
  return {
    success: {
      message: "Email Sent Successfully",
    },
    errors: {},
  };
}
