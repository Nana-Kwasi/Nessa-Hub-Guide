window.GUIDE = window.GUIDE || { chapters: [] };

window.GUIDE.chapters.push(
  {
    id: "therapy",
    group: "For patients & clients",
    icon: "heart",
    title: "Therapy & counselling",
    tagline: "Individual, couples and teen therapy with licensed therapists.",
    articles: [
      {
        id: "individual-therapy",
        title: "Individual therapy",
        summary: "Answer a short questionnaire, get matched with a therapist and meet by video, voice or chat.",
        keywords: "therapist counselling counseling questionnaire intake match",
        body: [
          ["steps", [
            "Choose **Therapy → Individual** on the home page.",
            "Answer the questionnaire — what brings you here, what you want to work on, and your preferences.",
            "NessaHub suggests a therapist matched to your needs and their availability. You can see their profile before you confirm.",
            "Create your account and pay for your first session (or use your insurance).",
            "Meet your therapist at the booked time from your dashboard."
          ]],
          ["h", "How matching works"],
          ["p", "Matching looks at what you told us in the questionnaire, the therapist’s areas of experience, the type of therapy you prefer and their availability. The full rules are published in the “How Matching Works” policy. If the match does not feel right, you can ask to change therapist — see “Transfers of care”."]
        ]
      },
      {
        id: "couples-therapy",
        title: "Couples therapy",
        summary: "One partner starts, invites the other, both complete their intake, and you are matched together.",
        keywords: "couple partner marriage relationship invite",
        body: [
          ["steps", [
            "**Partner A** chooses **Therapy → Couples** and completes the couple initiation.",
            "Partner A fills in their own intake sections.",
            "Partner A **invites Partner B** — Partner B receives an invitation link and code.",
            "**Partner B** opens the invitation, sees a welcome page explaining the process, and **accepts**.",
            "Partner B completes their own intake. Each partner’s answers are their own.",
            "Until both have finished, the waiting page shows what is still outstanding.",
            "When both are done, you are matched with a therapist experienced in couples work and use the shared **Couple dashboard**."
          ]],
          ["note", "Partner B can also join later by entering the invite code on the “Join” page."],
          ["p", "On the therapist side, couple cases are managed together under **Couple Cases** so the therapist sees both partners’ intake and shared sessions."]
        ]
      },
      {
        id: "teen-therapy",
        title: "Teen therapy",
        summary: "A parent or guardian gives consent first, then the teen is matched with a clinician experienced with young people.",
        keywords: "teenager child minor parent guardian consent young",
        body: [
          ["steps", [
            "Choose **Therapy → Teen** (or Psychiatry → Teen).",
            "The **parent or guardian** enters their details.",
            "The parent or guardian reads and gives **consent** for the young person to receive care.",
            "Enter the **young person’s information**.",
            "The teen is matched with a therapist or psychiatrist experienced with young people."
          ]],
          ["p", "How young people’s information is handled, what parents can see and when a young person can speak confidentially are set out in the “Children, Young People & Parental Consent” policy."]
        ]
      },
      {
        id: "client-dashboard",
        title: "Your therapy dashboard",
        summary: "Everything a therapy client can do: sessions, messages, worksheets, moods, care plan and more.",
        keywords: "client dashboard home schedule messages resources worksheets mood",
        body: [
          ["table", ["Section", "What you can do there"], [
            ["Therapist", "See your therapist’s profile, contact details and your progress together."],
            ["Schedule", "Book, view, reschedule or cancel sessions; join a video session."],
            ["Messages", "Chat with your therapist, including images and voice notes."],
            ["Calendar", "All upcoming sessions in a calendar view. Tap a free date — here or on your home calendar — to book a session on that day."],
            ["Resources", "Worksheets, notes and materials your therapist shares; complete worksheets and submit them."],
            ["Wellness", "Wellness messages and check-ins."],
            ["My Care Plan", "The plan your therapist has written with you — goals and next steps."],
            ["Prescriptions & E-Pharmacy", "For psychiatry clients: prescriptions, pickup codes and requests for refills."],
            ["Lab & Scan", "Tests your clinician ordered and their status."],
            ["Health Timeline", "Everything that has happened in your care, in date order."],
            ["My Records", "Your records, notes shared with you and documents."],
            ["Billing", "Payments, receipts and refunds."],
            ["Insurance", "Your insurance card and claims you are asked to confirm."],
            ["Notifications", "Everything NessaHub has told you."],
            ["NessaHub Assistant", "Ask questions and prepare for sessions."],
            ["My Care", "All the care services you use, in one place."],
            ["Settings & Support", "Profile, security and help; report an issue."]
          ]]
        ]
      },
      {
        id: "worksheets-and-mood",
        title: "Worksheets, homework, mood tracking and session ratings",
        summary: "The work you do between sessions, and how your therapist sees how you are doing.",
        keywords: "homework worksheet mood journal rating feedback goals",
        body: [
          ["ul", [
            "**Worksheets** — your therapist shares a worksheet; you fill it in and submit it from Resources. Your therapist sees your submission.",
            "**Homework** — tasks set between sessions. Mark them complete when done.",
            "**Mood tracking** — log how you feel. Your therapist sees trends on their **Client Moods** dashboard.",
            "**Goals** — therapy goals you agree with your therapist, tracked over time.",
            "**Session ratings** — after a session you can rate it. Ratings help NessaHub keep quality high."
          ]]
        ]
      }
    ]
  },
  {
    id: "medical-care",
    group: "For patients & clients",
    icon: "stethoscope",
    title: "Medical care",
    tagline: "Find a doctor, book a consultation and manage your health records.",
    articles: [
      {
        id: "find-a-doctor",
        title: "Finding and choosing a doctor",
        summary: "Search doctors by name or speciality and read their profile before you book.",
        keywords: "doctor search specialist profile reviews my doctor",
        body: [
          ["p", "Open **Find a Doctor** (or the Doctors page on the website). Search by name, speciality or condition. Each doctor has a profile with their qualifications, areas of practice, fee, availability and patient reviews."],
          ["h", "Your “My doctor”"],
          ["p", "You can choose one doctor as **My doctor**. New prescription requests you make in the app go to them."]
        ]
      },
      {
        id: "book-appointment",
        title: "Booking, rescheduling and cancelling",
        summary: "Describe your symptoms, pick a free slot, pay, and manage the appointment from your dashboard.",
        keywords: "appointment booking slot availability reschedule cancel medical intake symptoms",
        body: [
          ["steps", [
            "Choose **Book Appointment** and the doctor.",
            "Complete the short medical intake: your **main complaint**, **how long** you have had it, **severity (1–10)** and any other symptoms.",
            "Choose an available time slot.",
            "Pay with mobile money or card, or use your insurance.",
            "You receive a confirmation and the appointment appears under Upcoming."
          ]],
          ["note", "Quicker: tap a free date on the calendar on your **home screen** or Appointments page, and the booking opens with that date already chosen."],
          ["p", "To **reschedule or cancel**, open the appointment in your dashboard. You can do this as long as it is not too close to the start time. Your doctor is told straight away. Appointments are grouped as **Upcoming**, **Pending** and **Completed**."]
        ]
      },
      {
        id: "medical-dashboard",
        title: "Your medical dashboard",
        summary: "Every section a medical patient has.",
        keywords: "patient dashboard vitals history records emergency contacts",
        body: [
          ["table", ["Section", "What it does"], [
            ["Home", "Your next appointment, today’s medicines, anything that needs your attention, and a calendar — tap a free date to book on that day."],
            ["Book Appointment / Find a Doctor", "Search doctors and book."],
            ["Appointments & Video Calls", "Join consultations, see past ones."],
            ["Messages", "Chat with your doctors."],
            ["Prescriptions & E-Pharmacy", "Your prescriptions, pickup codes, pharmacies and refill requests."],
            ["Lab & Scan Orders", "Tests ordered for you and their progress."],
            ["Health Timeline", "Appointments, prescriptions, lab orders and results, scan reports and pharmacy events in date order — filter by Lab, Scan, Rx or Appointments."],
            ["Medical History", "Past conditions, operations and family history."],
            ["Health Records", "Documents such as radiology, lab results and others, uploaded or shared with you."],
            ["Record Vitals", "Log pain level (0–10), symptoms today, medicines taken today and notes."],
            ["Emergency Contacts", "Who to contact in an emergency."],
            ["Insurance", "Your insurance cards."],
            ["My Care Plan / My Care / My Records", "Plans from your clinicians, your services and your records."],
            ["Billing", "Payments and receipts."],
            ["Wellness, Notifications, Assistant", "Wellness messages, alerts and the AI assistant."],
            ["My Profile & Settings", "Profile (blood type, height, weight, chronic conditions), security, emergency, billing, legal and discharge settings."],
            ["Support & Report", "Get help; report a doctor, a technical problem, a billing issue, an account or appointment issue."]
          ]]
        ]
      },
      {
        id: "health-timeline",
        title: "Health timeline, records and vitals",
        summary: "One timeline of everything in your care, plus your own records and daily vitals.",
        keywords: "timeline history records vitals blood pressure weight upload",
        body: [
          ["p", "The **Health Timeline** puts every event in your care in date order: appointments, prescriptions, lab orders and results, scan orders and reports, and pharmacy events. Filter it to see only one kind."],
          ["p", "In **Health Records** you can keep documents such as radiology images and lab results from elsewhere. **Record Vitals** lets you log how you are each day so your doctor can see trends."],
          ["p", "Your clinicians may also ask you to complete a **weekly check-in**; they review it in their Check-ins queue."]
        ]
      }
    ]
  },
  {
    id: "psychiatry",
    group: "For patients & clients",
    icon: "brain",
    title: "Psychiatry (MedPsych)",
    tagline: "Assessment and medication-led mental-health care from psychiatrists.",
    articles: [
      {
        id: "medpsych",
        title: "Seeing a psychiatrist",
        summary: "Browse psychiatrists, book an assessment, and manage medication with your psychiatrist.",
        keywords: "psychiatrist medication mental health medpsych booking",
        body: [
          ["steps", [
            "Choose **Psychiatry** on the home page, then who it is for (individual, teen or couples).",
            "Browse **psychiatrists** and their profiles, or let NessaHub match you.",
            "Sign up and **book** an assessment.",
            "Meet by video; your psychiatrist may prescribe medicine, order tests and arrange follow-ups."
          ]],
          ["p", "Psychiatry clients use the therapy dashboard, with **Prescriptions** and **E-Pharmacy** for their medicines. Refill and new-prescription requests go to their assigned psychiatrist; if they have two clinicians, they choose which one."]
        ]
      }
    ]
  },
  {
    id: "second-opinion",
    group: "For patients & clients",
    icon: "scale",
    title: "Second opinion",
    tagline: "An independent specialist review before you decide.",
    articles: [
      {
        id: "second-opinion-how",
        title: "Getting a second opinion",
        summary: "Share your diagnosis or treatment plan and get an independent specialist review.",
        keywords: "second opinion specialist review diagnosis treatment membership",
        body: [
          ["steps", [
            "Choose **Second opinion** on the home page and read how it works.",
            "Complete the **second-opinion intake**: the diagnosis or treatment you were given, your questions and any documents.",
            "Become a member / create your account.",
            "A specialist reviews your case independently and gives you their opinion."
          ]],
          ["note", "The NessaHub Assistant can help you prepare: it organises what to share and the questions to ask (the “second-opinion preparation” task). It does not give the opinion itself."]
        ]
      }
    ]
  },
  {
    id: "home-care",
    group: "For patients & clients",
    icon: "home",
    title: "Home care (nurse visits)",
    tagline: "Book a qualified nurse to care for you at home.",
    articles: [
      {
        id: "home-care-patients",
        title: "Booking a home-care nurse",
        summary: "Search nurses near you, book a visit, follow it live and get a visit summary.",
        keywords: "nurse home visit booking care elderly wound injection",
        body: [
          ["steps", [
            "Open **Home care** and **sign up** (or sign in).",
            "**Search** or **browse** nurses available in your area and open a nurse’s **profile**.",
            "**Book** a visit: the care you need, your address and a time.",
            "Follow the **booking status** as the nurse accepts and travels to you.",
            "During the visit, it shows under **Ongoing care**.",
            "Afterwards you get a **visit summary**, can leave **feedback**, or **report** a problem.",
            "All past visits are in **History**."
          ]],
          ["warn", "The **Emergency** screen in Home care is for urgent help during a visit — it does not replace calling emergency services."],
          ["p", "Home care rules are set out in the “Home Care Services Policy”."]
        ]
      },
      {
        id: "home-care-nurses",
        title: "For home-care nurses",
        summary: "Go online, accept requests, record visits and track your earnings.",
        keywords: "nurse dashboard requests availability earnings documents online",
        body: [
          ["p", "Home-care nurses are onboarded by NessaHub administrators after their credentials are checked."],
          ["table", ["Section", "What it does"], [
            ["Dashboard", "Go online to receive new requests; see completed visits, pending requests and quick actions."],
            ["Service location", "Where you work from, so patients nearby can find you."],
            ["Requests", "Review and accept or decline booking requests."],
            ["Availability & schedule", "Set your working days and hours."],
            ["Bookings & ongoing visits", "Visits you have accepted, and visits in progress."],
            ["Visit", "Record what was done during the visit."],
            ["Documents", "Your licence and other documents."],
            ["Earnings", "What you have earned and payouts."],
            ["Notifications", "New requests and updates."],
            ["Account & manage profile", "Your photo, profile and settings."],
            ["Emergency", "Raise an emergency during a visit."]
          ]]
        ]
      }
    ]
  }
);
