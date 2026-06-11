import { SupportFormPage } from "@/components/support/SupportFormPage";
import { BANK_NAME } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Report Fraud | ${BANK_NAME}`,
  description:
    "Report suspicious activity, unauthorized transactions, lost cards, identity concerns, and account security issues."
};

export default function ReportFraudPage() {
  return (
    <SupportFormPage
      eyebrow="Report Fraud"
      title="Report suspicious activity through a protected fraud intake workflow."
      description="Use this page to report unauthorized transactions, suspicious messages, lost or stolen cards, identity concerns, or possible account compromise through a verified bank channel."
      formTitle="Submit fraud report"
      formType="fraud"
      notice="If you suspect fraud, stop communicating with the suspected party immediately. Do not include passwords, full card numbers, or one-time verification codes in this form."
    />
  );
}
