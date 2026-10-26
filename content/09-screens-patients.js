/*
 * Screen by screen — the therapy client and medical patient dashboards.
 * Same block format as content/01-start.js.
 */
window.GUIDE = window.GUIDE || { chapters: [] };

window.GUIDE.chapters.push(
  {
    id: "client-screens",
    group: "Screen by screen",
    icon: "heart",
    title: "Therapy client dashboard, screen by screen",
    tagline: "Every screen a therapy client uses — therapy, couples, teen and psychiatry — explained with examples.",
    articles: [
      {
        id: "cl-home",
        title: "Home",
        summary: "Your therapist, your next session, a daily check-in, your progress and a calendar you can book from.",
        keywords: "client home therapist next session join daily check-in mood journal progress calendar crisis help",
        body: [
          ["h", "What you see"],
          ["ul", [
            "**Your therapist**, with Message and Log mood — or, if you have not chosen one yet, **Find a Therapist** to browse therapists and their session rates.",
            "**Next session** with **Join session**, or **Book a session** if nothing is booked.",
            "**Daily check-in** — “How are you today?”",
            "**Your progress** — sessions completed, progress score, goals achieved, days active, and charts of your mood and therapy progress.",
            "**Recent activities**, your **prescriptions** (psychiatry), and a **calendar**.",
            "**Need help now?** — Ghana crisis lines, available 24/7.",
            "For couples, a **Couple therapy** card with your shared status, payment and therapist matching."
          ]],
          ["h", "What you can do"],
          ["ul", [
            "**Log your mood**: pick how you feel (very sad to very happy, anxious, tired, frustrated…), write about your day, something positive and anything difficult. Your therapist can see it.",
            "**Tap a date on the calendar** to book a session on that day, or to see what is already booked.",
            "**Get help** opens the crisis contacts: National Emergency 112, National Ambulance 193, the Mental Health Authority helpline, suicide prevention and Accra Psychiatric Hospital."
          ]],
          ["h", "Example"],
          ["p", "Kojo opens the app in the evening. Home shows his next session is Thursday at 6 pm. He logs his mood as “Anxious” and writes that work was stressful. His therapist sees the entry before Thursday and starts the session by asking about it."]
        ]
      },
      {
        id: "cl-therapist",
        title: "Therapist (messages)",
        summary: "Private chat with your therapist — text, images, videos and documents.",
        keywords: "therapist messages chat attachment file image video",
        body: [
          ["p", "Your conversation with your assigned therapist. Send text, images, videos, PDFs, Word documents or text files (up to 10 MB). If you have no therapist yet, you are asked to finish the questionnaire and choose one first."],
          ["h", "Example"],
          ["p", "Akosua's session is tomorrow but she has to travel. She messages her therapist to ask if they can meet by video from her hotel instead; the therapist replies yes."]
        ]
      },
      {
        id: "cl-schedule",
        title: "Schedule and Calendar",
        summary: "Book sessions with your therapist, see your sessions, rate your therapist, or ask for a different one.",
        keywords: "schedule session book video call therapist calendar availability rate review request new therapist report",
        body: [
          ["h", "Booking a session"],
          ["steps", [
            "Tap **Schedule Call** (or tap a free day on the Calendar or Home).",
            "Pick the **date** — **View Therapist Calendar** shows which days your therapist is free (green) or busy (red).",
            "Pick a **time**, the **duration**, and add notes about what you want to talk about.",
            "Submit. The session shows **Awaiting therapist confirmation** until your therapist accepts it."
          ]],
          ["h", "Your sessions"],
          ["ul", [
            "Every session with date, time, duration, status and notes. **Join** when it is time.",
            "**Edit** a session — change the date, time, duration or notes — any time until the cut-off before it starts (set by NessaHub; you are told if it has passed). A new time goes back to your therapist to confirm.",
            "The **Calendar** shows your sessions by month; tap a day to see its sessions or **Book another**."
          ]],
          ["h", "Your therapist"],
          ["ul", [
            "**Therapist Details** — about your therapist.",
            "**Rate & Review** — a rating, title and comment, optionally linked to a session, and optionally anonymous.",
            "**Request New Therapist** — choose a reason (personality mismatch, communication, scheduling, a different approach…) and a preferred therapist type. NessaHub reviews it and gets back to you.",
            "**Report This Therapist** — for unprofessional behaviour, inappropriate conduct, privacy violations and similar, with a severity."
          ]],
          ["h", "Example"],
          ["p", "Esi opens the therapist calendar, sees Wednesday is green, and requests 7 pm for 50 minutes with the note “I want to talk about my sleep”. Her therapist confirms within the hour, and Esi joins from the Schedule screen on Wednesday."]
        ]
      },
      {
        id: "cl-resources",
        title: "Resources",
        summary: "Worksheets, books, videos and files from your therapist — complete worksheets and read their feedback.",
        keywords: "resources worksheet homework therapy book video download answers feedback favourites",
        body: [
          ["ul", [
            "Everything your therapist shared: **worksheets**, **therapy books**, **notes** they chose to share, **videos**, **files** and **links**.",
            "Open a worksheet, read the goal and instructions, answer each question and submit. When your therapist responds you see **Therapist Feedback** under your answers.",
            "Download as PDF, watch videos, add favourites, and search."
          ]],
          ["h", "Example"],
          ["p", "Kofi's therapist assigns a Thought Record worksheet. Each time he feels overwhelmed that week, Kofi opens it and writes the situation, the thought and how strongly he felt it. Before their next session the therapist leaves feedback on his entries."]
        ]
      },
      {
        id: "cl-care",
        title: "Wellness, My Care Plan, My Care and My Records",
        summary: "Messages from your therapist, your plan, medication reminders and weekly check-ins, and a searchable record.",
        keywords: "wellness messages care plan my care medication reminders weekly check-in my records search timeline",
        body: [
          ["ul", [
            "**Wellness** — every wellness message your therapist has sent you, to re-read any time.",
            "**My Care Plan** — the plan your therapist wrote with you: goals and next steps.",
            "**My Care** — **medication reminders** (choose a medicine from your prescriptions and the times; you are reminded in the app and by email, and mark each dose Taken, Missed or Skipped), your **weekly check-in** (sleep, mood, anxiety, stress, energy, medication, anything important — every question is optional), questions from your care team, and upcoming follow-ups where you can say “I'll be there” or “I can't make it”.",
            "**My Records** — search everything in your record, for example “everything about sleep”, or browse the timeline and filter by type."
          ]],
          ["h", "Example"],
          ["p", "Yaw's psychiatrist prescribes a tablet to take every night. In My Care, Yaw sets a reminder for 9 pm. Each night he taps **Taken**, and on Sunday he answers his weekly check-in, saying his sleep has improved to 7 hours."]
        ]
      },
      {
        id: "cl-psychiatry",
        title: "Prescriptions, E-Pharmacy, Lab & Scan and Health Timeline (psychiatry clients)",
        summary: "If you see a psychiatrist, you also get the medicine and test screens patients have.",
        keywords: "psychiatry client prescriptions e-pharmacy pharmacy lab scan timeline pickup code",
        body: [
          ["p", "These four screens appear for clients on the psychiatry track and work exactly as for medical patients — see “Medical patient dashboard, screen by screen”: your prescriptions and pickup codes, pharmacies and prescription status, tests ordered with your check-in code, and every event of your care in date order."]
        ]
      },
      {
        id: "cl-account",
        title: "Billing, Insurance, Notifications, Settings, Support and Report Issue",
        summary: "Payments and invoices, your insurance cards, alerts, your profile and privacy, and getting help.",
        keywords: "billing invoices payments insurance card settings privacy profile visibility consents delete account support rate session report issue faq",
        body: [
          ["ul", [
            "**Billing** — total paid, outstanding, payment methods, and billing history you can filter and download invoices from.",
            "**Insurance** — add your insurance card (member number, name, date of birth) and agree to share claim details with your insurer; see whether it is verified, your balance, where to use it, approvals and claim receipts. You can withdraw sharing any time.",
            "**Notifications** — everything NessaHub has sent you, and how you want to be contacted.",
            "**Settings** — basic information, therapy details and preferences (therapist gender, style, faith, language), health information, password, **privacy** (who can see your profile; whether your therapist sees your mood and progress), **consents** (what you agreed to and when), and closing your account.",
            "**Support** — crisis contacts, **Rate Session**, report an issue or track an incident report, support tickets and FAQs.",
            "**Report Issue** — send a problem straight to NessaHub's administrators."
          ]],
          ["h", "Example"],
          ["p", "Adjoa wants only her therapist to see her profile, so in Settings → Privacy she keeps **Therapist Only** and leaves progress sharing on. Later she rates her last session 5 stars from Support."]
        ]
      }
    ]
  },
  {
    id: "patient-screens",
    group: "Screen by screen",
    icon: "stethoscope",
    title: "Medical patient dashboard, screen by screen",
    tagline: "Every screen a medical patient uses — appointments, prescriptions, tests, records and more — with examples.",
    articles: [
      {
        id: "pt-home",
        title: "Home",
        summary: "Your next appointment, your doctor, vitals, a daily check-in and a calendar you can book from.",
        keywords: "patient home next appointment join call vitals daily check-in tell your doctor complaint care team calendar",
        body: [
          ["h", "What you see"],
          ["ul", [
            "**Next appointment** (video, audio or chat) with **Join Call**, and **Upcoming appointments**.",
            "**Your doctor** and **My care team** — or **Find a Doctor** if you have none yet.",
            "Counts: pending, upcoming, active, awaiting confirmation, completed and total; your **prescriptions**.",
            "**Your vitals**, **Mood & pain trend** from your daily check-ins, and an appointment breakdown.",
            "**Quick actions** to every section, **Recent activity**, and **My appointments calendar**."
          ]],
          ["h", "What you can do"],
          ["ul", [
            "**Record your vitals** — blood pressure (systolic/diastolic), heart rate, SpO2, respiratory rate, temperature.",
            "**Daily check-in** — how you feel, pain level (0–10), symptoms today, medicines taken and notes. Your doctor sees it.",
            "**Tell your doctor what's wrong** before a consultation — main complaint, how long, severity (1–10) and other symptoms.",
            "**Tap a date on the calendar** — a booked day shows its appointment; a free day from today on opens booking on that date."
          ]],
          ["h", "Example"],
          ["p", "Kwame has a video appointment tomorrow. Tonight he records his blood pressure (145/92) and fills in “Tell your doctor what's wrong”: headaches for 2 weeks, severity 6. Tomorrow his doctor already has all of it when the call starts."]
        ]
      },
      {
        id: "pt-appointments",
        title: "Appointments and Video Calls",
        summary: "Book, see and join your consultations.",
        keywords: "appointments book doctor calendar availability join video call audio chat reason",
        body: [
          ["h", "Booking"],
          ["steps", [
            "Tap **Book Appointment**, or tap a free date on the calendar.",
            "Choose **one of your doctors** (if you have none, you are sent to find one). **View Doctor's Calendar** shows free (green) and busy (red/orange) days.",
            "Choose the time, the **type** — video, audio or chat — and describe the reason.",
            "Submit. It shows as pending until the doctor confirms."
          ]],
          ["h", "Afterwards"],
          ["ul", [
            "**Appointments** lists everything (list or calendar view). From each: **Join Call**, **Message Doctor** or **Book Another Slot**.",
            "**Video Calls** shows upcoming calls (**Join Now** when it is time; “awaiting confirmation” until the doctor accepts) and past calls."
          ]],
          ["h", "Example"],
          ["p", "Abena taps Friday on her calendar, chooses Dr Mensah, picks 11:00, chooses Video and writes “follow-up on blood test results”. Dr Mensah confirms, and on Friday Abena taps **Join Now**."]
        ]
      },
      {
        id: "pt-messages",
        title: "Messages",
        summary: "Chat with your doctors — text, files and voice notes.",
        keywords: "messages doctor chat voice note file",
        body: [
          ["p", "Pick a doctor on the left to open your conversation. Send text or files, or hold the microphone for a **voice note** (release to send). Download anything your doctor sends."],
          ["h", "Example"],
          ["p", "Two days after starting a new medicine, Kofi feels dizzy. He sends his doctor a voice note describing it; his doctor replies to take it at night instead and to call if it gets worse."]
        ]
      },
      {
        id: "pt-prescriptions",
        title: "Prescriptions and E-Pharmacy",
        summary: "Your prescriptions and pickup codes, where they are, and the pharmacies you use.",
        keywords: "prescriptions pickup code e-pharmacy pharmacy status ready for pickup delivered substitution browse pharmacies",
        body: [
          ["h", "Prescriptions"],
          ["ul", [
            "Each prescription with its medicines — dosage, frequency, duration, quantity and instructions — marked **Active** or **Completed**.",
            "Tap the circle to **mark it completed** when you finish the course. If you stopped early or had side effects, tell your doctor first."
          ]],
          ["h", "E-Pharmacy"],
          ["ul", [
            "**My Prescriptions** — live status at the pharmacy: Sent to pharmacy, Processing, Partial, **Ready for pickup**, Delivered. If a medicine is unavailable and an alternative is suggested, you can **Agree** or **Reject**.",
            "**My Pharmacies** — pharmacies you saved, or that your doctor added for you.",
            "**Browse Pharmacies** — search by name or location and add one."
          ]],
          ["h", "Example"],
          ["p", "Akua's prescription goes to her saved pharmacy. An hour later E-Pharmacy shows **Ready for pickup**. She goes in, shows her pickup code, and collects her medicine."]
        ]
      },
      {
        id: "pt-tests",
        title: "Lab & Scan Orders",
        summary: "Tests your doctor ordered, your check-in code, and when results are ready.",
        keywords: "lab test scan order check-in code qr results pending visit centre",
        body: [
          ["ul", [
            "Every test ordered for you, filtered by **Lab tests**, **Scan orders** or **Pending**, with your doctor's instructions.",
            "Open an order to show its **QR code or 8-digit check-in code** at the lab or scan centre. Bring your ID too.",
            "Follow the status: Pending (visit the centre) → Sample taken / Scan booked → Test in progress → Completed (your doctor is reviewing the result). You are notified here and by email when your doctor shares the result, with findings and conclusion."
          ]],
          ["h", "Example"],
          ["p", "Esi's doctor orders a fasting blood sugar test. The next morning she goes to the lab and shows the 8-digit code on her phone; the lab checks her in. Two days later she is notified that her doctor has shared the result with a note."]
        ]
      },
      {
        id: "pt-records",
        title: "Health Timeline, Medical History, Health Records and My Records",
        summary: "Everything about your health in one place, and the documents you upload.",
        keywords: "health timeline medical history health records upload documents lab results imaging allergies blood type my records search",
        body: [
          ["ul", [
            "**Health Timeline** — appointments, prescriptions, lab and scan orders and results, and pharmacy events in date order. Filter by Lab, Scan, Rx or Appointments.",
            "**Medical History** — past consultations, prescriptions, allergies, blood type, height, weight, chronic conditions, and documents.",
            "**Health Records** — upload your own documents (lab results, imaging, reports): name, date, type(s), the file and notes — so your doctor has the full picture.",
            "**My Records** — search your whole record, for example “everything about blood pressure”."
          ]],
          ["h", "Example"],
          ["p", "Kwabena had an X-ray at a hospital outside NessaHub. He uploads the report in Health Records as “Chest X-ray – May”. At his next consultation, his NessaHub doctor reads it in his record."]
        ]
      },
      {
        id: "pt-care",
        title: "My Care Plan, My Care and Wellness",
        summary: "Your doctor's plan, medication reminders and check-ins, and wellness messages.",
        keywords: "care plan my care medication reminders check-ins follow-ups wellness",
        body: [
          ["p", "**My Care Plan** shows the plan your doctor wrote for you. **My Care** has medication reminders (in the app and by email; mark doses Taken, Missed or Skipped), check-in questions from your doctor, and upcoming follow-ups. **Wellness** keeps the wellness messages your doctor sends."],
          ["h", "Example"],
          ["p", "Ama's care plan says to check her blood pressure twice a week. Her doctor also sends a check-in every Friday asking for the readings; Ama answers it in My Care in under a minute."]
        ]
      },
      {
        id: "pt-account",
        title: "Billing, Insurance, Emergency Contacts, Settings and Support",
        summary: "Invoices, your cover, who to call in an emergency, your profile and data, and getting help.",
        keywords: "billing invoices insurance emergency contacts settings profile allergies emergency medical notes data download discharge support report doctor",
        body: [
          ["ul", [
            "**Billing** — total billed, completed visits, outstanding, invoice history.",
            "**Insurance** — your insurance cards (verified with connected insurers), and other cover details your care team can see.",
            "**Emergency Contacts** — people your doctor can reach in an emergency: name, relationship, phone, email.",
            "**Settings (My Profile)** — personal and health information (blood type, allergies), password and two-step sign-in, **data sharing permissions**, **download your data**, **emergency medical notes** (for example “Asthmatic — uses Ventolin”) and preferred hospital, billing, legal, and a **self-discharge request** if you want to leave your doctor's care (your doctor is notified).",
            "**Support & Report** — send a support ticket (reply by email within 24–48 hours) or report a doctor, a bug, a billing, account or appointment issue."
          ]],
          ["h", "Example"],
          ["p", "Kojo is asthmatic. In Settings → Emergency he writes “Asthmatic — uses Ventolin inhaler” and adds his sister as an emergency contact, so any doctor treating him sees it straight away."]
        ]
      }
    ]
  }
);
