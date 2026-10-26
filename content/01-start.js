/*
 * NessaHub Guide — content.
 *
 * Each chapter is plain data. Article bodies are lists of blocks:
 *   ["p", text]            paragraph          ["h", text]       sub-heading (in "On this page")
 *   ["ul", [items]]        bullet list        ["steps", [items]] numbered steps
 *   ["note", text]         tip / info box     ["warn", text]    important warning
 *   ["table", [headers], [[cells]...]]        ["links", [[label, url]...]]
 *   ["faq", [[question, answer]...]]
 * Text may use **bold**. Everything is inserted as text, never as HTML.
 */
window.GUIDE = window.GUIDE || { chapters: [] };

window.GUIDE.chapters.push(
  {
    id: "welcome",
    group: "Start here",
    icon: "spark",
    title: "Welcome to NessaHub",
    tagline: "What NessaHub is, who it is for, and how everything fits together.",
    articles: [
      {
        id: "what-is-nessahub",
        title: "What NessaHub is",
        summary: "Therapy, medical care, psychiatry and second opinions online — joined up with pharmacies, labs, scan centres, home-care nurses and insurers.",
        keywords: "about overview platform telehealth ghana accra",
        body: [
          ["p", "NessaHub is a telehealth platform built in Accra, Ghana. It lets you see licensed doctors, therapists and psychiatrists online — by video, voice or chat — and keeps everything that follows from a consultation together in one place: prescriptions, pharmacy pickup, lab tests, scans, results, follow-ups, payments and insurance."],
          ["p", "NessaHub is not just a video-call app. It links every person and place involved in your care, so information moves between them safely instead of you carrying paper from one place to the next."],
          ["h", "Four types of care"],
          ["table", ["Care", "What it is"], [
            ["Therapy & counselling", "Individual, couples and teen therapy with licensed therapists, by video, voice or chat."],
            ["Medical care", "See a doctor online, get a diagnosis, prescriptions and follow-up care without the queue."],
            ["Psychiatry (MedPsych)", "Assessment and medication-led mental-health care from psychiatrists, for adults, teens and couples."],
            ["Second opinion", "An independent specialist review of a diagnosis or treatment plan before you decide."]
          ]],
          ["h", "Everything connected to your care"],
          ["ul", [
            "**E-prescriptions** go straight to a partner pharmacy branch, with a secure pickup code.",
            "**Lab tests and scans** are ordered digitally; results return to your doctor, who shares them with you.",
            "**Home care**: book a qualified nurse to visit you at home.",
            "**Insurance**: cover checks, pre-approvals and claims are handled with your insurer in real time.",
            "**NessaHub Assistant**: an AI helper for questions, preparation and summaries — type, or simply talk to it in a voice conversation. Clinicians review and approve anything clinical."
          ]],
          ["h", "Web and mobile"],
          ["p", "The same account works on the web (nessahub.com) and in the NessaHub mobile app. Your history, appointments and messages are the same on both."],
          ["warn", "NessaHub is not an emergency service. If you or someone else is at immediate risk, call local emergency services. See “Crisis & emergencies”."]
        ]
      },
      {
        id: "who-its-for",
        title: "Who NessaHub is for",
        summary: "One network for patients, clinicians, pharmacies, labs, scan centres, nurses, facilities, insurers and administrators.",
        keywords: "roles users patients providers partners accounts",
        body: [
          ["p", "Every person on NessaHub has a role. Your role decides which dashboard you see after you sign in."],
          ["table", ["Who", "What they use NessaHub for"], [
            ["Patients & families", "One account for therapy and medical care, with history in one place."],
            ["Therapy clients", "Individual, couples or teen therapy, worksheets, mood tracking and messaging with their therapist."],
            ["Doctors", "Appointments, notes, prescribing, lab and scan orders, referrals and earnings in a single workspace."],
            ["Therapists, psychologists & psychiatrists", "Clients, couple cases, sessions, notes, resources, mood insights and (for psychiatrists) prescribing."],
            ["Pharmacies (head office and branches)", "Receive prescriptions digitally, verify pickup codes, dispense, transfer between branches, claims."],
            ["Laboratories & scan centres", "Receive test orders, check patients in, upload results, manage branches and claims."],
            ["Home-care nurses", "Receive and accept home-visit requests, record visits, manage availability and earnings."],
            ["Hospitals & clinics (facilities)", "Check patients in, record visits, verify insurance members and submit claims."],
            ["Insurers", "Claims, pre-authorisations, members, provider networks, price lists, fraud checks and payment files."],
            ["NessaHub administrators", "Approve providers, monitor safety, finance, configuration and audits."]
          ]],
          ["note", "Each chapter of this guide is written for one of these groups — use the sidebar, or search for your role."]
        ]
      },
      {
        id: "how-it-works",
        title: "How it works, start to finish",
        summary: "Choose care, get matched, meet securely, and stay connected through prescriptions, tests and follow-ups.",
        keywords: "journey steps process flow",
        body: [
          ["steps", [
            "**Choose your care** — therapy, medical care, psychiatry or a second opinion, and who it is for (you, a teen, or a couple).",
            "**Tell us about you** — a short intake questionnaire about what you need.",
            "**Get matched** — NessaHub matches you with a licensed provider based on your needs and their availability, or you choose a doctor yourself.",
            "**Book and pay** — pick a time and pay securely with mobile money or card through Paystack, or use your insurance.",
            "**Meet securely** — join by video, voice or chat from anywhere private.",
            "**Stay connected** — prescriptions, tests, results, care plans and follow-ups stay together in your dashboard."
          ]],
          ["p", "Behind the scenes, a prescription goes to a pharmacy branch with a pickup code, a lab or scan order goes to a diagnostic centre, results come back to your clinician first, and insurance is checked before medicines or tests are handed over."]
        ]
      },
      {
        id: "trust-and-safety",
        title: "Trust and safety at a glance",
        summary: "Verified clinicians, private sessions, recorded access and published policies.",
        keywords: "licensed credentialed verified secure encrypted privacy",
        body: [
          ["ul", [
            "**Licensed & credentialed** — every provider applies and has their licence verified with the issuing council before they can see patients.",
            "**Private & secure** — sessions are encrypted; therapy notes stay between you and your therapist; every access to your record is logged.",
            "**Two-step sign-in** — a 6-digit code by email each time you sign in, if switched on.",
            "**Smarter, not automated** — AI assistants help with notes, safety checks and summaries, but clinicians review and approve everything.",
            "**Transparent policies** — the terms, privacy policy and 35 other policies are published in full at policy.nessahub.com."
          ]]
        ]
      }
    ]
  },
  {
    id: "getting-started",
    group: "Start here",
    icon: "rocket",
    title: "Getting started",
    tagline: "Create your account, sign in safely and find your way around.",
    articles: [
      {
        id: "choose-care",
        title: "Choosing your care",
        summary: "Start from the home page: therapy, medical care, psychiatry or a second opinion — then who the care is for.",
        keywords: "start begin individual teen couples service",
        body: [
          ["p", "On the NessaHub home page, choose the service you need: **Therapy**, **Medical care**, **Psychiatry** or **Second opinion**. You can also start **Home care** to book a nurse."],
          ["p", "For therapy and psychiatry you then choose who the care is for:"],
          ["table", ["Option", "What happens next"], [
            ["Individual", "A short questionnaire, then you are matched with a therapist (or psychiatrist)."],
            ["Teen", "A parent or guardian gives consent first, then the teen is matched with a clinician experienced with young people."],
            ["Couples", "One partner starts, invites the other, and both complete their part before you are matched."]
          ]],
          ["note", "For medical care you can search for a doctor yourself and look at their profile before booking."]
        ]
      },
      {
        id: "create-account",
        title: "Creating your account",
        summary: "Sign up with your email, confirm it, and complete your profile.",
        keywords: "sign up register signup email verify verification",
        body: [
          ["steps", [
            "Answer the intake for the care you chose (or open **Sign up**).",
            "Enter your name, email and a password.",
            "Open the confirmation email and verify your email address.",
            "Accept the Terms of Service and Privacy Policy — NessaHub records which version you accepted and when.",
            "Complete your profile: phone number, date of birth, emergency contacts and, if you have one, your insurance card."
          ]],
          ["note", "Verify your phone number in Settings to receive SMS messages such as your prescription pickup code."]
        ]
      },
      {
        id: "sign-in",
        title: "Signing in and two-step sign-in",
        summary: "Email and password, plus an optional 6-digit email code each time you sign in.",
        keywords: "login log in two-factor 2fa code password forgot reset",
        body: [
          ["p", "Sign in from **Log in** with your email and password. After sign-in you are taken straight to the dashboard for your role."],
          ["h", "Two-step sign-in"],
          ["p", "If two-step sign-in is on for your account, NessaHub emails you a 6-digit code every time you sign in. Even if someone learns your password, they cannot get in without the code."],
          ["h", "Forgot your password?"],
          ["steps", [
            "On the Log in page choose **Forgot password**.",
            "Enter your email address — a reset link is sent to it.",
            "Open the link and choose a new password."
          ]],
          ["note", "Some accounts created by NessaHub (for example a pharmacy branch) start with a temporary password and must set a new one at first sign-in."]
        ]
      },
      {
        id: "find-your-way",
        title: "Finding your way around your dashboard",
        summary: "The sidebar, notifications, the assistant button and the service switcher.",
        keywords: "dashboard navigation menu sidebar layout",
        body: [
          ["ul", [
            "**Sidebar menu** — every section for your role. On a phone it folds into a menu button.",
            "**Notifications bell** — new messages, appointment changes, results and requests.",
            "**Home calendar** — tap a date to book on that day or see what is booked (see “Booking straight from your home calendar”).",
            "**NessaHub Assistant** — the round assistant button opens the AI helper for your role.",
            "**Service switcher** — patients who use more than one service (for example therapy and medical care) can switch between them without signing out.",
            "**Report issue** — available on every dashboard to report a technical problem, a billing issue or a concern about a provider."
          ]]
        ]
      },
      {
        id: "home-calendar",
        title: "Booking straight from your home calendar",
        summary: "Tap a date on the calendar on your home screen to book on that day, or to see what is already booked.",
        keywords: "calendar home date day tap click book schedule appointment session call pick date",
        body: [
          ["p", "Patients, therapy clients, doctors and therapists have a calendar on their **home screen**, on the web and in the mobile app. Booked days are highlighted. You can tap (or click) any date to act on it directly — you don't have to go to the Appointments or Calendar page first."],
          ["h", "What happens when you tap a date"],
          ["table", ["The day you tap", "What opens"], [
            ["A day that already has a session or appointment", "That day's bookings, so you can view, join, reschedule or cancel."],
            ["A free day, today or later", "The booking form, with that date already filled in. Choose a time and the other details, then confirm."],
            ["A past day with nothing booked", "Nothing is booked — you are told you cannot book in the past."]
          ]],
          ["h", "By dashboard"],
          ["table", ["Dashboard", "Tapping a free date"], [
            ["Therapy client", "Opens the session booking with your therapist on that date. In the app, tapping a day that already has a session shows it, with a **Book a session on this day** button if you want another."],
            ["Medical patient", "Opens **Book appointment** on that date — choose one of your doctors, a time, the type of visit and the reason."],
            ["Doctor", "Opens the **Schedule appointment** form on that date — choose the patient, time, type and reason."],
            ["Therapist", "Opens **Schedule call** on that date — choose the client and time."]
          ]],
          ["note", "Paid sessions go through the usual payment step, and a clinician still confirms requests where they normally would. Booking from the calendar is the same booking as from the Appointments page — just quicker to reach."],
          ["faq", [
            ["Tapping a date says I can't book yet — why?", "You need someone to book with first. A client needs an assigned therapist, a medical patient needs a doctor (you are taken to find one), and a doctor can schedule once a patient has booked with them."],
            ["Can I book two sessions on the same day?", "Yes. Open the day and choose to book another session, or use the Appointments / Calendar page."]
          ]]
        ]
      },
      {
        id: "mobile-app",
        title: "The NessaHub mobile app",
        summary: "The same account and the same features on your phone.",
        keywords: "app ios android iphone phone mobile",
        body: [
          ["p", "The NessaHub mobile app gives patients, therapy clients, doctors, therapists, pharmacies and their branches, labs, scan centres and home-care nurses the same dashboards as the web, designed for the phone."],
          ["ul", [
            "Join video and voice consultations, and receive incoming calls.",
            "Chat with your clinician, including voice notes and images.",
            "Show your prescription pickup code and track lab and scan orders.",
            "Get notified about appointments, results and messages."
          ]]
        ]
      }
    ]
  }
);
