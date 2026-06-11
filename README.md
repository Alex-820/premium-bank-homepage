# Premium Bank Homepage

A production-ready Next.js, TypeScript, and Tailwind CSS homepage concept for a premium regulated U.S. bank.

## What is included

- App Router homepage
- Utility navigation
- Main responsive navigation
- Institutional hero section
- Secure login panel
- Product category cards
- Personal banking section
- Business banking section
- Wealth and investments section
- Clearly separated high-risk crypto/digital assets category
- Security and trust section with careful disclosure language
- Digital banking section
- Advisory insights section
- Full serious bank footer
- Reusable components and centralized content in `lib/site.ts`

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Customize the bank name

Edit:

```ts
// lib/site.ts
export const BANK_NAME = "Aster Bank";
```

## Production note

This is a frontend implementation only. Before using it for a real financial institution, legal, compliance, information security, accessibility, privacy, banking, investment advisory, lending, and digital asset disclosures must be reviewed by qualified professionals.
