import { SupportFormPage } from "@/components/support/SupportFormPage";
import { BANK_NAME } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Contact Support | ${BANK_NAME}`,
  description:
    "Contact Aster Bank support for account questions, digital banking, cards, lending, business banking, wealth, and security concerns."
};

export default function ContactSupportPage() {
  return (
    <SupportFormPage
      eyebrow="Contact Support"
      title="Contact the right support team through verified service channels."
      description="Use this secure support request page for account questions, digital banking help, card support, lending inquiries, business banking, wealth services, and general service needs."
      formTitle="Submit support request"
      formType="contact"
      notice={`${BANK_NAME} will never ask for your password, full card number, or one-time verification code through an unsolicited call, text, or email.`}
    />
  );
}
