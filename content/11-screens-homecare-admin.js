/*
 * Screen by screen — the home-care nurse dashboard and the NessaHub admin console.
 * Same block format as content/01-start.js.
 */
window.GUIDE = window.GUIDE || { chapters: [] };

window.GUIDE.chapters.push(
  {
    id: "nurse-screens",
    group: "Screen by screen",
    icon: "home",
    title: "Home-care nurse dashboard, screen by screen",
    tagline: "Going online, taking bookings and emergencies, running a visit, and your account.",
    articles: [
      {
        id: "hc-dashboard",
        title: "Dashboard",
        summary: "Go online, see today's visits and jump to requests, emergencies and ongoing care.",
        keywords: "nurse dashboard go online offline today's visits completed pending requests availability",
        body: [
          ["ul", [
            "**Go online** to appear to patients and receive requests. You cannot go offline while you are on an active booking — finish the visit first.",
            "**Completed visits** and **pending requests** counts.",
            "**Quick actions**: review and accept bookings, emergency requests, ongoing engagements, and availability.",
            "**Today's visits** — open each one, with its service location."
          ]],
          ["h", "Example"],
          ["p", "Nurse Akosua starts her day at 7 am, taps **Go online**, and sees one visit today in Dansoman and two new requests waiting."]
        ]
      },
      {
        id: "hc-bookings",
        title: "Bookings: Requests, Emergency and Ongoing",
        summary: "Accept or decline requests, claim emergencies, and keep packages of care going.",
        keywords: "bookings requests accept decline emergency broadcast claim ongoing package weekly monthly visit log",
        body: [
          ["ul", [
            "**Requests** — patients who booked you. **Accept** or **Decline**.",
            "**Emergency** — urgent requests broadcast to nearby nurses. The **first nurse to claim** one gets the visit.",
            "**Ongoing** — weekly, monthly or yearly care packages in progress. **Mark ongoing**, and **submit a visit log** after each visit."
          ]],
          ["h", "Example"],
          ["p", "An emergency request appears: an elderly man in Achimota needs a wound dressed today. Akosua is 2 km away, taps **Claim request**, and the visit is hers."]
        ]
      },
      {
        id: "hc-visit",
        title: "Active visit",
        summary: "Travel to the patient, give care, and record what you did.",
        keywords: "active visit en route arrived start care vitals care provided concerns incident call patient",
        body: [
          ["steps", [
            "**Call patient** if you need directions.",
            "**Mark en route** when you leave — the patient follows you live — then **Mark arrived**.",
            "**Start Care**.",
            "Record the visit: date, **care provided**, vitals (temperature, blood pressure, pulse), **concerns**, and any **incident to flag**.",
            "Submit. The patient gets a visit summary and can leave feedback."
          ]],
          ["h", "Example"],
          ["p", "Akosua marks en route, arrives, cleans and dresses the wound, records a temperature of 37.8 °C and writes the concern “mild redness — review in 2 days”. The family reads the summary in their app."]
        ]
      },
      {
        id: "hc-account",
        title: "Account: Profile, Availability, Documents and Earnings",
        summary: "What patients see about you, when you work, your verification and what you have earned.",
        keywords: "nurse account profile photo specialty fees availability working days documents licence ghana card earnings log",
        body: [
          ["ul", [
            "**Profile** — photo, specialty, years of experience, phone, licence number, languages, service location (GPS) and your **fees** (daily, weekly, monthly, yearly).",
            "**Availability** — your working days and hours. Patients see your working days when booking.",
            "**Documents** — your licence and Ghana Card used for verification.",
            "**Earnings** — a log you keep yourself (amount and note); payments are arranged directly with patients."
          ]],
          ["h", "Example"],
          ["p", "Akosua stops working Sundays. In Availability she unticks Sunday and saves; from then on patients cannot book her on Sundays."]
        ]
      }
    ]
  },
  {
    id: "admin-screens",
    group: "Screen by screen",
    icon: "settings",
    title: "Admin console, screen by screen",
    tagline: "For NessaHub super admins: people, approvals, money, onboarding, analytics, engagement and system settings.",
    articles: [
      {
        id: "ad-overview",
        title: "Overview, global search and the AI briefing",
        summary: "What needs you today across the whole platform.",
        keywords: "admin overview accounts to approve reports tickets patterns lab orders waiting sign-in health global search ask ai briefing",
        body: [
          ["ul", [
            "**Needs you** cards — accounts to approve, open reports and tickets, patterns to review, lab and scan orders waiting.",
            "**Appointment outcomes**, **sign-in health** (last 24 hours), daily **activity** (appointments, sessions, prescriptions, accounts), **people on NessaHub** and **recent activity**.",
            "**AI briefing** — each area marked Healthy, Keep an eye or Needs you, with suggested next steps. Check the figures before acting.",
            "**Global search** — find people, appointments, prescriptions, orders and reports, or **Ask AI** questions answered from live platform figures (read-only)."
          ]],
          ["h", "Example"],
          ["p", "The admin opens Overview: 4 accounts to approve and 1 urgent report. She asks the AI “how many lab orders are overdue?” — 7 — and opens them from search."]
        ]
      },
      {
        id: "ad-people",
        title: "User Management and Account Approvals",
        summary: "Find any user, act on their account, and approve providers before they go live.",
        keywords: "user management user detail suspend activate deactivate reset password account approvals approve reject providers documents",
        body: [
          ["ul", [
            "**User Management** — every user with name, contact, specialisation, licence, location, ID, joined date and status. Open one for the full profile: professional details, activity trail, security and devices, care records and raw data. Actions: **Edit profile**, **Reset password** (a one-time temporary password shown once to hand over securely), **Activate**, **Suspend**, **Deactivate**.",
            "**Account Approvals** — live queues of pharmacies, doctors, therapists, home-care nurses, lab and scan centres waiting for approval. View their bio and documents, then **Approve** or **Reject** with a reason (kept for compliance)."
          ]],
          ["h", "Example"],
          ["p", "A new lab centre signs up. The admin opens Approvals, checks its licence document, and approves it — it can now receive orders."]
        ]
      },
      {
        id: "ad-care",
        title: "Appointments, Patient Transfers, Prescription Monitor and SMS follow-up",
        summary: "Keep an eye on care across the platform.",
        keywords: "appointment monitor cancel restore complete transfers prescription monitor flagged duplicate sms follow-up",
        body: [
          ["ul", [
            "**Appointments** — doctor appointments, therapy sessions and home-care bookings together. Filter and search; open one to see notes and vitals; **Cancel**, **Restore** or **Mark completed**.",
            "**Patient Transfers** — every transfer between clinicians, with its timeline (see the doctor “Transfers” page).",
            "**Prescription Monitor** — all prescriptions, with **flags** for duplicates or risky prescriptions. Filter by doctor, status or flagged only.",
            "**SMS follow-up** — prescription requests sent by text. Nothing is ever prescribed from an SMS; a person contacts the patient."
          ]],
          ["h", "Example"],
          ["p", "The Prescription Monitor flags the same patient receiving two strong painkiller prescriptions from two doctors in one week. The admin alerts both doctors."]
        ]
      },
      {
        id: "ad-money",
        title: "Finance & Payouts, Insurers & Claims, Insurance & Claims",
        summary: "Payments, NessaHub's revenue, refunds, provider payouts, and insurance.",
        keywords: "finance payouts commission refunds paystack revenue insurers claims verification adapter",
        body: [
          ["ul", [
            "**Finance & Payouts** — payments by service, booking value, commission and fees, NessaHub revenue and net, tax collected, free first consultations; **refunds** (approve and refund through Paystack, record a manual refund, or decline with a reason); **monthly payouts** (prepare, approve or cancel) and providers' payout details (confirm changes). Rates are set in System Config.",
            "**Insurers & Claims** — insurers connected by API (adapter, credentials stored encrypted, test connection, logins), counter checks, provider codes, and claims you can act on for an insurer.",
            "**Insurance & Claims** — verify insurance cards patients submit, and move claims through submitted, approved, rejected and paid."
          ]],
          ["h", "Example"],
          ["p", "A patient asks for a refund after a doctor missed the call. The admin reads what the patient said, approves it, and the money goes back through Paystack; the doctor's next payout shows the adjustment."]
        ]
      },
      {
        id: "ad-onboarding",
        title: "Onboarding: applications, providers and profile completeness",
        summary: "Bring doctors, therapists, nurses, pharmacies, labs, scan centres and insurers onto NessaHub.",
        keywords: "provider applications pipeline stages onboard doctor therapist home-care nurse create pharmacy lab scan insurer credentials profile completeness home care manage",
        body: [
          ["ul", [
            "**Provider Applications** — people who applied on the application portal, in a pipeline of stages. Mark documents received and verified, move the application on (emailing the applicant), add internal notes, then **open the onboarding form** pre-filled and record the account created.",
            "**Onboard Doctor / Therapist / Home-Care Nurse**, **Create Pharmacy**, **Create Lab / Scan**, **Onboard Insurer** — fill in the details (licence, location, fees, for therapists the kinds of clients and areas of focus used for matching). A temporary password is generated and shown once; they must change it at first sign-in.",
            "**Profile Completeness** — clinicians whose profiles are missing something, with **Fix profile**.",
            "**Home Care Manage** — nurses (verify documents, account status, fees), all bookings with visit reports, and complaints."
          ]],
          ["h", "Example"],
          ["p", "A psychologist's application reaches “Verified”. The admin opens the onboarding form, ticks anxiety and trauma as areas of focus, creates the account and copies the credentials to send her securely."]
        ]
      },
      {
        id: "ad-analytics",
        title: "Analytics, reports, risk and audit",
        summary: "Numbers, exports, reports from users, patterns to review, and who did what.",
        keywords: "analytics reports pdf export reports feedback center formulary patterns to review activity monitor audit log",
        body: [
          ["ul", [
            "**Analytics & Reports** — registrations, appointments, prescriptions, home care, lab and scan orders, top prescribers, pharmacy network status, for 7, 30, 90 days or all time.",
            "**System PDF export** — a PDF report for a date range.",
            "**Reports & Feedback** — one queue for reports, support tickets and incidents from every role. Reply to the reporter and change the status; urgent ones are marked.",
            "**Formulary** — the medicines list prescriptions are checked against.",
            "**Patterns to review** — unusual patterns found automatically. **Dismiss** or **Confirm — needs action**, with your reasoning.",
            "**Activity monitor** — every action by every user (sign-ins, failed sign-ins, password events, denied attempts); health content is never recorded.",
            "**Audit Log** — the full trail on web and mobile."
          ]],
          ["h", "Example"],
          ["p", "Activity monitor shows 40 failed sign-ins on one account overnight. The admin suspends the account and contacts its owner to reset the password."]
        ]
      },
      {
        id: "ad-engagement-system",
        title: "Engagement and system settings",
        summary: "Notifications, message templates, promotions, the AI knowledge base, super admins and platform rules.",
        keywords: "notifications templates promo campaigns price promotions ai knowledge base super admins system config maintenance settings",
        body: [
          ["ul", [
            "**Notifications** — send an alert to everyone or one group (patients, doctors, therapists, pharmacies, labs), with type, priority and an optional link.",
            "**Message Templates** — edit the wording of every email and push message, preview and send a test.",
            "**Promo Campaigns** — promotional emails featuring providers; each featured provider must approve first.",
            "**Price Promotions** — discounts (percentage, fixed amount or flat price) for chosen people, services and dates, with promo codes. At most 70% off; providers named must consent.",
            "**AI Knowledge Base** — guidance the assistant draws on. New or edited entries are not used until approved; **Test retrieval** shows what a patient's question would find.",
            "**Super admins** — keep this list short. Add, reset password, sign out everywhere, suspend.",
            "**System Config** — platform rules enforced on web and mobile: maintenance mode, pausing sign-ups, appointments, prescriptions, notifications, sign-in security, payments and commission, refunds, payouts, provider onboarding, data retention and features.",
            "**Settings** — your own profile, email, password, two-step sign-in and devices."
          ]],
          ["h", "Example"],
          ["p", "Before an update, the admin turns on **maintenance mode** in System Config — only super admins can sign in — and sends a Maintenance notification to all users. Afterwards she turns it off."]
        ]
      }
    ]
  }
);
