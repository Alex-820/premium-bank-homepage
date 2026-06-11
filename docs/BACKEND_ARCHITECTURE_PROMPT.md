Act as a senior banking systems architect, enterprise backend architect, financial technology strategist, cybersecurity 
architect, cloud infrastructure engineer, compliance-aware product architect, database architect, and technical documentation 
lead.
I am building “[BANK NAME]”, a premium regulated U.S. bank-style digital banking platform. I need a complete backend 
architecture plan that feels serious, institutional, secure, scalable, and enterprise-grade — comparable in quality, depth, 
structure, and seriousness to the kind of backend planning expected from major financial institutions such as J.P. Morgan Chase, 
Citi, Bank of America, HSBC, and Wells Fargo.
Important: Do not copy any existing bank’s architecture, wording, proprietary systems, internal structure, product naming, or 
documentation style. Use major banks only as a quality benchmark for maturity, security, reliability, risk control, compliance 
awareness, operational depth, and enterprise architecture discipline.
This should not feel like a small fintech backend or basic startup API. It should feel like the backend architecture foundation 
of a national-scale banking institution.
Project goal: Create a backend architecture plan for a premium U.S. banking platform that supports:
* Personal banking
* Business banking
* Wealth management
* Investment services
* Lending products
* Credit cards
* Digital banking
* Customer onboarding
* Secure authentication
* Customer dashboard
* Account management
* Transaction history
* Transfers
* Bill pay
* Card controls
* Support tickets
* Fraud reporting
* Admin operations
* Compliance review
* Audit logging
* Rates and offers content
* Financial insights content
* Digital assets and crypto investment as a separate high-risk, compliance-controlled investment category
Architecture standard: The architecture must be:
* Modular
* Secure by default
* Compliance-aware
* Scalable
* Auditable
* Cloud-ready
* API-first
* Role-based
* Event-aware
* Integration-ready
* Maintainable
* Production-minded
* Enterprise-grade
Technology stack assumption:
* Next.js App Router API routes or Node.js backend
* TypeScript
* MongoDB with Mongoose
* REST API architecture
* Optional future microservices
* JWT or secure session-based authentication
* HTTP-only cookies
* bcrypt password hashing
* Cloud deployment readiness
* Environment variable configuration
* Audit logging
* Role-based access control
* Admin dashboard support
Now create a complete backend architecture planning document with the following sections:

1. Executive Architecture Summary
Explain the backend vision for [BANK NAME].
Describe the system as a secure digital banking backend designed to support customers, businesses, private clients, advisors, 
support agents, compliance officers, and administrators.
Make it clear that the architecture is a prototype foundation and that real banking functions such as deposits, ACH, wires, card 
issuing, brokerage, custody, KYC/AML, lending decisions, and crypto custody require licensed partners and regulatory approval.

2. Business Capability Map
Create a business capability map showing the major backend domains:
1. Identity and Access Management
2. Customer Onboarding
3. Customer Profile Management
4. Personal Banking
5. Business Banking
6. Account Management
7. Transaction and Ledger System
8. Transfers and Payments
9. Bill Pay
10. Card Services
11. Loans and Credit
12. Wealth Management
13. Investment Services
14. Digital Assets and Crypto Investment
15. Security Center
16. Fraud and Risk Monitoring
17. Support and Case Management
18. Admin and Operations
19. Compliance Review
20. Audit Logging
21. Content Management
22. Notifications and Alerts
For each capability, explain:
* Purpose
* Main users
* Main backend responsibilities
* Key data entities
* Risk or compliance considerations
* Future third-party integrations

3. System Architecture Overview
Describe the backend architecture using clear layers:
1. Presentation Layer
* Frontend website
* Customer dashboard
* Admin dashboard
* Mobile app future placeholder
2. API Layer
* Public APIs
* Auth APIs
* Customer APIs
* Admin APIs
* Content APIs
* Internal service APIs
3. Business Logic Layer
* Account services
* Transfer services
* Customer services
* Risk services
* Support services
* Wealth services
* Digital asset eligibility services
4. Data Layer
* MongoDB database
* Mongoose models
* Audit log collections
* Security event collections
* Content collections
5. Integration Layer
* KYC/AML provider placeholder
* Core banking provider placeholder
* ACH/wire provider placeholder
* Card issuing processor placeholder
* Credit bureau placeholder
* Loan underwriting provider placeholder
* Brokerage/custody provider placeholder
* Crypto custody provider placeholder
* Email/SMS provider placeholder
* Monitoring/logging provider placeholder
6. Security and Compliance Layer
* Authentication
* Authorization
* Encryption
* Audit logs
* Rate limiting
* Fraud monitoring
* Data masking
* Secure session management

