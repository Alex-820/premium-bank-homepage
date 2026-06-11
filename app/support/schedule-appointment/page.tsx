import { SupportFormPage } from "@/components/support/SupportFormPage";
import { BANK_NAME } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Schedule an Appointment | ${BANK_NAME}`,
  description:
    "Schedule a banking appointment for personal banking, business banking, lending, wealth, digital banking support, or service needs."
};

export default function ScheduleAppointmentPage() {
  return (
    <SupportFormPage
      eyebrow="Schedule Appointment"
      title="Schedule time for banking conversations that need more attention."
      description="Request an appointment for personal banking, business banking, lending, wealth services, digital banking support, or account service needs."
      formTitle="Request appointment"
      formType="appointment"
      notice="Appointments are subject to availability, verification, service type, location, and required documentation."
    />
  );
}
