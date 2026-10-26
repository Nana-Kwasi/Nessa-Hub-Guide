window.GUIDE = window.GUIDE || { chapters: [] };

window.GUIDE.chapters.push(
  {
    id: "prescriptions",
    group: "For patients & clients",
    icon: "pill",
    title: "Prescriptions & e-pharmacy",
    tagline: "From the prescription to the medicine in your hand.",
    articles: [
      {
        id: "how-prescriptions-work",
        title: "How e-prescriptions work",
        summary: "Your clinician prescribes in NessaHub; the prescription goes to a pharmacy with a secure pickup code.",
        keywords: "prescription rx medicine pharmacy e-pharmacy pickup code qr",
        body: [
          ["p", "When a doctor or psychiatrist prescribes, the prescription is created in NessaHub. Before it is issued, NessaHub checks it against the formulary and warns the prescriber about safety issues, which they must acknowledge before continuing."],
          ["h", "Two ways a prescription reaches a pharmacy"],
          ["table", ["Type", "How it works"], [
            ["Routed", "Sent to one chosen pharmacy branch. The branch confirms availability, may suggest an alternative, may transfer it to another of its branches, and gets it ready."],
            ["Open to all NessaHub pharmacies", "Any NessaHub pharmacy can take it. The first pharmacy to take it holds it (for 24 hours by default) while it is dispensed; if the hold lapses it reopens for others."]
          ]],
          ["h", "Your pickup code"],
          ["p", "Every prescription has a **QR code and an 8-digit code**. You can see them on your Prescriptions screen at any time, and receive the code by SMS if your phone number is verified. Show the code at the pharmacy counter; the pharmacist verifies it before handing over your medicine."],
          ["warn", "Treat the pickup code like money. Only show it at the pharmacy when you collect."],
          ["h", "Validity"],
          ["p", "Prescriptions are valid for a set number of days (30 by default). After that they expire and you need a new one."]
        ]
      },
      {
        id: "prescription-status",
        title: "Tracking your prescription",
        summary: "What each prescription status means.",
        keywords: "status available alternative partial ready delivered",
        body: [
          ["table", ["Status", "Meaning"], [
            ["Sent to pharmacy / Pending", "The pharmacy has received it and is checking stock."],
            ["Available", "Everything is in stock."],
            ["Not available", "The pharmacy cannot supply it."],
            ["Alternative suggested", "The pharmacy proposed an alternative medicine; your prescriber or you approve it."],
            ["Approved alternative", "The alternative was approved."],
            ["Processing", "The pharmacy is preparing it."],
            ["Partial", "Some items were handed over; the rest are still to come."],
            ["Ready for pickup", "Collect it with your code."],
            ["Delivered", "You have your medicine."]
          ]],
          ["p", "In E-Pharmacy you also have **My Prescriptions**, **My Pharmacies** (pharmacies you use) and **Browse Pharmacies**."]
        ]
      },
      {
        id: "prescription-requests",
        title: "Asking for a refill or a new prescription",
        summary: "Request a refill or a new prescription in the app — or by SMS.",
        keywords: "refill repeat request new prescription sms my doctor",
        body: [
          ["p", "From your **Prescriptions** page, ask for a refill of an existing prescription or for a new one. NessaHub sends the request to the right clinician:"],
          ["table", ["Request", "Goes to"], [
            ["Refill of a named prescription", "The clinician who wrote it."],
            ["New request (medical patient)", "Your chosen **My doctor**."],
            ["Psychiatry client", "Your assigned psychiatrist (you choose if you have two)."],
            ["No doctor chosen yet", "You are asked to choose your doctor first — NessaHub never guesses."]
          ]],
          ["p", "Your clinician can approve it (which opens a normal prescription), ask you a question, decline it, or close it as a duplicate."],
          ["h", "Requesting by SMS"],
          ["p", "If SMS is enabled and your phone is verified, you can text **REFILL: …**, **NEW: …** or **HELP** to NessaHub’s number. A request is created with the same rules as the app and you get an acknowledgement. Nothing is ever prescribed from an SMS alone — a clinician always decides."],
          ["warn", "If a request mentions an emergency or self-harm it is marked **URGENT** and you are shown emergency guidance straight away."]
        ]
      },
      {
        id: "rx-link",
        title: "Prescription and test links (QR codes)",
        summary: "What happens when a QR code on a prescription or test order is scanned.",
        keywords: "rx link dx link qr scan verify token",
        body: [
          ["p", "The QR code on a prescription opens a secure NessaHub link (…/rx/…). A pharmacist uses it to verify the prescription. Lab and scan orders have similar links (…/dx/…) so a diagnostic centre can verify an order. The QR contains only a link — no medical details."]
        ]
      }
    ]
  },
  {
    id: "labs-scans",
    group: "For patients & clients",
    icon: "flask",
    title: "Lab tests & scans",
    tagline: "Tests ordered online, results back to your clinician.",
    articles: [
      {
        id: "lab-scan-patients",
        title: "Having a lab test or scan",
        summary: "Your clinician orders it, you visit the centre, and your clinician shares the result with you.",
        keywords: "lab test blood scan x-ray ultrasound mri results diagnostics",
        body: [
          ["steps", [
            "Your doctor or therapist orders a lab test or scan from their dashboard.",
            "You see the order under **Lab & Scan** with the centre to visit.",
            "Visit the centre. They check you in and take the sample or perform the scan.",
            "The result goes **first to the clinician who ordered it**.",
            "Once they have reviewed it, they share it with you along with a note."
          ]],
          ["table", ["Status you may see", "Meaning"], [
            ["Pending — visit the centre", "Go to the centre for your test."],
            ["Scan booked", "Your scan has a time — see the details."],
            ["Sample taken / Test in progress", "The lab is working on it."],
            ["Result ready", "Your clinician has the result and will share it."],
            ["Could not complete", "Contact your doctor."]
          ]]
        ]
      }
    ]
  },
  {
    id: "payments",
    group: "For patients & clients",
    icon: "card",
    title: "Payments, billing & insurance",
    tagline: "Paying for care, receipts, refunds, promotions and using your insurance.",
    articles: [
      {
        id: "paying",
        title: "Paying for care",
        summary: "Secure payment through Paystack with mobile money or card; receipts by email.",
        keywords: "pay payment paystack mobile money momo card receipt",
        body: [
          ["p", "Payments are made through **Paystack** with mobile money or card. NessaHub does not store your card or mobile-money PIN. You get a receipt by email, and every payment is listed under **Billing**."],
          ["p", "Before you pay you see a full breakdown of the fee, any discount and what your insurance covers."],
          ["h", "Billing"],
          ["ul", [
            "Billing history and receipts.",
            "Saved payment methods.",
            "Subscriptions, where a programme is billed regularly.",
            "Payments and refunds."
          ]]
        ]
      },
      {
        id: "refunds-promotions",
        title: "Refunds, promotions and free consultations",
        summary: "When you get money back, and how discounts work.",
        keywords: "refund cancel promotion discount promo free consultation offer",
        body: [
          ["p", "If an appointment is cancelled within the rules, the refund is shown in **Payments & refunds**. The full rules are in the Payments & Billing Policy."],
          ["p", "NessaHub runs **promotions** (for example a free first consultation) and clinicians can offer **discounts on their own fee**. The price you see already includes any offer you qualify for. Terms are in “Promotions, Discounts & Free Consultation Terms”."]
        ]
      },
      {
        id: "insurance",
        title: "Using your health insurance",
        summary: "Add your card, let NessaHub check cover, and confirm claims made in your name.",
        keywords: "insurance insurer cover claim pre-authorisation member card",
        body: [
          ["steps", [
            "Add your insurance card under **Insurance**.",
            "When you book, or when medicines or tests are about to be handed over, NessaHub checks your cover with your insurer.",
            "If your insurer requires **pre-authorisation**, it is requested for you and you are told the outcome.",
            "When a provider claims from your insurer for your care, you are asked to **confirm** you received it — this protects you against fraud."
          ]],
          ["note", "If you say a claimed service was not received, the insurer sees that and can investigate."]
        ]
      }
    ]
  },
  {
    id: "assistant",
    group: "Features everyone uses",
    icon: "bot",
    title: "NessaHub Assistant (AI)",
    tagline: "Help with questions, preparation and summaries — never a replacement for your clinician.",
    articles: [
      {
        id: "assistant-what",
        title: "What the assistant can do",
        summary: "Six tasks, each with clear limits on what it may read and who may use it.",
        keywords: "ai artificial intelligence assistant chatbot summary prepare",
        body: [
          ["table", ["Task", "Who can use it", "Uses your records?"], [
            ["Health question — general health information", "Everyone", "No"],
            ["Therapy preparation — prepare for your next session", "Patients (own data)", "Yes, yours only"],
            ["Second-opinion preparation — organise what to share", "Patients (own data)", "Yes, yours only"],
            ["Explain an instruction — explain what you were told in plain words", "Everyone", "No"],
            ["Clinical summary — summarise a patient’s record", "Clinicians only", "Yes"],
            ["Document summary — summarise a document you provide", "Everyone", "Only the document"]
          ]],
          ["p", "For clinicians the assistant also drafts notes, care plans, referrals and letters, suggests codes, prepares pre-session briefs and daily briefings, and highlights gaps in a record — always as drafts for the clinician to read, edit and approve."]
        ]
      },
      {
        id: "assistant-voice",
        title: "Talking to the assistant (voice conversation)",
        summary: "Tap the headset and just talk — the assistant listens, answers out loud, and you can interrupt it any time.",
        keywords: "voice conversation talk speak hands-free headset microphone mic orb listen read aloud speech interrupt dictation",
        body: [
          ["p", "Instead of typing, you can have a spoken conversation with the NessaHub Assistant. It works on the web and in the mobile app, everywhere the assistant appears: the patient, client, doctor and therapist assistant, and the **Ask AI** panel on pharmacy, lab, scan centre, facility and insurer dashboards."],
          ["h", "Start a voice conversation"],
          ["steps", [
            "Open the assistant (the **Ask AI** button, or **AI Assistant** in the menu).",
            "Tap the **headset** button next to the message box.",
            "Allow the microphone when your browser or phone asks. NessaHub only uses it while voice mode is open.",
            "Wait for **Listening…** under the orb, then speak naturally.",
            "Tap **End** to go back to typing. **Mute** pauses listening without leaving voice mode."
          ]],
          ["h", "How the conversation works"],
          ["ul", [
            "**It answers when you pause.** You don't need to press anything when you've finished speaking. If you stop mid-sentence (“If I take it with food,…”) it says “Mm-hmm” and keeps listening; if you only say “um…” it says “Take your time”.",
            "**It speaks as it thinks.** The reply is read out sentence by sentence while the rest is still being written, and the words on screen appear in step with the voice.",
            "**Long answers stay on screen.** After a short spoken part it says “I've put the rest on your screen”, so lists and figures can be read at your own pace.",
            "**You can interrupt.** Start talking while it speaks (or tap the orb) and it stops straight away. The text on screen stops where the voice did, and it answers your new question.",
            "**Health terms are read properly.** Blood pressure, doses (“500mg twice a day”), units and amounts in cedis are spoken as words, not symbols.",
            "**It tells you when it didn't hear.** If nothing clear was said it asks you to say it again; if the connection drops it says so, rather than guessing."
          ]],
          ["h", "Reading the orb"],
          ["table", ["What you see", "What it means"], [
            ["Rings ripple with your voice", "It is listening"],
            ["Rings spin with a small spark circling", "It is working out the answer"],
            ["Centre breathes, rings pulse", "It is speaking"],
            ["Grey and still", "Muted — tap the orb to talk again"]
          ]],
          ["h", "Safety and privacy"],
          ["ul", [
            "What you say is turned into text and goes through **exactly the same safety checks** as a typed message. If it sounds like an emergency or a crisis, you get the crisis guidance straight away — spoken and on screen.",
            "**Nothing is ever agreed to by voice.** If the assistant suggests booking, moving or cancelling an appointment, it still shows a card, and nothing happens until you tap **Confirm**.",
            "Recordings are used only to turn your speech into text and are not kept. Nothing is uploaded until you actually start speaking.",
            "Voice has its own hourly limit, separate from the question limit, so a few minutes of talking does not use up your allowance."
          ]],
          ["note", "Tips: use it somewhere fairly quiet, and hold the phone or sit near the computer. On a computer, headphones make interrupting easier; you can also press the **Space** bar instead of tapping the orb. On iPhone you can simply talk over the assistant to interrupt it."],
          ["faq", [
            ["Can I still send a single voice message instead?", "Yes. The **microphone** button records one message, turns it into text and sends it, like typing it."],
            ["Why doesn't it hear me?", "Check the microphone permission for NessaHub in your browser or phone settings, make sure voice mode isn't muted, and speak a little closer to the microphone."],
            ["Does voice work in another language?", "Voice conversation is currently set up for English."]
          ]]
        ]
      },
      {
        id: "assistant-safety",
        title: "How the assistant is kept safe",
        summary: "Screening, data minimisation, audit and hard limits.",
        keywords: "ai safety audit privacy limits rate",
        body: [
          ["ul", [
            "Everything you send and everything it answers is **screened** for safety.",
            "It only receives the **minimum data** needed for the task, and can never read another patient’s records — such attempts are refused and recorded.",
            "Every use is **audited** (without storing the conversation content in the audit log).",
            "There is an **hourly limit** per person.",
            "If the AI service is unavailable, you get a clear message instead of a guess."
          ]],
          ["warn", "The assistant does not diagnose, prescribe or handle emergencies. For anything urgent, contact your clinician or emergency services. See the “AI Assistant & Artificial Intelligence Policy”."]
        ]
      }
    ]
  },
  {
    id: "communication",
    group: "Features everyone uses",
    icon: "chat",
    title: "Messages, calls & notifications",
    tagline: "Video, voice and chat, plus how NessaHub keeps you informed.",
    articles: [
      {
        id: "video-voice",
        title: "Video and voice consultations",
        summary: "Join from your dashboard a few minutes early; allow your camera and microphone.",
        keywords: "video call voice audio join session consultation twilio camera microphone",
        body: [
          ["steps", [
            "Open the appointment in your dashboard a few minutes before it starts.",
            "Press **Join**.",
            "Allow your camera and microphone when the browser or app asks.",
            "When the session ends, any follow-ups appear in your dashboard."
          ]],
          ["p", "Calls ring like a phone call: if your clinician calls you, you see an incoming-call screen. Sessions can be by video or voice only."],
          ["h", "Transcription"],
          ["p", "Some sessions can be transcribed to help your clinician write accurate notes. How recording and transcription work, and when consent is needed, is set out in the “Messaging, Calls, Recording & Transcription Policy”. Transcripts you are entitled to see appear under your records."]
        ]
      },
      {
        id: "messaging",
        title: "Messaging",
        summary: "Secure chat with your clinician, with images and voice notes.",
        keywords: "chat message voice note image typing seen read",
        body: [
          ["p", "Chat with your clinician from **Messages**. You can send text, images and **voice notes**. You can see when the other person is typing and when they have seen your message, and whether they are online."],
          ["p", "Clinicians use a triage view to prioritise messages that need attention, and staff can chat with each other internally."]
        ]
      },
      {
        id: "notifications",
        title: "Notifications, email and SMS",
        summary: "In-app alerts, emails and text messages — and how to control them.",
        keywords: "notifications email sms text alerts phone verify hubtel",
        body: [
          ["ul", [
            "**In-app notifications** — the bell in every dashboard, and the Notifications page.",
            "**Email** — receipts, sign-in codes, password resets, appointment changes and important updates.",
            "**SMS** — your prescription pickup code, phone-verification codes and request updates, once your phone is verified. One phone number belongs to one account."
          ]],
          ["note", "Verify your phone in Settings to get SMS. The rules are in “Notifications & Electronic Communications”."]
        ]
      }
    ]
  }
);