4. Recommended File and Folder Structure
Design a professional backend folder structure.
Use this format:
/app /api /auth /customers /accounts /transactions /transfers /bill-pay /cards /loans /wealth /investments /digital-assets /support /security /content /admin
/lib db.ts auth.ts sessions.ts cookies.ts permissions.ts validators.ts audit.ts errors.ts security.ts rateLimit.ts accountMasking.ts risk.ts notifications.ts
/models User.ts CustomerProfile.ts BusinessProfile.ts BankAccount.ts Transaction.ts Transfer.ts Payee.ts BillPayment.ts Card.ts LoanApplication.ts WealthProfile.ts InvestmentAccount.ts DigitalAssetProfile.ts SupportTicket.ts FraudReport.ts SecurityEvent.ts AuditLog.ts RateOffer.ts InsightArticle.ts
/types auth.ts roles.ts banking.ts accounts.ts transactions.ts admin.ts compliance.ts
/middleware.ts
/config env.ts constants.ts
/docs backend-architecture.md api-map.md security-model.md compliance-notes.md
Explain why this folder structure is suitable for a serious banking platform.

5. Domain Model Planning
Create a full domain model plan for:
* User
* CustomerProfile
* BusinessProfile
* BankAccount
* Transaction
* Transfer
* Payee
* BillPayment
* Card
* LoanApplication
* WealthProfile
* InvestmentAccount
* DigitalAssetProfile
* SupportTicket
* FraudReport
* SecurityEvent
* AuditLog
* RateOffer
* InsightArticle
For each model, provide:
* Purpose
* Key fields
* Sensitive fields
* Fields that must be masked
* Status values
* Relationships to other models
* Audit requirements
* Compliance notes
Important: Include clear warnings that real SSN, tax ID, full account numbers, full card numbers, and sensitive identity 
documents must never be stored in plain text.

6. Authentication and Identity Architecture
Plan a serious identity system with:
* Customer registration
* Email verification
* Login
* Logout
* Secure session management
* HTTP-only cookies
* Password hashing
* Account lockout after failed attempts
* Password reset flow
* Login history
* Device history placeholder
* Multi-factor authentication placeholder
* Role-based access control
* Admin login separation
* Session expiration
* Security event logging
User roles:
* CUSTOMER
* BUSINESS_CUSTOMER
* PRIVATE_CLIENT
* ADVISOR
* SUPPORT_AGENT
* COMPLIANCE_OFFICER
* OPERATIONS_MANAGER
* ADMIN
* SUPER_ADMIN
User statuses:
* PENDING_VERIFICATION
* ACTIVE
* RESTRICTED
* SUSPENDED
* CLOSED
Explain:
* How authentication should work
* How roles should work
* How protected routes should work
* How admin access should be separated
* What events should be logged
* What security risks must be avoided

7. Customer Onboarding and KYC Architecture
Plan a customer onboarding system with:
* Personal profile creation
* Business profile creation
* Private banking profile placeholder
* Identity verification placeholder
* Address verification placeholder
* Business verification placeholder
* Beneficial ownership placeholder
* KYC status workflow
* Compliance officer review workflow
* Rejection and resubmission workflow
KYC statuses:
* NOT_STARTED
* IN_PROGRESS
* PENDING_REVIEW
* VERIFIED
* REJECTED
* EXPIRED
Explain where licensed KYC/AML provider integration would be required.

8. Account Management Architecture
Plan banking account architecture for:
* Checking accounts
* Savings accounts
* Premium checking
* High-yield savings
* Business checking
* Money market placeholder
* Private banking accounts placeholder
For each account type, include:
* Account owner
* Account type
* Masked account number
* Routing number placeholder
* Available balance
* Ledger balance
* Currency
* Status
* Created date
* Closed date placeholder
Account statuses:
* PENDING
* ACTIVE
* FROZEN
* RESTRICTED
* CLOSED
Important: Full account numbers must not be exposed through APIs. Create a masking strategy.

