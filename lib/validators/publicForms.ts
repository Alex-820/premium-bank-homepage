import { z } from "zod";

const nameField = z.string().trim().min(2).max(80);
const emailField = z.string().trim().email().max(160);
const phoneField = z.string().trim().min(7).max(40);
const messageField = z.string().trim().min(10).max(5000);

export const accountOpeningSchema = z.object({
  relationshipType: z.enum([
    "Personal Banking",
    "Business Banking",
    "Wealth Management",
    "Investment Account",
    "Lending Inquiry"
  ]),
  firstName: nameField,
  lastName: nameField,
  email: emailField,
  phone: phoneField,
  acknowledgement: z.boolean().optional()
});

export const enrollmentSchema = z.object({
  accountType: z.enum([
    "Personal account",
    "Business account",
    "Credit card account",
    "Loan account",
    "Wealth or investment relationship"
  ]),
  customerIdentifier: z.string().trim().min(3).max(120),
  email: emailField,
  phone: phoneField,
  enrollmentAcknowledgement: z.boolean().optional()
});

export const supportTicketSchema = z.object({
  topic: z.string().trim().min(2).max(120),
  firstName: nameField,
  lastName: nameField,
  email: emailField,
  phone: phoneField,
  message: messageField
});

export const fraudReportSchema = z.object({
  fraudType: z.string().trim().min(2).max(160),
  firstName: nameField,
  lastName: nameField,
  email: emailField,
  phone: phoneField,
  message: messageField
});

export const appointmentRequestSchema = z.object({
  appointmentType: z.string().trim().min(2).max(160),
  firstName: nameField,
  lastName: nameField,
  email: emailField,
  phone: phoneField,
  preferredDate: z.string().trim().optional().or(z.literal("")),
  preferredLocation: z.string().trim().max(160).optional(),
  message: z.string().trim().max(5000).optional()
});
