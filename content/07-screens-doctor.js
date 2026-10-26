/*
 * Screen by screen — the doctor dashboard.
 * One article per screen (closely related screens share one): what it is for, what is on it,
 * what you can do, and a worked example. Same block format as content/01-start.js.
 */
window.GUIDE = window.GUIDE || { chapters: [] };

window.GUIDE.chapters.push({
  id: "doctor-screens",
  group: "Screen by screen",
  icon: "stethoscope",
  title: "Doctor dashboard, screen by screen",
  tagline: "Every screen in the doctor menu: what it is for, what you see, what you can do — with a real example for each.",
  articles: [
    {
      id: "doc-home",
      title: "Home",
      summary: "Your clinic at a glance: today's schedule, what needs you, your numbers and a calendar you can book from.",
      keywords: "doctor home dashboard today schedule next consultation pending confirmations calendar quick actions e-pharmacy",
      body: [
        ["p", "Home is the first screen after you sign in. It answers “what do I need to do today?” without opening anything else."],
        ["h", "What you see"],
        ["ul", [
          "**Your clinic at a glance** — today's appointments, completed, pending and this week, plus your completion rate.",
          "**Next consultation** with a **Start a consultation** button, and **Pending confirmations** — bookings waiting for you to accept.",
          "**Today's Schedule** — every appointment today in time order. “View all” opens Appointments.",
          "**Recent activity**, **Recent patients**, and charts: appointment trends over 6 months, session types and completed vs pending per month.",
          "**Your tools** and **Quick actions** — one tap to Prescriptions, Lab & scans, Notes, Check-ins, Patients, Write note, Video calls, Reviews and E-Pharmacy.",
          "**Appointment calendar** — highlighted dates have appointments.",
          "A **search box** for patients, prescriptions or appointments."
        ]],
        ["h", "What you can do"],
        ["ul", [
          "**Tap a date on the calendar.** A date with appointments opens them; a free date from today on opens **Schedule Appointment** with that date filled in; a past free date cannot be booked.",
          "**Add E-Pharmacy** — assign a pharmacy (from the platform directory, or entered manually) to one or more patients, so their prescriptions can go there.",
          "Jump straight into the next consultation, or confirm pending bookings."
        ]],
        ["h", "Example"],
        ["p", "Dr Mensah signs in at 8:30. Home shows 6 appointments today and 2 pending confirmations. She accepts the two bookings, sees Kofi is first at 9:00, and taps **Start a consultation** when it is time. Kofi asks to come back next Thursday, so she taps Thursday on the calendar — the schedule form opens on that date and she books him in."]
      ]
    },
    {
      id: "doc-patients",
      title: "Patients and Patient Panel",
      summary: "Everyone who has booked with you, with search, status and a one-tap overview of each patient.",
      keywords: "patients list patient panel overview status active inactive discharged search profile",
      body: [
        ["p", "A patient appears here automatically once they book an appointment with you. **Patients** is the list for finding someone and acting quickly; **Patient Panel** is the same list built for reviewing each patient in depth."],
        ["h", "What you see"],
        ["table", ["Column", "Meaning"], [
          ["Patient / Email", "Who they are."],
          ["Appointments", "How many appointments they have had with you."],
          ["Last Visit", "When you last saw them."],
          ["Status", "**Active** (in your care), **Inactive** (not currently seen) or **Discharged** (care ended)."]
        ]],
        ["h", "What you can do"],
        ["ul", [
          "**Search** by name or email.",
          "**Message** a patient or **View Profile** (the full record — see “Patient record”).",
          "In Patient Panel, tap a name for the **Patient overview**: visits, prescriptions, lab and scan orders, notes, appointments, saved pharmacies and timeline in tabs — and change their status (**Set inactive**, **Activate**, **Discharge**)."
        ]],
        ["h", "Example"],
        ["p", "Dr Owusu wants to see who has not been back in a while. He opens Patient Panel, sorts by Last Visit and finds Esi last seen four months ago. He opens her overview, sees her blood-pressure prescription ran out, and sends her a message asking her to book a review."]
      ]
    },
    {
      id: "doc-patient-record",
      title: "Patient record (the full profile)",
      summary: "One patient's whole picture: appointments, notes, prescriptions, vitals, records, check-ins, pharmacies, timeline — and every action on them.",
      keywords: "patient record profile detail vitals allergies notes prescribe discharge transfer timeline health records insurance emergency contact",
      body: [
        ["p", "Open it from Patients (**View Profile**) or the Patient overview (**Full clinical record**). Everything you need during or after a consultation is on this one screen."],
        ["h", "What you see"],
        ["ul", [
          "**Summary** — total visits, completed, upcoming and prescriptions.",
          "**Recent appointments** (accept or start them from here) and **Latest notes**.",
          "**Latest vitals** — blood pressure, heart rate, respiratory rate, SpO2, temperature — and **Health information** such as allergies.",
          "**Initial complaint** from the patient's intake, and their **daily check-ins** (pain level, symptoms, medications taken, notes).",
          "**Health records** the patient uploaded, **Insurance details** and **Emergency contact**.",
          "**Patient pharmacies** — where their prescriptions can be sent.",
          "**Health timeline** — appointments, prescriptions, lab and scan orders and results, pharmacy events, in date order.",
          "Any **self-discharge request** from the patient, with their reason."
        ]],
        ["h", "What you can do"],
        ["ul", [
          "**Add Note**, **Prescribe**, **Order Lab/Scan**, **Message**, **Video Call**.",
          "**Add a pharmacy** for the patient and **send the latest prescription** to it.",
          "**Transfer patient** (hand their care to another clinician — see “Transfers”) or **Discharge** (ends your care and cancels pending appointments; a reason is required)."
        ]],
        ["note", "Some parts can be hidden by the patient's privacy settings — you will see “Access restricted” instead. That is the patient's choice and is respected everywhere."],
        ["h", "Example"],
        ["p", "During a video consultation, Dr Asante opens Ama's record. He sees her check-ins show headaches at 7/10 for a week and her last blood pressure was 150/95. He writes a consultation note, prescribes amlodipine, orders a kidney function test and books a follow-up — all from this screen."]
      ]
    },
    {
      id: "doc-appointments",
      title: "Appointments",
      summary: "Every booking in a calendar or a list: accept, reject, start, complete, reschedule, or schedule a new one.",
      keywords: "appointments calendar list accept reject start call complete reschedule schedule pending confirmed",
      body: [
        ["p", "Patients book with you from your available slots. Their bookings arrive here as **Pending** until you accept them."],
        ["h", "What you see"],
        ["ul", [
          "A **Calendar** view (colour per status: pending, confirmed, completed, cancelled) and a **List** view with patient, date, time, type, reason and status.",
          "A **risk panel** flagging appointments likely to be missed, so you can remind those patients."
        ]],
        ["h", "What you can do"],
        ["ul", [
          "**Accept** or **Reject** a pending booking.",
          "**Start Call** when it is time, then **Complete** it afterwards.",
          "**Reschedule** — pick a new date and time; the status goes back to Pending for the patient to see.",
          "**Schedule an appointment** yourself: click an empty date (or one from Home), choose the patient, time, type (video, audio or chat) and reason. Appointments you schedule are confirmed automatically and the patient is notified."
        ]],
        ["note", "You can only schedule with patients who have booked with you before. Your bookable times come from **Settings → Availability**."],
        ["h", "Example"],
        ["p", "Two new bookings arrive overnight. Dr Mensah accepts Yaw's but rejects one for a day she will be at the hospital, and the patient is told. Later she reschedules Akua from Friday to Monday because Akua asked by message."]
      ]
    },
    {
      id: "doc-video",
      title: "Video Calls",
      summary: "Start, rejoin and end your video or audio consultations.",
      keywords: "video call audio consultation start rejoin end today upcoming",
      body: [
        ["p", "Every confirmed video or audio appointment is listed here — **Today's Calls** first, then **Upcoming**."],
        ["h", "What you can do"],
        ["ul", [
          "**Start Call** (video) or **Start Audio**. The patient is notified and joins from their dashboard.",
          "**Rejoin** if your connection dropped, and **End Call** when you finish.",
          "Search by patient name or date."
        ]],
        ["h", "Example"],
        ["p", "At 10:00 Dr Owusu taps **Start Call** for Kwame. Halfway through, his Wi-Fi drops; he reconnects and taps **Rejoin**, and Kwame is still in the room. When they finish, he ends the call and marks the appointment completed."]
      ]
    },
    {
      id: "doc-messages",
      title: "Messages",
      summary: "Private chat with each patient — text, images, files and voice notes.",
      keywords: "messages chat patient voice note image file attachment",
      body: [
        ["p", "One conversation per patient. Pick a patient on the left to open it."],
        ["ul", [
          "Send **text**, **images** and **files**, or hold the microphone to record a **voice note** (release to send).",
          "Download anything the patient sends you.",
          "Search your patient list."
        ]],
        ["h", "Example"],
        ["p", "After a consultation, Efua sends a photo of a rash that appeared on her arm. Dr Asante views it in Messages, replies that it looks like a mild reaction, and asks her to stop the new cream and send another photo in two days."]
      ]
    },
    {
      id: "doc-notes",
      title: "Notes",
      summary: "Write and find your consultation notes, from scratch or from a template.",
      keywords: "notes consultation note follow-up referral template clinical documentation",
      body: [
        ["p", "Your clinical notes for every patient, in one searchable place."],
        ["ul", [
          "**New Note** — choose the patient, the type (Consultation, Follow-up, Prescription, Referral, General), a title, and write the note.",
          "Start faster from a **template** (for example Hypertension follow-up, Diabetes management, Respiratory infection, Paediatric consultation) and **Apply** it, then edit.",
          "**Edit** a note later, and **search** by title, patient or content."
        ]],
        ["h", "Example"],
        ["p", "After seeing Kofi for his diabetes review, Dr Mensah applies the Diabetes Management template, fills in his sugar readings and the change to his metformin dose, and saves it. Next visit she searches “Kofi” and has it in seconds."]
      ]
    },
    {
      id: "doc-prescriptions",
      title: "Prescriptions",
      summary: "Write e-prescriptions with safety checks, send them to a pharmacy, and handle pharmacy substitutions.",
      keywords: "prescription e-prescription medication drug dosage pharmacy branch route open to all refill substitution alternative reassign print",
      body: [
        ["p", "Every prescription you write is checked for safety, gets a unique reference code for pickup, and goes digitally to a pharmacy."],
        ["h", "Writing a prescription"],
        ["steps", [
          "Tap **New Prescription** and choose the patient.",
          "Enter the **diagnosis** (required) and, if needed, a follow-up date.",
          "**Add Drug** for each medicine: name, form (tablet, syrup, injection, cream, drops, inhaler, patch, suppository…), strength, dosage, frequency, duration, quantity and refills. Each form asks for the details that matter (for example injection site, inhaler spacer).",
          "Read any **Safety Warnings** before going on — for example the patient is allergic to the drug, or two drugs are known to interact.",
          "Choose where it goes: a specific **pharmacy branch**, or **Open to all pharmacies** so the patient can pick.",
          "Save. The patient sees it with a **pickup code**."
        ]],
        ["h", "After it is sent"],
        ["ul", [
          "Follow its **status**: Sent → Accepted → Partial / Ready → Delivered.",
          "If the pharmacy suggests **alternative drugs** (a medicine is out of stock), review each one and **Approve** or **Reject**.",
          "**Reassign** drugs a branch does not have to another branch.",
          "**Edit** or delete until it is delivered; **Print** a copy."
        ]],
        ["h", "Example"],
        ["p", "Dr Owusu prescribes amoxicillin and paracetamol for Abena and sends it to the pharmacy branch near her home. The pharmacy has no amoxicillin syrup and suggests capsules instead; Dr Owusu approves the substitution, and Abena collects her medicine the same afternoon with her pickup code."]
      ]
    },
    {
      id: "doc-prescription-requests",
      title: "Prescription Requests",
      summary: "Refill and new-prescription requests from patients — approve, ask, decline or close.",
      keywords: "prescription request refill repeat approve decline ask patient duplicate",
      body: [
        ["p", "Patients can ask you for a refill or a new prescription without booking. Each request shows what they asked for, a **safety check**, and their **previous prescriptions**."],
        ["ul", [
          "**Approve** — opens the prescription form, already filled in, for you to check and send.",
          "**Ask the patient** a question first.",
          "**Decline** with a reason (for example “please book a consultation first”).",
          "**Close as duplicate** if they asked twice."
        ]],
        ["warn", "If a request's wording suggests an emergency or self-harm, it is flagged at the top. The patient was already shown emergency guidance — please contact them directly."],
        ["h", "Example"],
        ["p", "Yaw asks for a refill of his asthma inhaler. The safety check is clear and he had the same inhaler two months ago, so Dr Asante taps Approve, confirms the form and sends it — Yaw gets a pickup code within minutes."]
      ]
    },
    {
      id: "doc-care-plans",
      title: "Care Plans",
      summary: "Write a plan for a patient — medicines, activities, things to monitor, tests and follow-up — and share it once you approve it.",
      keywords: "care plan treatment plan goals activities monitor tests follow-up share approve draft",
      body: [
        ["p", "A care plan tells the patient, in plain words, what to do between visits."],
        ["steps", [
          "Choose the patient and write **your instructions** — what they should do.",
          "The plan is laid out in sections: **Medications** (what, when, notes), **Activities**, **To monitor**, **Tests** and **Follow-up**.",
          "Check **What the patient will read** — the only part they see. Use **Plainer words** or **Add explanation** (for example “explain hypertension”) to make it clearer.",
          "**Save as draft**, or **Approve and share with patient**."
        ]],
        ["h", "Example"],
        ["p", "For newly diagnosed Akosua, Dr Mensah writes: take the tablet every morning, walk 30 minutes a day, cut down salt, check blood pressure twice a week, repeat bloods in 6 weeks. She adds a short explanation of high blood pressure, approves it, and Akosua sees the plan in her app."]
      ]
    },
    {
      id: "doc-documents",
      title: "Documents",
      summary: "Letters, medical certificates, discharge instructions and appointment summaries — drafted from your details, signed off by you.",
      keywords: "documents letter sick note medical certificate discharge instructions appointment summary print file",
      body: [
        ["p", "Choose the patient and the document type — **Letter**, **Medical certificate**, **Discharge instructions** or **Appointment summary** — and enter your details. A draft is prepared from what you wrote only; you are the author and check every line."],
        ["ul", [
          "**Print** it, or **File to patient's record** so it appears with their documents."
        ]],
        ["h", "Example"],
        ["p", "Kwabena needs a sick note for work. Dr Owusu picks Medical certificate, enters “unfit for work 3 days, acute gastroenteritis”, reads the draft, files it to Kwabena's record and prints a copy."]
      ]
    },
    {
      id: "doc-referrals",
      title: "Referrals",
      summary: "Ask a specialist to see your patient for one problem — the patient stays yours.",
      keywords: "referral refer specialist packet send email cardiology neurology sent received",
      body: [
        ["p", "A **referral** asks another clinician to help with a specific problem. Your patient remains your patient, and their appointments with you do not change. (To hand the patient over completely, use **Transfers** instead.)"],
        ["steps", [
          "Choose the patient and the **specialty** (for example Cardiology).",
          "Write **why you are referring** — required, and in your own words.",
          "NessaHub gathers **the packet** from the record — the history, medicines, results and notes relevant to your reason. Read it and edit anything before it goes.",
          "Choose where it goes: a **clinician on NessaHub** (search by name or specialty) or an **email address** for a specialist outside NessaHub.",
          "**Submit referral**, or **Save as draft**."
        ]],
        ["p", "The **Sent** tab lists referrals you made; **Received** lists ones sent to you."],
        ["h", "Example"],
        ["p", "Ama has had headaches and blurred vision for three weeks. Dr Asante refers her to Neurology with the reason “headaches and blurred vision for 3 weeks, please assess”. The packet includes her blood pressure readings and current medicines. A neurologist on NessaHub receives it and sees Ama — and Ama keeps Dr Asante as her doctor."]
      ]
    },
    {
      id: "doc-transfers",
      title: "Transfers",
      summary: "Hand a patient's care to another clinician, with the patient's consent — and answer transfers sent to you.",
      keywords: "transfer hand over care another doctor consent accept decline redirect reassign",
      body: [
        ["p", "A **transfer** moves the patient to another clinician for good: they become that clinician's patient and their upcoming appointments move too. Start one from the patient's record (**Transfer patient**)."],
        ["h", "How a transfer goes"],
        ["steps", [
          "You choose the new clinician (suggestions are offered).",
          "The **patient is asked to consent** — they get reminders if they do not answer.",
          "The receiving clinician has **24 hours** to **Accept** or **Decline** (a note is required to decline).",
          "If declined, you choose someone else; if nobody is chosen in time NessaHub reassigns automatically, and alerts its team if no suitable clinician is free.",
          "When accepted, the transfer completes and upcoming appointments move."
        ]],
        ["p", "Tabs: **Needs your decision** (transfers sent to you), **Sent** (yours, still open) and **History**. Each shows a timeline of every step."],
        ["h", "Example"],
        ["p", "Dr Mensah is starting six months of leave. She transfers Kwesi to Dr Boateng. Kwesi consents in his app, Dr Boateng accepts the next morning, and Kwesi's two upcoming appointments move to Dr Boateng automatically."]
      ]
    },
    {
      id: "doc-tests",
      title: "Order Lab / Scan and Lab & Scan Results",
      summary: "Order a test at a lab or scan centre, then review the results and add your interpretation.",
      keywords: "lab test scan imaging order diagnostic results report findings check-in code centre",
      body: [
        ["h", "Ordering a test"],
        ["steps", [
          "Choose **Laboratory Test** or **Imaging / Scan**.",
          "Select the patient and the test (or add your own test name).",
          "Choose the **centre** — sorted by distance from the patient.",
          "Add clinical notes or special instructions, review and submit."
        ]],
        ["p", "The patient receives a **QR code and 8-digit check-in code** in their app (and by SMS if their phone is verified). The centre checks them in with it before the test."],
        ["h", "Reviewing results"],
        ["ul", [
          "Results appear once the centre uploads them: findings, conclusion, technician note and any attachment.",
          "Add **your clinical note** (interpretation and next steps), then share with the patient.",
          "Filter by Results Ready or Not yet shared; search by patient, test or centre."
        ]],
        ["h", "Example"],
        ["p", "Dr Owusu orders a full blood count for Adjoa at a lab 2 km from her home. Adjoa shows her check-in code the next morning. That evening the result is ready; Dr Owusu notes “mild anaemia — start iron, recheck in 8 weeks” and shares it with her."]
      ]
    },
    {
      id: "doc-check-ins",
      title: "Check-ins",
      summary: "Ask a patient a question between appointments and follow their answers over time.",
      keywords: "check-in follow-up question symptoms medication sleep mood between appointments series",
      body: [
        ["steps", [
          "Tap **New check-in**, choose the patient and write your question — they see it exactly as written. Templates are offered: symptom rating, medication, sleep, mood, coping.",
          "Choose when to ask (in 1 to 30 days), and optionally a **Track as** label (for example “headache”). Reusing the label lets you see the answers as a series over time.",
          "Follow each check-in as **Waiting**, **Answered** or **Overdue**, and **Ask this again** when you want a new reading."
        ]],
        ["h", "Example"],
        ["p", "After starting Kofi on a new blood-pressure tablet, Dr Mensah sends a check-in in 7 days: “Any dizziness or side effects since starting the new tablet?”, tracked as “BP side effects”. She asks it again each week, and three answers show the dizziness fading, so she keeps the dose."]
      ]
    },
    {
      id: "doc-earnings",
      title: "Earnings",
      summary: "What you have earned, what is being paid out, refunds, and where your money goes.",
      keywords: "earnings payout fees refunds mobile money bank account payout details",
      body: [
        ["ul", [
          "**Next payout**, **Pending**, **Being sent** and **Paid to you so far**.",
          "**Bookings** and **Payouts** lists, and **Refund adjustments** for refunds on bookings that were already paid out to you.",
          "**Where we pay you** — mobile money or bank account. Changing it pauses payouts until NessaHub's finance team confirms the change, and you are emailed every time it changes."
        ]],
        ["h", "Example"],
        ["p", "Dr Asante sees GHS 2,400 pending for this period. One patient was refunded after a cancelled visit, shown as a refund adjustment. He switches his payouts from mobile money to his bank account; payouts pause briefly until finance confirms, then resume."]
      ]
    },
    {
      id: "doc-engagement",
      title: "Wellness, Promotions and Offers on my fee",
      summary: "Send wellness messages to your patients, and decide on promotions that feature you or discount your fee.",
      keywords: "wellness message promotions offers fee discount approve decline marketing",
      body: [
        ["ul", [
          "**Wellness** — write a message (title, subject, message) and send it to your patients, for example a monthly health tip. Earlier messages are kept under **Previously sent**.",
          "**Promotions** — offers NessaHub would like to send to clients featuring you. Nothing is sent unless you approve it.",
          "**Offers on my fee** — proposed discounts on your fee. Approve or decline (you can say why); approved ones show as **Live now**."
        ]],
        ["h", "Example"],
        ["p", "Before the rainy season Dr Owusu sends a wellness message on preventing malaria. The same week NessaHub proposes 20% off first consultations for a month; he approves it, and it goes live."]
      ]
    },
    {
      id: "doc-feedback",
      title: "Patient Feedback, Reviews and Analytics",
      summary: "What patients say about you, your replies, and how your practice is doing.",
      keywords: "reviews rating feedback survey reply analytics earnings appointments statistics",
      body: [
        ["ul", [
          "**Patient Feedback** — anonymous results from NessaHub feedback surveys.",
          "**Reviews** — patients' ratings and comments after consultations, with a rating overview. You can **Reply** to each.",
          "**Analytics** — total earnings, appointments and patients; appointments and earnings by month; status breakdown (completed, cancelled, pending) and consultation types."
        ]],
        ["h", "Example"],
        ["p", "Dr Mensah gets a 3-star review saying the call started late. She replies to apologise and explain. In Analytics she notices more cancellations on Mondays, and moves her Monday availability later in the day."]
      ]
    },
    {
      id: "doc-insurance",
      title: "Insurer approvals",
      summary: "Ask an insurer to approve a treatment, answer their questions, and follow your claims.",
      keywords: "insurance pre-authorisation preauth approval claim insurer query diagnosis icd-10",
      body: [
        ["p", "Some treatments need the insurer's approval first (pre-authorisation)."],
        ["steps", [
          "Check the patient's **insurance card** is verified.",
          "Say **what you are asking for** — each medicine or service, with code and price — the **diagnosis** (ICD-10 code and words) and the **clinical reason** (required: why it is needed, what was tried, relevant results).",
          "**Send for verification**. If the insurer queries it, you see **The insurer asks** — write your answer and attach supporting documents.",
          "Follow each claim: In progress, Queried — answer needed, Approved awaiting payment, Paid, or Rejected."
        ]],
        ["h", "Example"],
        ["p", "Kojo needs an MRI. Dr Asante requests approval from Kojo's insurer with the diagnosis and the reason (“persistent back pain with leg weakness, no improvement after 6 weeks of treatment”). The insurer asks for the X-ray report; he attaches it, and the MRI is approved the next day."]
      ]
    },
    {
      id: "doc-assistant-notifications",
      title: "NessaHub Assistant and Notifications",
      summary: "Your AI helper for your own work, and every alert NessaHub has sent you.",
      keywords: "assistant ai notifications alerts email push preferences",
      body: [
        ["ul", [
          "**NessaHub Assistant** — ask about your schedule or caseload, get summaries and drafting help. Type, or tap the headset to talk to it (see “Talking to the assistant”). It never diagnoses or prescribes, and anything it drafts is yours to check.",
          "**Notifications** — everything NessaHub has told you (appointments, payments, health, system), and **How we contact you**: email, push, wellness and marketing emails."
        ]],
        ["h", "Example"],
        ["p", "Between patients Dr Owusu taps the headset and asks “Who do I have this afternoon?” — the assistant reads out his three appointments. He then turns off marketing emails in Notifications."]
      ]
    },
    {
      id: "doc-settings",
      title: "Settings and Report Issue",
      summary: "Your profile, fee, availability, licence and security — and how to raise a problem.",
      keywords: "settings profile fee availability slots licence security report issue complaint",
      body: [
        ["h", "Settings"],
        ["ul", [
          "**Profile** — photo, name, specialisation, years of experience, languages, about you, and your location.",
          "**Professional details** — consultation fee (GHS), consultation types, and your **licence** (licensing body, number, document).",
          "**Availability** — add dates with start and end times; they become the slots patients can book. Booked slots are shown.",
          "**Security**, **Notifications** and **Legal**."
        ]],
        ["h", "Report Issue"],
        ["p", "Send a complaint, incident or feedback straight to NessaHub's administrators: choose a category and severity, write the details, and follow the status (Open, In progress, Resolved, Closed) and the admin's response under **My Reports**."],
        ["h", "Example"],
        ["p", "Dr Mensah adds next week's availability: Monday to Wednesday, 9:00 to 13:00. Patients can now book those slots. She also reports that a lab's results are arriving without attachments; the admin replies two hours later that it is fixed."]
      ]
    }
  ]
});