9. Transaction and Ledger Architecture
Design a ledger-inspired transaction system.
Include:
* Transaction records
* Debit and credit direction
* Pending vs posted transactions
* Reversals
* Adjustments
* Fees
* Interest
* Transaction references
* Metadata
* Audit trail
Transaction types:
* DEPOSIT
* WITHDRAWAL
* TRANSFER
* CARD_PAYMENT
* BILL_PAYMENT
* LOAN_PAYMENT
* INTEREST
* FEE
* REFUND
* ADJUSTMENT
Transaction statuses:
* PENDING
* PROCESSING
* POSTED
* FAILED
* REVERSED
* FLAGGED
Explain the difference between:
* Available balance
* Ledger balance
* Pending transaction
* Posted transaction
* Reversal
* Adjustment
Important: Do not fake real banking settlement. Explain where core banking, ACH, wire, and payment rail integrations would be 
required.

10. Transfers and Payments Architecture
Plan APIs and backend logic for:
* Own-account transfers
* Internal customer-to-customer transfer placeholder
* External transfer placeholder
* Scheduled transfer placeholder
* Transfer limits
* Fraud/risk checks
* Transfer status tracking
* Transfer confirmation
Explain validation rules:
* Customer must own the source account
* Source account must be active
* Destination account must be valid
* Available balance must be sufficient
* Amount must be positive
* Transfer must respect limits
* Suspicious transfer should be flagged
* Every attempt must be audit logged

11. Bill Pay Architecture
Plan backend structure for:
* Payee creation
* Payee verification placeholder
* Bill payment scheduling
* Payment status tracking
* Payment history
* Payment cancellation
Payment statuses:
* SCHEDULED
* PROCESSING
* PAID
* FAILED
* CANCELED
Explain where bill payment provider integration would be required.

12. Card Services Architecture
Plan architecture for:
* Debit cards
* Credit cards
* Business cards
* Card status management
* Lock/unlock controls
* Spending limits placeholder
* Card transaction history placeholder
* Lost/stolen card flow
Card statuses:
* ACTIVE
* LOCKED
* LOST
* STOLEN
* EXPIRED
* CLOSED
Important: Never store full card numbers. Use tokenized card references only. Explain where a card issuing processor would be 
required.

13. Lending Architecture
Plan backend structure for:
* Mortgage applications
* Auto loan applications
* Personal loan applications
* Business loan applications
* Commercial lending applications
* Application status workflow
* Document upload placeholder
* Credit bureau placeholder
* Underwriting placeholder
* Approval review workflow
* Repayment schedule placeholder
Loan statuses:
* DRAFT
* SUBMITTED
* UNDER_REVIEW
* APPROVED
* DECLINED
* FUNDED
* CLOSED
Important: Do not create fake approval logic. Explain where credit bureaus, underwriting systems, loan origination systems, and 
compliance review are required.

14. Wealth and Investment Architecture
Plan architecture for:
* Wealth profiles
* Investment profiles
* Risk tolerance questionnaire
* Advisory requests
* Advisor assignment
* Investment accounts
* Portfolio holdings placeholder
* Retirement accounts placeholder
* Trust and estate service requests
* Tax-aware planning requests
* High-net-worth client workflows
Investment categories:
* Investment Accounts
* Stocks & ETFs
* Bonds & Treasury Bills
* Retirement Accounts
* Robo-Advisor
* Human Financial Advisors
* Portfolio Management
* Trust & Estate Services
* Tax-Aware Planning
* High-Net-Worth Wealth Management
Important: Explain where brokerage, custody, RIA, securities trading, advisor compliance, and investment reporting integrations 
would be required. Do not simulate live securities trading.

