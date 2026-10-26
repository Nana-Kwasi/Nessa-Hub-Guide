window.GUIDE = window.GUIDE || { chapters: [] };

window.GUIDE.chapters.push(
  {
    id: "pharmacies",
    group: "For partners",
    icon: "pharmacy",
    title: "For pharmacies",
    tagline: "Head office and branches: receive, verify and dispense prescriptions digitally.",
    articles: [
      {
        id: "pharmacy-structure",
        title: "Head office and branches",
        summary: "A pharmacy has a head-office account that manages its branches; each branch dispenses.",
        keywords: "pharmacy branch head office parent organisation",
        body: [
          ["p", "A pharmacy on NessaHub is an **organisation** (head office) with one or more **branches**. NessaHub creates the pharmacy after it is approved; the head office then manages its branches, each with its own sign-in."],
          ["h", "Head office menu"],
          ["table", ["Section", "What it does"], [
            ["Overview", "Activity across all branches."],
            ["Manage Branches", "Add and manage branches and their details."],
            ["Prescriptions", "Prescriptions sent to any of your branches."],
            ["Open Prescriptions", "Prescriptions open to all NessaHub pharmacies that you can take."],
            ["Reports", "Dispensing and business reports."],
            ["Insurance claims & Pre-authorisations", "Claims to insurers and pre-approvals."],
            ["Formulary", "The medicines list used for prescribing safety checks."],
            ["Report Issue & Settings", "Support and account settings."]
          ]],
          ["h", "Branch menu"],
          ["table", ["Section", "What it does"], [
            ["Overview", "What is incoming, active and ready at this branch."],
            ["Prescriptions", "Check availability, suggest alternatives, prepare, hand over and deliver."],
            ["Open Prescriptions", "Take an open prescription; hold, dispense or release it."],
            ["Transfers", "Send a prescription to, or accept one from, another of your branches."],
            ["Activity & Reports", "What the branch has done."],
            ["Insurance claims & Pre-authorisations", "Claims and approvals for this branch."],
            ["Report Issue & Settings", "Support and branch settings."]
          ]]
        ]
      },
      {
        id: "pharmacy-dispensing",
        title: "Verifying and dispensing",
        summary: "Walk-in verification by QR or code, counted hand-over, holds and transfers.",
        keywords: "dispense verify walk-in qr code hold take release hand over",
        body: [
          ["steps", [
            "A patient arrives with their prescription code or QR.",
            "Use **Walk-in Verify** to scan the QR or type the 8-digit code.",
            "Check availability; mark items **available**, **not available** or **suggest an alternative**.",
            "Check insurance cover where the patient is insured.",
            "Use **Hand over medicines** to record exactly what was given. You can never exceed the prescribed quantity; partial hand-overs are recorded.",
            "Mark it **ready for pickup** or **delivered**."
          ]],
          ["h", "Open prescriptions"],
          ["p", "When you **Take** an open prescription, only one pharmacy can win. You hold it for the hold period (24 hours by default). If the hold lapses without a hand-over, it reopens for others; if something was already handed over, the doctor, patient and pharmacy are alerted instead."],
          ["h", "Prescription statuses at the branch"],
          ["p", "Pending, Available, Not available, Alternative suggested, Approved, Transferred, Sent, Accepted, Partial, Ready and Delivered."]
        ]
      }
    ]
  },
  {
    id: "diagnostics",
    group: "For partners",
    icon: "microscope",
    title: "For laboratories & scan centres",
    tagline: "Receive test orders, check patients in and report results without paper.",
    articles: [
      {
        id: "diagnostics-structure",
        title: "Head office and branches",
        summary: "Labs and scan centres work like pharmacies: a head office with branches.",
        keywords: "lab laboratory scan imaging radiology branch",
        body: [
          ["h", "Head office menu"],
          ["table", ["Section", "What it does"], [
            ["Overview", "Activity across branches."],
            ["All Orders", "Every order sent to your organisation."],
            ["Results", "Results reported by your branches."],
            ["Branches", "Manage branches."],
            ["Reports", "Business reports."],
            ["Insurance claims & Pre-authorisations", "Claims and approvals."],
            ["Report Issue & Settings", "Support and settings."]
          ]],
          ["h", "Branch menu"],
          ["table", ["Section", "What it does"], [
            ["Overview", "Today at the branch."],
            ["Worklist", "Orders to perform, in order."],
            ["Check-in", "Check a patient in when they arrive (verify the order link)."],
            ["Catalog", "The tests or scans you offer and their prices."],
            ["Results", "Upload results and reports for each order."],
            ["Reports, claims & settings", "Branch reports, insurance and settings."]
          ]]
        ]
      },
      {
        id: "diagnostics-workflow",
        title: "From order to result",
        summary: "Check in, perform the test, record events and upload the result.",
        keywords: "order status result upload sample events",
        body: [
          ["steps", [
            "An order arrives from a clinician and appears in the **Worklist**.",
            "The patient arrives; **check them in**.",
            "Update the order status as you go — sample taken, scan booked, in progress.",
            "Upload the **result**. It goes to the ordering clinician first, who shares it with the patient."
          ]],
          ["note", "If a test cannot be completed, mark it so — the patient is told to contact their doctor."]
        ]
      }
    ]
  },
  {
    id: "insurers",
    group: "For partners",
    icon: "shield",
    title: "For insurers",
    tagline: "Claims, pre-authorisations, members, networks and payments in real time.",
    articles: [
      {
        id: "insurer-workspace",
        title: "The insurer workspace",
        summary: "Work, People, Money and Setup — every section.",
        keywords: "insurer claims pre-authorisation fraud members network price list payment file",
        body: [
          ["table", ["Area", "Section", "What it does"], [
            ["Work", "Overview", "Today’s claims, approvals and alerts."],
            ["Work", "Claims", "Review, approve, partly approve, query, reject or flag claims; see member confirmations."],
            ["Work", "Pre-authorisation", "Approve or refuse requests before care is given."],
            ["Work", "Fraud & audit", "Claims flagged for review — for example when a patient says a service was not received."],
            ["People", "Members on NessaHub", "Your members who use NessaHub."],
            ["People", "Provider network", "Which providers are in your network."],
            ["People", "Price lists", "Agreed prices with providers."],
            ["People", "Care management", "Members who need managed care."],
            ["Money", "Payment files", "Export payments to providers."],
            ["Money", "Reports", "Financial and activity reports."],
            ["Setup", "Notices", "Notices to providers and members."],
            ["Setup", "Integration", "Connect your systems."],
            ["Setup", "Staff & roles", "Your team and what each person can do."],
            ["Setup", "Audit log & Settings", "Everything that was done, and your settings."]
          ]],
          ["h", "Claim statuses"],
          ["p", "Awaiting patient, Confirmed, To review, Approved, Partly approved, Paid, Queried, Rejected, Flagged, Cancelled and Expired. Patient replies show as confirmed, “not received” or “no reply”."]
        ]
      }
    ]
  },
  {
    id: "facilities",
    group: "For partners",
    icon: "hospital",
    title: "For hospitals & clinics",
    tagline: "Check patients in, record visits, verify members and claim.",
    articles: [
      {
        id: "facility-workspace",
        title: "The facility workspace",
        summary: "Visits today, member verification, visit records and insurance claims.",
        keywords: "facility hospital clinic visit check in outpatient maternity dental optical physio admission",
        body: [
          ["p", "Hospitals and clinics use NessaHub to record visits and claim from insurers. The overview shows visits today, open visits, claims in progress, claims queried by insurers, open pre-authorisations and staff awaiting a licence check."],
          ["steps", [
            "**Check in** a patient: search for them or add a new patient.",
            "Choose how they pay — **self-pay** or **insurer** (with card number).",
            "For insured patients, **confirm it is the member** with a code sent to them, or by ID (Ghana Card, passport, driver’s licence or voter ID).",
            "Record the **visit**: who saw them, reason for visit and the details for that visit type.",
            "Complete the visit; for insured patients the **claim** is prepared."
          ]],
          ["table", ["Visit type", "Details you record"], [
            ["Outpatient", "Reason for visit, vitals, findings."],
            ["Maternity", "Antenatal or postnatal visit, delivery (normal or caesarean)."],
            ["Admission", "Ward / bed and the admitting doctor’s note."],
            ["Dental", "Treatment details."],
            ["Optical", "Eye test (sphere, cylinder, axis), lens type, frame."],
            ["Physiotherapy", "Session number, sessions in plan, treatment plan and progress."]
          ]]
        ]
      }
    ]
  }
);
