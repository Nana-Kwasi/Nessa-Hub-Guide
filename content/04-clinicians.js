window.GUIDE = window.GUIDE || { chapters: [] };

window.GUIDE.chapters.push(
  {
    id: "doctors",
    group: "For clinicians",
    icon: "doctor",
    title: "For doctors",
    tagline: "Your whole practice — patients, prescribing, tests, referrals and earnings — in one workspace.",
    articles: [
      {
        id: "doctor-workspace",
        title: "Your workspace, section by section",
        summary: "Every item in the doctor menu and what it is for.",
        keywords: "doctor dashboard menu sections",
        body: [
          ["table", ["Section", "What it does"], [
            ["Home", "Today’s appointments, a daily brief, follow-ups due, items waiting for you, and an appointment calendar — tap a free date to schedule an appointment on that day."],
            ["Patients", "Everyone you care for, with search."],
            ["Patient Panel", "One patient’s full picture: history, notes, prescriptions, results, timeline and gaps in the record."],
            ["Appointments", "Upcoming and past appointments; set your availability by slot; reschedule or cancel."],
            ["Video Calls", "Start or join consultations by video or voice."],
            ["Messages", "Chat with patients (text, images, voice notes)."],
            ["Notes", "Clinical notes — write them yourself or start from an AI draft you edit and approve."],
            ["Prescriptions", "Issue prescriptions with formulary safety checks; routed or open to all pharmacies; reissue codes."],
            ["Prescription Requests", "Refill and new-prescription requests from patients: approve, ask, decline or close."],
            ["Care Plans", "Write a care plan for a patient (with an optional AI draft) and approve it."],
            ["Documents", "Letters, sick notes and visit summaries — the draft uses only what you write."],
            ["Referrals", "Refer a patient to a colleague with the relevant record gathered for you; see referrals sent to you."],
            ["Transfers", "Transfer a patient’s care to another clinician, with the patient’s consent."],
            ["Earnings", "Fees, payouts and your payout details."],
            ["Wellness", "Send wellness messages to patients."],
            ["Patient Feedback", "Feedback results from your patients."],
            ["NessaHub Assistant", "Clinical summaries, document summaries and drafting help."],
            ["Check-ins", "Review your patients’ weekly check-ins."],
            ["Notifications", "Everything that needs your attention."],
            ["Promotions / Offers on my fee", "Join NessaHub promotions and set discounts on your own fee."],
            ["Order Lab / Scan", "Order a test from a lab or scan centre."],
            ["Lab & Scan Results", "Results of tests you ordered; review and share with the patient."],
            ["Insurer approvals", "Pre-authorisations and approvals from patients’ insurers."],
            ["Reviews", "Patient reviews of your care."],
            ["Analytics", "Your practice analytics."],
            ["Report Issue", "Report a problem or a concern."],
            ["Settings", "Profile, fee, availability, security and payout details."]
          ]]
        ]
      },
      {
        id: "doctor-prescribing",
        title: "Prescribing safely",
        summary: "Formulary checks, open prescriptions, pickup codes and requests.",
        keywords: "prescribe formulary safety interaction warning open prescription",
        body: [
          ["steps", [
            "Open the patient and choose **New prescription**.",
            "Add medicines, doses, quantities and instructions. The prescription assistant can help.",
            "Choose a pharmacy branch, or tick **Open to all NessaHub pharmacies**.",
            "NessaHub checks the formulary. If there is a warning you must read it and acknowledge it before the prescription can be issued.",
            "On issue, a QR and 8-digit pickup code are created and sent to the patient."
          ]],
          ["note", "Approving a prescription request opens the normal prescription form already filled in. One approval can only ever issue one prescription."]
        ]
      },
      {
        id: "doctor-tests-referrals",
        title: "Tests, referrals and transfers",
        summary: "Order diagnostics, refer to colleagues and hand over care.",
        keywords: "order lab scan referral transfer handover colleague",
        body: [
          ["ul", [
            "**Order Lab / Scan** — choose the test and the centre. The order and a verification link go to the centre and appear for the patient.",
            "**Results** come back to you first. Review them and share with the patient with a note.",
            "**Referrals** — NessaHub gathers the relevant record; you read and edit it before sending.",
            "**Transfers** — the patient is asked to consent. If they do not answer after two reminders, or no new clinician is chosen within 24 hours, NessaHub may reassign automatically."
          ]]
        ]
      },
      {
        id: "doctor-earnings",
        title: "Fees and payouts",
        summary: "You set your fee; NessaHub pays out monthly to bank or mobile money.",
        keywords: "earnings payout fee money bank momo finance",
        body: [
          ["p", "You set your own consultation fee. Earnings are paid out monthly to your bank account or mobile money. **Earnings** shows what you have earned, what is pending and how fees and refunds work."],
          ["warn", "For your security, changing your payout details pauses payouts until NessaHub finance confirms the change, and you are emailed every time they change."]
        ]
      }
    ]
  },
  {
    id: "therapists",
    group: "For clinicians",
    icon: "users",
    title: "For therapists, psychologists & psychiatrists",
    tagline: "Clients, couples, sessions, notes, resources and mood insights.",
    articles: [
      {
        id: "therapist-workspace",
        title: "Your workspace, section by section",
        summary: "Every item in the therapist menu and what it is for.",
        keywords: "therapist dashboard menu sections psychologist psychiatrist",
        body: [
          ["table", ["Section", "What it does"], [
            ["Home", "Today’s sessions, clients needing attention, quick actions and a calendar — tap a free date to schedule a call on that day."],
            ["Clients", "All your clients, their profiles and details."],
            ["Couple Cases", "Couples you work with — both partners’ intake and shared sessions."],
            ["Messaging", "Chat with clients."],
            ["Video Call", "Schedule and start video or voice sessions."],
            ["Appointments & Calendar", "Your sessions in a list and a calendar; set availability."],
            ["Notes", "Session notes (private between you and your client), with optional AI drafts."],
            ["Prescriptions & Prescription Requests", "For psychiatrists: prescribe and handle refill requests."],
            ["Order Lab / Scan & Results", "Order tests and review results."],
            ["Care Plans & Documents", "Write care plans and letters."],
            ["Referrals & Transfers", "Refer clients and transfer care with consent."],
            ["Earnings", "Fees and payouts."],
            ["Resources", "Share worksheets and materials; see submissions."],
            ["Client Moods", "Mood trends logged by your clients."],
            ["Wellness", "Send wellness messages."],
            ["Patient Feedback", "Session ratings and feedback."],
            ["NessaHub Assistant", "Pre-session briefs, summaries and drafting help."],
            ["Check-ins", "Review weekly check-ins."],
            ["Notifications", "What needs your attention."],
            ["Promotions / Offers on my fee", "Promotions and discounts on your fee."],
            ["Reports", "Write and manage therapist reports."],
            ["Report Issue", "Report a problem."],
            ["Settings", "Profile, fee, availability and security."],
            ["Logs", "A log of activity on your account."]
          ]]
        ]
      },
      {
        id: "therapist-programme",
        title: "Running a therapy programme",
        summary: "Intake, sessions, notes, homework, goals and progress.",
        keywords: "intake session notes homework goals assignment progress",
        body: [
          ["steps", [
            "A client is **assigned** to you after matching (or reassigned from another therapist). You can review the assignment.",
            "Read their **intake**.",
            "Hold **sessions**; write **session notes** afterwards.",
            "Set **homework** and share **worksheets**; agree **goals**.",
            "Watch progress through submissions, goals and **Client Moods**.",
            "Write a **care plan** and, when needed, a **report**."
          ]]
        ]
      }
    ]
  }
);
