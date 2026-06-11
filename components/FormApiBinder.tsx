"use client";

import { useEffect, useState } from "react";

type FormApiBinderProps = {
  formId: string;
  endpoint: string;
  fieldMap?: Record<string, string>;
};

type SubmitState = {
  status: "idle" | "loading" | "success" | "error";
  message: string;
};

export function FormApiBinder({ formId, endpoint, fieldMap = {} }: FormApiBinderProps) {
  const [state, setState] = useState<SubmitState>({
    status: "idle",
    message: ""
  });

  useEffect(() => {
    const formElement = document.getElementById(formId);

    if (!(formElement instanceof HTMLFormElement)) return;

    async function handleSubmit(event: SubmitEvent) {
      event.preventDefault();

      const form = event.currentTarget;

      if (!(form instanceof HTMLFormElement)) {
        setState({
          status: "error",
          message: "Form could not be submitted."
        });
        return;
      }

      setState({
        status: "loading",
        message: "Submitting request securely..."
      });

      const formData = new FormData(form);
      const payload: Record<string, unknown> = {};

      formData.forEach((value, key) => {
        const mappedKey = fieldMap[key] || key;

        if (value instanceof File) return;

        if (value === "on") {
          payload[mappedKey] = true;
        } else {
          payload[mappedKey] = String(value);
        }
      });

      try {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(payload)
        });

        const data = await response.json();

        if (!response.ok) {
          setState({
            status: "error",
            message: data?.message || "Request could not be submitted."
          });
          return;
        }

        form.reset();

        setState({
          status: "success",
          message: data?.message || "Request submitted successfully."
        });
      } catch {
        setState({
          status: "error",
          message: "Network error. Please try again."
        });
      }
    }

    formElement.addEventListener("submit", handleSubmit);

    return () => {
      formElement.removeEventListener("submit", handleSubmit);
    };
  }, [endpoint, fieldMap, formId]);

  if (state.status === "idle") return null;

  return (
    <div
      className={`mt-4 border p-4 text-sm leading-6 ${
        state.status === "success"
          ? "border-green-200 bg-green-50 text-green-900"
          : state.status === "error"
            ? "border-red-200 bg-red-50 text-red-900"
            : "border-bank-line bg-bank-mist text-bank-steel"
      }`}
    >
      {state.message}
    </div>
  );
}