15. Digital Assets and Crypto Investment Architecture
Create a separate high-risk digital assets architecture.
This module must feel institutional and risk-controlled, not crypto-hype-driven.
Plan:
* Digital asset profile
* Eligibility status
* Risk disclosure acceptance
* Suitability questionnaire placeholder
* Crypto investment interest form
* Digital asset account placeholder
* Custody provider placeholder
* Compliance review status
* Admin approval workflow
* Restricted access logic
* Digital asset risk event logging
Digital asset statuses:
* NOT_ELIGIBLE
* PENDING_DISCLOSURE
* DISCLOSURE_ACCEPTED
* PENDING_REVIEW
* ELIGIBLE
* RESTRICTED
The digital asset module must clearly state:
* Digital assets are highly speculative
* Digital assets may lose value
* Digital assets are not bank deposits
* Digital assets are not guaranteed by [BANK NAME]
* Digital assets may not be FDIC-insured or protected by any government agency
* Access may be limited to eligible clients
* Availability depends on legal, regulatory, custody, and compliance review
Explain:
* Why digital assets must be separated from normal banking products
* What disclosures are required before access
* How eligibility should work
* How admin/compliance review should work
* Where crypto custody and transaction providers would be required
* Why the system should not present crypto as risk-free or guaranteed

16. Security and Fraud Architecture
Plan security systems for:
* Login event monitoring
* Failed login detection
* Account lockout
* Fraud report submission
* Suspicious transaction placeholder
* Account alerts
* Identity protection resources
* Secure message center placeholder
* Device history placeholder
* Security center content
Security event types:
* LOGIN_SUCCESS
* LOGIN_FAILED
* PASSWORD_CHANGED
* ACCOUNT_LOCKED
* TRANSFER_CREATED
* CARD_LOCKED
* FRAUD_REPORTED
* PROFILE_UPDATED
* KYC_STATUS_CHANGED
* DIGITAL_ASSET_DISCLOSURE_ACCEPTED
Explain how security events should be logged and reviewed.

17. Support and Case Management Architecture
Plan backend for:
* Support tickets
* Fraud reports
* Appointment scheduling
* Secure messages placeholder
* Help center content
* Branch and ATM locator placeholder
Ticket statuses:
* OPEN
* IN_PROGRESS
* WAITING_FOR_CUSTOMER
* RESOLVED
* CLOSED
Support categories:
* Account Help
* Online Banking
* Cards
* Loans
* Business Banking
* Wealth
* Digital Assets
* Fraud
* Security
* General
Explain how support agents and admin users should access and manage cases.

18. Admin and Operations Architecture
Plan a secure admin architecture.
Admin modules:
* Customer management
* Business profile review
* Account review
* Transaction monitoring
* KYC review
* Fraud review
* Support ticket management
* Loan review
* Wealth request review
* Digital asset eligibility review
* Rates and offers management
* Insights content management
* Audit logs
* Security event logs
Admin roles:
* SUPPORT_AGENT
* COMPLIANCE_OFFICER
* OPERATIONS_MANAGER
* ADMIN
* SUPER_ADMIN
Explain:
* Which roles can access which modules
* Which actions must be restricted
* Which actions require audit logging
* Why admin access should be separated from customer access

19. API Architecture Plan
Create a REST-style API map.
Include these groups:
Auth:
* POST /api/auth/register
* POST /api/auth/login
* POST /api/auth/logout
* GET /api/auth/me
* POST /api/auth/verify-email
* POST /api/auth/forgot-password
* POST /api/auth/reset-password
Customers:
* GET /api/customer/profile
* PATCH /api/customer/profile
* GET /api/customer/security-events
Accounts:
* GET /api/accounts
* GET /api/accounts/[id]
* POST /api/accounts/request
* GET /api/accounts/[id]/transactions
Transfers:
* POST /api/transfers
* GET /api/transfers
* GET /api/transfers/[id]
Bill Pay:
* POST /api/payees
* GET /api/payees
* POST /api/bill-payments
* GET /api/bill-payments
Cards:
* GET /api/cards
* PATCH /api/cards/[id]/lock
* PATCH /api/cards/[id]/unlock
Loans:
* POST /api/loans/apply
* GET /api/loans
* GET /api/loans/[id]
Wealth:
* GET /api/wealth/profile
* PATCH /api/wealth/profile
* POST /api/wealth/advisory-request
* GET /api/wealth/investment-accounts
Digital Assets:
* GET /api/digital-assets/profile
* POST /api/digital-assets/accept-disclosure
* POST /api/digital-assets/interest-form
Support:
* POST /api/support/tickets
* GET /api/support/tickets
* POST /api/support/fraud-report
* POST /api/support/appointments
Content:
* GET /api/content/rates-offers
* GET /api/content/insights
* GET /api/content/insights/[slug]
Admin:
* GET /api/admin/customers
* GET /api/admin/accounts
* GET /api/admin/transactions
* GET /api/admin/audit-logs
* GET /api/admin/security-events
* GET /api/admin/support-tickets
* PATCH /api/admin/support-tickets/[id]
* PATCH /api/admin/kyc/[customerId]
* PATCH /api/admin/loans/[loanId]
* PATCH /api/admin/digital-assets/[customerId]
* POST /api/admin/rates-offers
* PATCH /api/admin/rates-offers/[id]
* POST /api/admin/insights
* PATCH /api/admin/insights/[id]
For each API group, explain:
* Purpose
* Authentication requirement
* Role requirement
* Sensitive actions
* Audit logging requirement
* Risk considerations

