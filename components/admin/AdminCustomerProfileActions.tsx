"use client";

import { useState } from "react";

type CustomerProfileState = {
  customerNumber: string;
  relationshipType: string;
  onboardingStatus: string;
  kycStatus: string;
  riskTier: string;
  addressStatus: string;
};

type AdminCustomerProfileActionsProps = {
  userId: string;
  initialProfile: CustomerProfileState;
  accountCount: number;
};

const relationshipTypes = ["PERSONAL", "BUSINESS", "PRIVATE_CLIENT"];
const onboardingStatuses = ["PROFILE_CREATED", "PENDING_VERIFICATION", "UNDER_REVIEW", "VERIFIED", "RESTRICTED"];
const kycStatuses = ["NOT_STARTED", "IN_PROGRESS", "PENDING_REVIEW", "VERIFIED", "REJECTED", "EXPIRED"];
const riskTiers = ["UNASSIGNED", "LOW", "MEDIUM", "HIGH"];
const addressStatuses = ["NOT_PROVIDED", "PENDING_REVIEW", "VERIFIED", "REJECTED"];

export function AdminCustomerProfileActions({
  userId,
  initialProfile,
  accountCount
}: AdminCustomerProfileActionsProps) {
  const [profile, setProfile] = useState(initialProfile);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  function updateField(key: keyof CustomerProfileState, value: string) {
    setProfile((current) => ({
      ...current,
      [key]: value
    }));
  }

  async function saveProfile() {
    setLoading(true);
    setMessage("Saving customer profile review...");

    try {
      const response = await fetch(`/api/admin/customers/${userId}/profile`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          relationshipType: profile.relationshipType,
          onboardingStatus: profile.onboardingStatus,
          kycStatus: profile.kycStatus,
          riskTier: profile.riskTier,
          addressStatus: profile.addressStatus
        })
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data?.message || "Unable to update customer profile.");
        return;
      }

      setProfile((current) => ({
        ...current,
        ...data.profile
      }));

      setMessage("Customer profile updated.");
    } catch {
      setMessage("Network error while updating customer profile.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="border border-bank-line bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold tracking-[-0.02em] text-ink-950">
        Customer Profile Review
      </h2>

      <p className="mt-2 text-sm leading-7 text-bank-steel">
        Update customer onboarding, KYC status, risk tier, and address review status.
      </p>

      <div className="mt-5 grid gap-4">
        <div className="border border-bank-line bg-bank-mist p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-bank-steel">
            Customer Number
          </p>
          <p className="mt-1 text-sm font-semibold text-ink-950">
            {profile.customerNumber}
          </p>
        </div>

        <div className="border border-bank-line bg-bank-mist p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-bank-steel">
            Account Records
          </p>
          <p className="mt-1 text-sm font-semibold text-ink-950">
            {accountCount}
          </p>
        </div>

        <SelectField
          label="Relationship Type"
          value={profile.relationshipType}
          options={relationshipTypes}
          onChange={(value) => updateField("relationshipType", value)}
        />

        <SelectField
          label="Onboarding Status"
          value={profile.onboardingStatus}
          options={onboardingStatuses}
          onChange={(value) => updateField("onboardingStatus", value)}
        />

        <SelectField
          label="KYC Status"
          value={profile.kycStatus}
          options={kycStatuses}
          onChange={(value) => updateField("kycStatus", value)}
        />

        <SelectField
          label="Risk Tier"
          value={profile.riskTier}
          options={riskTiers}
          onChange={(value) => updateField("riskTier", value)}
        />

        <SelectField
          label="Address Status"
          value={profile.addressStatus}
          options={addressStatuses}
          onChange={(value) => updateField("addressStatus", value)}
        />

        <button
          type="button"
          onClick={saveProfile}
          disabled={loading}
          className="btn-primary h-11 w-full justify-center disabled:opacity-60"
        >
          {loading ? "Saving..." : "Save Customer Profile"}
        </button>

        {message && (
          <div className="border border-bank-line bg-bank-mist p-3 text-sm text-bank-steel">
            {message}
          </div>
        )}
      </div>
    </div>
  );
}

function SelectField({
  label,
  value,
  options,
  onChange
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <label className="text-sm font-semibold text-ink-950">
        {label}
      </label>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 h-11 w-full border border-bank-line bg-white px-3 text-sm outline-none transition focus:border-bank-blue"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
