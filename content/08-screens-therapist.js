/*
 * Screen by screen — the therapist dashboard (therapists, psychologists, counsellors and
 * psychiatrists). Same block format as content/01-start.js.
 */
window.GUIDE = window.GUIDE || { chapters: [] };

window.GUIDE.chapters.push({
  id: "therapist-screens",
  group: "Screen by screen",
  icon: "brain",
  title: "Therapist dashboard, screen by screen",
  tagline: "Every screen therapists, psychologists and psychiatrists use — what it is for, what you can do, and an example.",
  articles: [
    {
      id: "th-home",
      title: "Home",
      summary: "Your practice today: what needs your attention, your next session, your numbers and a calendar you can schedule from.",
      keywords: "therapist home dashboard needs attention next session notes to finish calendar schedule progress moods",
      body: [
        ["h", "What you see"],
        ["ul", [
          "**Needs your attention** — unconfirmed sessions, unfinished notes and clients at risk. When it says you are all clear, nothing is waiting.",
          "**Next session** with **Start a session**, and **Notes to finish**.",
          "**Practice overview** — clients, active clients, today, completion rate, notes written, total and upcoming sessions.",
          "**Session activity** (sessions per month), **Client progress** (where each client is trending) and **Moods**.",
          "**Your tools** — Notes, Client moods, Check-ins, Resources, Reports, Prescriptions and E-Pharmacy.",
          "A **calendar** and a search box for clients, notes or sessions."
        ]],
        ["h", "What you can do"],
        ["ul", [
          "**Tap a free date** on the calendar to open **Schedule a session** on that date (choose the client, time, duration and notes). A date with sessions opens the full Calendar for that day.",
          "**Schedule** from the top button for today, or **Start a session** when it is time, and mark a finished session complete."
        ]],
        ["h", "Example"],
        ["p", "Abena, a counsellor, opens Home and sees one unconfirmed session request and two notes to finish. She confirms the request, writes the two notes, then taps next Tuesday on the calendar to book a follow-up with Kojo at 4 pm."]
      ]
    },
    {
      id: "th-clients",
      title: "Clients and the client record",
      summary: "Your caseload, and each client's full record: sessions, notes, moods, goals, intake answers, prescriptions and pharmacies.",
      keywords: "clients caseload client record profile notes goals intake questionnaire mood reassign discharge hold transfer",
      body: [
        ["h", "The Clients list"],
        ["ul", [
          "Every client assigned to you, with sessions, notes and when you last saw them. Filter by **Active**, **Inactive** or **On Hold**, or search.",
          "From each client: **View Details**, **Chat** (opens a chat window), write a **Note**, **Reassign** to another therapist, **Put On Hold** or **Discharge Client**."
        ]],
        ["h", "The client record (View Details)"],
        ["ul", [
          "**Totals** — sessions, notes, average mood and last session.",
          "**Personal**, **Therapy** and **Health & wellness** information, and **Mental health history**.",
          "Their **intake questionnaire** — every answer and the total score.",
          "**Sessions**, **therapy notes**, **clinical notes** and **mood entries**.",
          "**Treatment goals** — add goals with a target date and priority, and mark them completed.",
          "For psychiatry: **prescriptions** and the client's **pharmacies**; any **second opinion request**."
        ]],
        ["h", "Writing a session note"],
        ["p", "Notes follow a session structure: date, time, session number and mood; session focus; interventions used; progress assessment; client response; behavioural observations; mood rating (1–10); plan; homework between sessions; and next session focus."],
        ["note", "Parts of a client's record can be hidden by their privacy settings — you will see “Access restricted”."],
        ["h", "Example"],
        ["p", "Before Esi's fourth session, her therapist opens her record: her mood average has dropped from 6 to 4 and her intake score showed high anxiety. He adds a goal — “use the breathing exercise during panic episodes” — and after the session writes a note with homework to keep a worry diary."]
      ]
    },
    {
      id: "th-couples",
      title: "Couple Cases",
      summary: "Couples matched to you, with each partner's private intake.",
      keywords: "couples therapy couple case partner intake confidential",
      body: [
        ["p", "A couple appears here once both partners have confirmed you as their therapist. Open a case to see the relationship details, whether both intakes are complete, payment status, and each partner's answers."],
        ["warn", "Each partner answered privately and cannot see the other's answers. Never share one partner's answers with the other."],
        ["h", "Example"],
        ["p", "Kwame and Adwoa start couples therapy. Before the first session their therapist reads both intakes and notices both name communication about money as the main problem — without telling either what the other wrote."]
      ]
    },
    {
      id: "th-sessions",
      title: "Appointments, Calendar and Video Call",
      summary: "Confirm session requests, keep your calendar right, schedule sessions and run them by video.",
      keywords: "appointments requests accept decline propose time reschedule calendar video call schedule session join incoming",
      body: [
        ["h", "Appointments"],
        ["ul", [
          "**Requests** — sessions clients have asked for. **Accept**, **Decline**, or **Propose time** to suggest another.",
          "**Upcoming** and **Past** — **Reschedule** or **Cancel** (a session cannot be moved into the past)."
        ]],
        ["h", "Calendar"],
        ["ul", [
          "Your sessions by month, with today highlighted. **Add session** to schedule with an assigned client.",
          "Accept or decline requests from the calendar, and read **therapy notes & progress** for each client.",
          "**Reports** — generate a client progress, therapy notes or scheduled calls report for a date range and download it as a PDF."
        ]],
        ["h", "Video Call"],
        ["ul", [
          "**Upcoming calls** — **Join Call**, **Edit Schedule** or **Delete Schedule**.",
          "**Schedule** a call: choose the client, date, time, duration and optional notes.",
          "When a client calls you, an **Incoming Call** appears with **Accept** and **Decline**."
        ]],
        ["h", "Example"],
        ["p", "Yaw requests a Saturday session; his therapist does not work Saturdays, so she taps **Propose time** and offers Friday at 5 pm, which Yaw accepts. On Friday she joins from Video Call, and afterwards downloads a month's progress report for her supervisor."]
      ]
    },
    {
      id: "th-messaging",
      title: "Messaging and client chat",
      summary: "Messaging is for talking to colleagues; chat with a client from their entry in Clients.",
      keywords: "messaging staff colleagues chat client message attachment",
      body: [
        ["ul", [
          "**Messaging** (in the menu) is **staff messaging** — talk to other therapists and NessaHub staff, see who is online, and send files.",
          "**Chat with a client** from **Clients → Chat**: text, emoji, images and files. Press Enter to send, Shift+Enter for a new line."
        ]],
        ["h", "Example"],
        ["p", "A psychologist messages a colleague in Messaging to ask about a trauma workbook, then opens Clients → Chat to send her client a reminder about tomorrow's session."]
      ]
    },
    {
      id: "th-notes",
      title: "Notes",
      summary: "Clinical notes with templates — SOAP, progress, risk assessments and discharge summaries — plus therapy books for clients.",
      keywords: "notes soap progress risk assessment discharge summary template signature therapy book share client",
      body: [
        ["ul", [
          "**New Note** or **Use Template**. Note types: **SOAP**, **Progress**, **Risk Assessment**, **Discharge Summary**.",
          "Fill the sections (Subjective, Objective, Assessment, Plan, interventions, client response), add the session date and your **digital signature**.",
          "Tick **Share this note with the client** if they should see it; otherwise it stays private.",
          "**Therapy Books** — write a short guide (chapters, key topics, exercises, resources) and give it to selected clients.",
          "Filter by type, search by client or content, view, edit or delete."
        ]],
        ["h", "Example"],
        ["p", "After a session where Akua mentioned not sleeping and feeling hopeless, her psychologist writes a **Risk Assessment** note, signs it, and keeps it private. He also shares a short “Sleep and anxiety” therapy book with her."]
      ]
    },
    {
      id: "th-resources",
      title: "Resources",
      summary: "Worksheets and materials for your clients — build a worksheet, assign it, read the answers and give feedback.",
      keywords: "resources worksheet homework assign clients responses feedback library cbt thought record pdf",
      body: [
        ["h", "Creating a worksheet"],
        ["steps", [
          "Tap **Create Worksheet**: title, category (for example Anxiety, Depression, Trauma, Mindfulness), goal and instructions.",
          "Add the **fields** clients fill in — short or long text, number, date, dropdown, checkboxes, radio buttons, multiple choice or a rating scale.",
          "Choose whether clients can submit **more than once**, and **assign** it to clients.",
          "Read each client's **responses**, then **Give Feedback** with a rating and comment."
        ]],
        ["h", "Other resources"],
        ["p", "**Add Resource** for files, links or written material, with category, type, difficulty, duration, audience and tags. **Publish to clients** to share it. Anything can be downloaded as a PDF."],
        ["h", "Example"],
        ["p", "A therapist creates a “CBT Thought Record” worksheet with fields for situation, automatic thought, feeling (rating 0–10) and balanced thought, allows multiple responses, and assigns it to Kofi. Kofi fills it in three times that week; the therapist reads them and leaves feedback before their next session."]
      ]
    },
    {
      id: "th-moods-checkins",
      title: "Client Moods and Check-ins",
      summary: "See how clients are feeling between sessions, and ask them questions over time.",
      keywords: "mood dashboard low mood trending down not logging check-ins follow-up questions",
      body: [
        ["h", "Client Moods"],
        ["ul", [
          "Every client's daily mood check-ins, with three warning groups: **Low mood** (latest 3 or below), **Trending down** (recent worse than earlier) and **Not logging** (nothing in 14 days).",
          "Open a client for their last 30 check-ins: average mood, total check-ins, recent trend and mood distribution."
        ]],
        ["h", "Check-ins"],
        ["p", "Ask a client a question between sessions — for example about sleep, mood or coping — and follow the answers over time. It works exactly as for doctors (see “Doctor dashboard → Check-ins”)."],
        ["h", "Example"],
        ["p", "On Monday the mood dashboard shows Ama in **Trending down**. Her therapist sends a check-in — “How has your sleep been this week?” — and brings their session forward."]
      ]
    },
    {
      id: "th-psychiatry",
      title: "Prescriptions, Prescription Requests and Lab / Scan (psychiatry)",
      summary: "Psychiatrists prescribe, handle refill requests and order tests exactly as doctors do.",
      keywords: "psychiatrist prescriptions refill requests lab scan order results medication",
      body: [
        ["p", "For clients on the psychiatry track, these screens work the same way as on the doctor dashboard: write e-prescriptions with safety checks and send them to a pharmacy; approve, query or decline refill requests; order lab tests and scans and review the results. See the matching pages under “Doctor dashboard, screen by screen”."],
        ["h", "Example"],
        ["p", "A psychiatrist starts Kwesi on an antidepressant and orders liver function tests first. The results come back normal, he notes that on the result, and two months later approves Kwesi's refill request from the Prescription Requests screen."]
      ]
    },
    {
      id: "th-shared",
      title: "Care Plans, Documents, Referrals and Transfers",
      summary: "The same tools doctors have, for your clients.",
      keywords: "care plan documents letter referral transfer client",
      body: [
        ["ul", [
          "**Care Plans** — write a plan in plain words and share it once you approve it.",
          "**Documents** — letters, certificates and summaries drafted from your details.",
          "**Referrals** — ask another clinician to help with one problem; the client stays yours.",
          "**Transfers** — hand the client's care to another therapist, with the client's consent."
        ]],
        ["p", "Each works exactly as described under “Doctor dashboard, screen by screen”."],
        ["h", "Example"],
        ["p", "A counsellor sees that Efua's low mood is not improving and refers her to a psychiatrist for a medication review — Efua keeps her counsellor. A year later the counsellor relocates and transfers Efua, with her consent, to a colleague."]
      ]
    },
    {
      id: "th-reports",
      title: "Reports (incident reports)",
      summary: "Incident reports about clients — review them and move them through to completion.",
      keywords: "incident reports severity status submitted seen processing completed",
      body: [
        ["p", "Incident reports filed about your clients, each with a severity (Medium, High, Critical) and a status. Open one to read the client, therapist and incident details, and **Update Status**: Submitted → Seen → Processing → Completed. Filter by status or severity, or search."],
        ["h", "Example"],
        ["p", "A High-severity report says a client missed three sessions after disclosing a family crisis. The therapist marks it Seen, calls the client, and marks it Completed once a safety plan is agreed."]
      ]
    },
    {
      id: "th-money-engagement",
      title: "Earnings, Wellness, Promotions, Feedback and Assistant",
      summary: "Your money, messages to clients, offers featuring you, feedback and your AI helper.",
      keywords: "earnings payouts wellness promotions offers fee feedback assistant notifications",
      body: [
        ["p", "These work the same as on the doctor dashboard: **Earnings** (payouts and refunds), **Wellness** (messages to your clients), **Promotions** and **Offers on my fee** (nothing goes out unless you approve), **Patient Feedback** (anonymous survey results), **NessaHub Assistant** (pre-session briefs, summaries, drafting — type or talk) and **Notifications**."],
        ["h", "Example"],
        ["p", "Before a session, a therapist asks the assistant for a pre-session brief on Kojo: it lists his last session's focus, his homework and his mood check-ins since. She checks it against her notes before starting."]
      ]
    },
    {
      id: "th-settings",
      title: "Settings, Report Issue and Logs",
      summary: "Your profile, status, availability, notifications and security.",
      keywords: "settings profile bio specialties status available busy away availability notifications crisis alerts security login email logs",
      body: [
        ["ul", [
          "**Professional profile** — bio and specialties, shown to clients choosing a therapist; your fee.",
          "**Current status** — Available, Busy, Away or Offline; clients see it on your profile.",
          "**Availability** — the times clients can book.",
          "**Notifications** — email, client messages, appointment reminders (and how many hours before), and **crisis alerts**.",
          "**Security** — change your login email (confirmed with your password) and password; **Consents & agreements**.",
          "**Report Issue** — send a problem to NessaHub's administrators and follow their response.",
          "**Logs** (admin therapists only) — system activity, logins and actions, with a PDF report."
        ]],
        ["h", "Example"],
        ["p", "Going to a conference for two days, a therapist sets her status to **Away** and removes her availability for those days, so no one can book her while she is out."]
      ]
    }
  ]
});