20. Compliance and Risk Planning
Create a compliance-aware architecture section.
Cover:
* KYC placeholder
* AML placeholder
* Sanctions screening placeholder
* Customer risk profile
* Business verification
* Beneficial ownership
* Lending compliance
* Investment suitability
* Digital asset eligibility
* Disclosure acceptance
* Audit logs
* Data protection
* Record retention placeholder
Explain that real compliance must be reviewed by legal and licensed financial compliance professionals.

21. Audit Logging Architecture
Plan an audit logging system.
Audit log fields:
* Actor ID
* Actor role
* Action type
* Entity type
* Entity ID
* IP address placeholder
* User agent placeholder
* Timestamp
* Metadata
* Risk level
Sensitive actions to audit:
* Registration
* Login
* Failed login
* Logout
* Password change
* Profile update
* Account creation
* Transfer attempt
* Transfer completion
* Card lock/unlock
* Loan application update
* KYC status change
* Digital asset disclosure acceptance
* Admin review
* Fraud report creation
* Support ticket update
Explain why audit logging is critical in a banking platform.

22. Data Security Planning
Plan data security controls:
* Password hashing
* Data masking
* No plaintext SSN
* No full card storage
* No full account number exposure
* Secure cookies
* SameSite cookie settings
* Rate limiting
* Input validation
* Output sanitization
* Environment variables
* Secrets management
* Encryption-at-rest placeholder
* Encryption-in-transit
* Access control
* Principle of least privilege

23. Infrastructure Planning
Plan a cloud-ready infrastructure.
Include:
* Application hosting
* Database hosting
* Environment variables
* Logging
* Monitoring
* Error tracking
* Backups
* Deployment pipeline
* Domain and SSL
* WAF placeholder
* CDN placeholder
* Rate limiting layer
* Secrets manager placeholder
* Disaster recovery placeholder
Explain possible deployment stages:
1. Local development
2. Staging environment
3. Production environment
4. Compliance-reviewed production environment

24. Development Roadmap
Create a phased backend roadmap.
Phase 1: Foundation
* Database connection
* Models
* Auth
* Sessions
* RBAC
* Audit logging
Phase 2: Customer and Account System
* Customer profiles
* Account models
* Account APIs
* Transaction history
Phase 3: Transfers and Payments
* Internal transfer logic
* Transfer logs
* Bill pay placeholders
* Risk checks
Phase 4: Cards, Loans, and Support
* Card controls
* Loan applications
* Support tickets
* Fraud reports
Phase 5: Wealth and Digital Assets
* Wealth profile
* Investment account placeholders
* Digital asset disclosure
* Suitability placeholder
* Compliance review workflow
Phase 6: Admin and Operations
* Admin dashboard APIs
* KYC review
* Fraud review
* Audit logs
* Content management
Phase 7: Hardening and Deployment
* Rate limiting
* Monitoring
* Security testing
* Error handling
* Backups
* Deployment
For each phase, include:
* Goal
* Backend tasks
* Models needed
* APIs needed
* Security considerations
* Testing checklist

25. Final Deliverable Format
Return the answer as a professional backend architecture planning document with:
* Executive summary
* Architecture overview
* Domain map
* File structure
* Data model plan
* API map
* Security architecture
* Compliance notes
* Audit logging plan
* Admin operations plan
* Digital asset risk-controlled architecture
* Infrastructure plan
* Development roadmap
* MVP scope
* Future enterprise expansion plan
The tone should be serious, technical, strategic, and enterprise-grade.
The final result should feel like the backend planning document for a premium regulated U.S. bank-style platform, not a basic 
fintech demo.

