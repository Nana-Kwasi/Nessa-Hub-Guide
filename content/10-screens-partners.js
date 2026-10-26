/*
 * Screen by screen — partner dashboards: pharmacies, labs and scan centres, insurers and
 * facilities. Same block format as content/01-start.js.
 */
window.GUIDE = window.GUIDE || { chapters: [] };

window.GUIDE.chapters.push(
  {
    id: "pharmacy-screens",
    group: "Screen by screen",
    icon: "pharmacy",
    title: "Pharmacy dashboards, screen by screen",
    tagline: "The pharmacy head office and each branch: prescriptions, open prescriptions, dispensing, transfers, claims and reports.",
    articles: [
      {
        id: "ph-two-levels",
        title: "Head office and branches",
        summary: "A pharmacy has one head-office account and a separate login for each branch.",
        keywords: "pharmacy head office branch login manage branches parent",
        body: [
          ["table", ["Account", "Who uses it", "What it is for"], [
            ["Head office (pharmacy)", "Owner or manager", "Sets up branches, sees every branch's prescriptions and reports, manages the formulary and settings."],
            ["Branch", "Staff at one branch", "Sees only prescriptions assigned to that branch, and dispenses them."]
          ]],
          ["h", "Manage Branches (head office)"],
          ["steps", [
            "Tap **+ New Branch**: name, login email, address (city, area, region, street, Ghana Digital Address) and contact number. The location is detected automatically.",
            "A username is generated, and a temporary password (yours or generated). The branch must change it at first sign-in.",
            "Click a branch to manage it later — status, password resets and details."
          ]],
          ["h", "Example"],
          ["p", "Good Health Pharmacy opens a third shop in Kasoa. The owner adds “Kasoa Branch” with its own email, gives the temporary password to the branch manager, and from the next day prescriptions routed to Kasoa appear only on that branch's dashboard."]
        ]
      },
      {
        id: "ph-overview",
        title: "Overview",
        summary: "What needs action now and how each branch is doing.",
        keywords: "pharmacy overview incoming pickup overdue needs review stuck kpi attention queue",
        body: [
          ["ul", [
            "**At a glance** — incoming, active and completed prescriptions, last 7 days against the week before.",
            "**Attention queue** — **Incoming**, **Pickup overdue**, **Needs review** and **Stuck >48h** (accepted more than 48 hours ago with no progress).",
            "**Operational KPIs** — median time to ready and to delivered; branches with no prescription activity.",
            "**Recent activity**, branch list, shortcuts, and account notices (for example verify your email)."
          ]],
          ["h", "Example"],
          ["p", "The head office sees 3 prescriptions **Stuck >48h** at the Tema branch, taps **View stuck prescriptions**, and calls the branch: one medicine is out of stock, so they suggest an alternative to the doctor."]
        ]
      },
      {
        id: "ph-prescriptions",
        title: "Prescriptions — from arrival to handover",
        summary: "Mark what you have, suggest alternatives, transfer what you lack, verify the patient and hand over.",
        keywords: "prescriptions available not available alternative transfer branch pickup code verify dispense handover insurer checklist",
        body: [
          ["h", "The life of a prescription"],
          ["steps", [
            "It arrives as **Incoming**. Open it and mark **each medicine**: **We have it**, **Cannot supply**, or **Transfer** to another branch (nearby branches within a radius you choose).",
            "If you cannot supply one, you can **Suggest alternative drug** with your reason. It goes to the doctor, and shows “Waiting for doctor approval” until they decide. A transfer to another branch needs the **patient's consent**.",
            "When ready, it shows **Ready** and the patient is told. Each branch that gives a medicine clicks **Deliver this drug** at handover.",
            "Before closing, complete the **pre-delivery checklist**: dispensed brand and pack, counselling or pickup instructions, cold-chain handling, and any exception. Then the prescription is locked as **Delivered**."
          ]],
          ["h", "Handing over and billing"],
          ["ul", [
            "**Verify** the patient: scan their QR code or type the 8-digit code (or search the RX reference or name for walk-ins).",
            "**Hand over medicines**: for each, how many were prescribed and how many you give; choose **who pays** — the patient, or **bill the insurer** (check cover and ask for approval if needed) — with unit prices."
          ]],
          ["p", "Filters: Incoming, Active, Ready, Pickup overdue, Needs review, Stuck >48h, Delivered."],
          ["h", "Example"],
          ["p", "A prescription for metformin and amlodipine reaches the Adenta branch. They have metformin but not amlodipine; they transfer that line to the Madina branch 3 km away, the patient agrees in the app, and both branches hand over their medicine. Adenta completes the checklist and the prescription is locked as Delivered."]
        ]
      },
      {
        id: "ph-open",
        title: "Open Prescriptions",
        summary: "Prescriptions offered to every NessaHub pharmacy — the first to take one prepares it.",
        keywords: "open prescriptions take first pharmacy code verify",
        body: [
          ["p", "When a doctor sends a prescription “open to all pharmacies”, it appears here for every approved pharmacy. Take it by verifying the patient's code; you then **hold** it while you prepare it (or say you can't fill it, which releases it), and hand it over as usual."],
          ["h", "Example"],
          ["p", "A patient visiting Cape Coast walks into a NessaHub pharmacy with an open prescription. The pharmacist scans her QR code, taps **Take this prescription**, prepares it and hands it over."]
        ]
      },
      {
        id: "ph-more",
        title: "Transfers, Activity, Reports, Formulary, Insurance and Settings",
        summary: "The rest of the pharmacy menus.",
        keywords: "pharmacy transfers activity reports stockout formulary insurance claims pre-authorisations settings",
        body: [
          ["ul", [
            "**Transfers** (branch) — medicines transferred to or from your branch.",
            "**Activity** (branch) — what happened at your branch, and when.",
            "**Reports** — for a date range and branch: prescriptions in scope, delivered, ready backlog, **stockout rate**, alternative suggestions and approvals, the prescription funnel and branch performance.",
            "**Formulary** (head office) — the medicines list prescriptions are checked against.",
            "**Insurance claims** and **Pre-authorisations** — claims to insurers for medicines you handed over, and approvals you asked for, with insurers' questions to answer.",
            "**Report Issue** and **Settings** — raise a problem with NessaHub; update your details and password."
          ]],
          ["h", "Example"],
          ["p", "At the monthly meeting the owner opens Reports for last month: a 12% stockout rate on antibiotics at one branch. They increase that branch's antibiotic stock."]
        ]
      }
    ]
  },
  {
    id: "diagnostics-screens",
    group: "Screen by screen",
    icon: "microscope",
    title: "Lab and scan centre dashboards, screen by screen",
    tagline: "Head office and branches: check-in, the worklist, results, catalogues and reports.",
    articles: [
      {
        id: "dx-check-in",
        title: "Check in a patient",
        summary: "Scan the patient's QR code or type their 8-digit code before anything else.",
        keywords: "check in qr code 8-digit patient identity national id",
        body: [
          ["p", "Every test starts with check-in. Scan the QR code on the patient's phone or type their 8-digit code. You need it before collecting a sample, starting a scan or entering a result. It also shows any other tests for that patient at your centre."],
          ["note", "Before collecting a sample you are asked to **check identity** — match the patient's National ID to the order."],
          ["h", "Example"],
          ["p", "Mr Boateng arrives for a blood test. The receptionist scans his code: it opens his full blood count order and shows that a urine test was ordered too, so both are collected at once."]
        ]
      },
      {
        id: "dx-worklist",
        title: "Worklist and order detail",
        summary: "Every order to do: collect, book, enter the result — or reject with a reason.",
        keywords: "worklist orders collect sample accession book scan result findings impression critical reject insurer",
        body: [
          ["h", "Working an order"],
          ["steps", [
            "**Lab:** **Collect sample** — an accession number is issued for the tube label and the order moves to “Sample collected”. **Scan:** book a date and time; the patient gets a notification.",
            "Enter the **result**. Lab: each parameter with result, unit, reference range and flag (from your catalogue), plus a comment. Scan: clinical indication, technique, findings and impression.",
            "Tick **Critical / urgent finding** if needed — the doctor gets an urgent alert when you submit. Follow your critical-value call protocol as well.",
            "Submit. The result goes to the **ordering doctor only**; the patient sees it after the doctor shares it."
          ]],
          ["p", "**Reject & tell doctor** if you cannot do the test — the reason goes to the doctor. For insured patients, **ask the insurer for approval** and bill them; the order shows when it has already been billed."],
          ["h", "Example"],
          ["p", "A potassium result comes back at 6.8 — above the critical limit in the catalogue. The scientist enters it, it is flagged critical, the doctor gets an urgent alert straight away, and the lab also phones the doctor as its protocol requires."]
        ]
      },
      {
        id: "dx-overview-reports",
        title: "Overview, Results and Reports",
        summary: "Your pipeline, turnaround and quality at a glance, and every result uploaded.",
        keywords: "overview pipeline turnaround tat overdue critical abnormal branch performance revenue results reports export",
        body: [
          ["ul", [
            "**Overview** — received and completed today, open queue, average turnaround, rejection rate; the **work pipeline** (tap a stage to open its orders); turnaround against target (STAT 2 h, urgent 6 h, otherwise your catalogue time or 24 h lab / 48 h scan); when orders arrive; booked scans; critical values; and (head office) **branch performance**.",
            "**Results** — everything uploaded, newest first, with flags (critical, abnormal, normal) and whether the doctor has shared it.",
            "**Reports** — volume, turnaround, quality and revenue for a period, per branch or the whole network; export for management meetings."
          ]],
          ["h", "Example"],
          ["p", "The lab manager sees average turnaround rising to 30 hours at one branch, mostly for orders arriving after 4 pm. She adds an evening shift there."]
        ]
      },
      {
        id: "dx-catalog-branches",
        title: "Test / Scan Catalogue, Branches and Settings",
        summary: "What you offer, at what price and how results are flagged; your branches and settings.",
        keywords: "catalog catalogue test price turnaround reference ranges critical limits preparation branches settings",
        body: [
          ["ul", [
            "**Catalogue** — each test or scan with code, **price (GHS)**, **turnaround target**, specimen and **patient preparation** (for example fasting). For lab tests, the **result parameters and reference ranges** (normal low–high, critical low and high). Values outside normal are flagged; outside critical, the doctor is alerted. **Load typical ranges** gives a starting point — check them against your analyser.",
            "**Branches** (head office) — add and manage branches; each has its own login and worklist.",
            "**Insurance claims**, **Pre-authorisations**, **Report Issue** and **Settings** — as for pharmacies."
          ]],
          ["h", "Example"],
          ["p", "A scan centre adds “Pelvic ultrasound” at GHS 250 with a 24-hour turnaround and the preparation note “drink 1 litre of water an hour before; do not empty your bladder”. Patients see that note when it is ordered."]
        ]
      }
    ]
  },
  {
    id: "insurer-screens",
    group: "Screen by screen",
    icon: "shield",
    title: "Insurer dashboard, screen by screen",
    tagline: "Claims, pre-authorisation, fraud, members, providers, price lists, payments and setup.",
    articles: [
      {
        id: "in-work",
        title: "Overview, Claims and Pre-authorisation",
        summary: "Review claims and approval requests, with the evidence beside each one.",
        keywords: "insurer overview claims approve reject query mark paid pre-authorisation approve part deadline",
        body: [
          ["ul", [
            "**Overview** — today's brief: claims to review, open pre-authorisations, fraud flags, ready to pay, members and providers, average decision time, member confirmation, the claims pipeline, top providers by value, and money prevented (with why requests were blocked).",
            "**Claims** — each claim with member, provider, service, items, amount, flags, proof and history. **Approve**, **Reject**, **Query provider** (a reason is needed), **Mark paid** or **Watch**. If your claims are decided in your own system, this page follows them and shows the evidence.",
            "**Pre-authorisation** — requests from doctors and providers: items and prices, diagnosis, clinical reason, supporting documents and the member's spend this year. **Approve**, **Approve part** (an amount and how many days it is valid), **Ask for more** or **Reject**, before the deadline."
          ]],
          ["h", "Example"],
          ["p", "A pre-authorisation arrives for an MRI with the reason “back pain with leg weakness for 6 weeks”. The medical reviewer reads the attached X-ray report, approves it for 30 days, and the doctor is notified immediately."]
        ]
      },
      {
        id: "in-fraud",
        title: "Fraud & audit",
        summary: "Signals that need a look, and cases to investigate.",
        keywords: "fraud audit flags signals cases investigate confirm dismiss",
        body: [
          ["p", "**Flags** list unusual patterns (for example the same service billed twice, or a member who says they never received a service), with severity and the claim. **Review** or **Dismiss** each. Select flags to open a **case**: assign it, add investigation notes, mark it **Investigating**, then close it with an outcome or **Confirm fraud**."],
          ["h", "Example"],
          ["p", "Three members deny receiving physiotherapy billed by the same clinic. The claims officer opens a case, finds 40 similar claims, suspends the provider and records “GHS 12,000 recovered” as the outcome."]
        ]
      },
      {
        id: "in-people",
        title: "Members, Provider network, Price lists and Care management",
        summary: "Who you cover, who treats them, what you pay, and members with chronic conditions.",
        keywords: "members provider network invite trusted suspend price lists tariffs medicines csv import care management chronic refill reminders",
        body: [
          ["ul", [
            "**Members on NessaHub** — each member's plan, group, claims, spend this year, last claim and **risk score**, with their signals and pre-authorisations.",
            "**Provider network** — providers you work with: plans accepted, claims and value in 30 days, blocked claims, denials by members. **Invite** providers, mark one **Trusted** (never needs pre-approval; you still see every claim), **Suspend** or **Reinstate**.",
            "**Price lists** — the tariff you pay per medicine (with generic, strength, tier, plans, maximum per month and whether it needs pre-approval) and per service (consultations, dental, optical, physio, admissions, lab, scans). **Import** from CSV.",
            "**Care management** — chronic members by refill status (On track, Refill due, Lapsed), with **Send reminder**. NessaHub also sends automatic refill reminders a few days before a chronic medicine runs out."
          ]],
          ["h", "Example"],
          ["p", "The care manager sees 14 diabetic members marked **Lapsed**. She sends them a reminder; within a week 9 have refilled their prescriptions."]
        ]
      },
      {
        id: "in-money-setup",
        title: "Payment files, Reports, Notices, Integration, Staff, Audit log and Settings",
        summary: "Paying providers, your numbers, messages, connections, your team and your rules.",
        keywords: "payment files owed providers reports spend notices sms integration adapter staff roles audit settings plans auto-approve pre-approval emergencies two-step",
        body: [
          ["ul", [
            "**Payment files** — what you owe each provider; build a payment file, then **record payment & notify providers**.",
            "**Reports** — spend by month and service, cost per member per month, top medicines and diagnoses (ICD-10), employer groups, approved, rejected, queried and prevented amounts.",
            "**Notices** — send a message to all network providers or all members, optionally by SMS too.",
            "**Integration** — how your own system connects (adapter calls, errors, response time).",
            "**Staff & roles** — add staff with a role: Admin, Claims officer, Medical reviewer, Network manager, Finance, Care manager or Viewer.",
            "**Audit log** (admins only) — every claim and pre-auth decision and sensitive change.",
            "**Settings** — where claims are decided (here or in your system), auto-approve clean claims up to an amount, support contacts, **member confirmation** of each service (stops phantom billing), **two-step sign-in for staff**, your plans, and pre-approval rules (which items, above what amount, how fast you decide, where requests go). **Emergencies are never blocked** — the provider treats first and you review within the time you set."
          ]],
          ["h", "Example"],
          ["p", "At month end, Finance opens Payment files: 23 providers are owed GHS 186,000. They pay through the bank, enter the payment reference, and every provider is notified at once."]
        ]
      }
    ]
  },
  {
    id: "facility-screens",
    group: "Screen by screen",
    icon: "hospital",
    title: "Facility dashboard, screen by screen",
    tagline: "Clinics, hospitals, dental, optical, physio and maternity: check-in, visits, claims, services and staff.",
    articles: [
      {
        id: "fa-check-in",
        title: "Overview and Check in",
        summary: "Your day at a glance, and starting a visit for a patient.",
        keywords: "facility overview check in patient find new patient insurance card self-pay emergency",
        body: [
          ["p", "**Overview** shows visits today, open visits, claims in progress, claims queried by insurers, approved but unpaid, paid in 30 days, open pre-authorisations and staff awaiting a licence check."],
          ["h", "Checking a patient in"],
          ["steps", [
            "**Find** the patient by full phone number or exact insurance card number (names only find patients who have visited you before), or **add a new patient**.",
            "Choose how they pay: **self-pay** or an **insurance card** (insurer and card number).",
            "Choose who will see them and the reason for the visit.",
            "Tick **Emergency** if needed — treat now; the insurer reviews afterwards."
          ]],
          ["h", "Example"],
          ["p", "Ama arrives at a dental clinic with her insurance card. Reception types her card number, picks her insurer and the dentist, writes “toothache, lower left”, and the visit opens."]
        ]
      },
      {
        id: "fa-visits",
        title: "Visits",
        summary: "Record what was done, confirm the member, and complete or bill the visit.",
        keywords: "visits services given vitals diagnosis tooth chart eye test physio ward maternity confirm member id check bill insurer",
        body: [
          ["steps", [
            "Record **vitals**, the **diagnosis** (ICD-10 code and words) and notes. Specialist sections appear as needed: **tooth chart** (dental), **eye test** (optical), **session plan** (physio), **ward and bed** (admissions), **antenatal, delivery and postnatal** (maternity).",
            "Add each **service given** from your price list (code, tooth, units, amount). **Check cover** and **ask the insurer for approval** if needed.",
            "**Confirm it is the member** — the code sent to them, or record an ID check (Ghana Card, passport, driver's licence, voter ID).",
            "**Complete & bill insurer**, or **Complete visit** for self-pay. Attach any documents."
          ]],
          ["h", "Example"],
          ["p", "The dentist marks tooth 36 on the chart, adds “extraction” from the price list, Ama reads out the 6-digit code sent to her phone to confirm she was treated, and the clinic taps **Complete & bill insurer**."]
        ]
      },
      {
        id: "fa-more",
        title: "Pre-authorisation, Insurance claims, Services & prices, Staff and Insurance networks",
        summary: "Approvals, claims, what you charge, your team and the insurers you work with.",
        keywords: "facility pre-authorisation claims services prices staff licence insurance networks",
        body: [
          ["ul", [
            "**Pre-authorisation** and **Insurance claims** — requests and claims to insurers, with their questions to answer and payment status.",
            "**Services & prices** — everything you charge for, with price, code and whether it usually needs pre-approval.",
            "**Staff** — add staff (title, role, login email, licensing body, licence number and expiry); their licence is checked before they can work.",
            "**Insurance networks** — which insurers you work with."
          ]],
          ["h", "Example"],
          ["p", "A new medical officer joins. The clinic adds him in Staff with his Medical and Dental Council licence; once verified he appears in “Seen by” at check-in."]
        ]
      }
    ]
  }
);
