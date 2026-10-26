window.GUIDE = window.GUIDE || { chapters: [] };

(function () {
  var P = "https://policy.nessahub.com/policy.html?slug=";
  function pol(title, slug) { return [title, P + slug]; }

  window.GUIDE.chapters.push(
    {
      id: "administrators",
      group: "For NessaHub teams",
      icon: "settings",
      title: "For administrators",
      tagline: "Run the platform: people, approvals, safety, money, communications and configuration.",
      articles: [
        {
          id: "admin-console",
          title: "The admin console, section by section",
          summary: "Every administrator tool and what it is for.",
          keywords: "admin administrator console super admin management",
          body: [
            ["h", "Running the platform"],
            ["table", ["Section", "What it does"], [
              ["Overview", "Platform activity at a glance, with a daily briefing."],
              ["Global search", "Find any user, appointment, prescription or order."],
              ["User Management", "Find any account, view a person’s details and activity, suspend or close accounts."],
              ["Account Approvals", "Approve accounts waiting for review."],
              ["Appointments", "All appointments across the platform."],
              ["Patient Transfers", "Oversee transfers of care between clinicians."],
              ["Finance & Payouts", "Payments, refunds, clinician payouts and payout-detail confirmations."],
              ["Prescription Monitor", "Watch prescriptions across pharmacies for problems."],
              ["SMS Follow-up", "Incoming SMS that could not be handled automatically."],
              ["Insurers & Claims / Insurance verification", "Insurer partners, claims and insurance checks."]
            ]],
            ["h", "Bringing providers on"],
            ["table", ["Section", "What it does"], [
              ["Provider Applications", "Review applications from onboard.nessahub.com and move them through the stages."],
              ["Onboard Doctor / Onboard Therapist", "Create accounts for approved clinicians."],
              ["Create Pharmacy / Create Lab / Scan", "Create partner organisations and their branches."],
              ["Onboard Insurer", "Create insurer accounts."],
              ["Onboard Home-Care Nurse / Home Care Manage", "Bring on nurses and manage home care."],
              ["Profile Completeness", "See which providers have incomplete profiles."],
              ["Walk-in verify", "Help verify prescriptions at the counter."]
            ]],
            ["h", "Quality, safety and oversight"],
            ["table", ["Section", "What it does"], [
              ["Analytics & Reports / Reports Center", "Platform analytics and reports."],
              ["System PDF export", "Export system records as PDF."],
              ["Reports & Feedback", "Issues and feedback reported by users."],
              ["Formulary", "The medicines list used for prescribing checks."],
              ["Patterns to review / Risk alerts", "Unusual patterns flagged for a human to look at."],
              ["Activity monitor & User activity", "What is happening on the platform."],
              ["Audit Log", "A permanent record of sensitive actions."]
            ]],
            ["h", "Communications and growth"],
            ["table", ["Section", "What it does"], [
              ["Notifications", "Send notifications to users."],
              ["Message Templates", "The wording of emails, SMS and notifications."],
              ["Promo Campaigns / Price Promotions", "Promotions and discounts across the platform."],
              ["AI Knowledge Base", "Approved information the NessaHub Assistant may use."]
            ]],
            ["h", "Configuration"],
            ["table", ["Section", "What it does"], [
              ["Super admins / Team", "Who administers NessaHub."],
              ["System Config", "Platform settings — for example prescription validity, open-prescription hold time, and provider-onboarding contact details."],
              ["Settings", "Your own admin account."]
            ]]
          ]
        }
      ]
    },
    {
      id: "join",
      group: "For NessaHub teams",
      icon: "badge",
      title: "Joining NessaHub as a provider",
      tagline: "How doctors, therapists, pharmacies, labs and scan centres apply.",
      articles: [
        {
          id: "who-can-apply",
          title: "Who can apply and what you get",
          summary: "Free to apply, licences verified, your own fees, monthly payouts.",
          keywords: "apply join provider onboarding application partner",
          body: [
            ["table", ["Who", "Applies as"], [
              ["Doctors", "Doctor"],
              ["Therapists, psychologists and psychiatrists", "Therapist (choose your professional type)"],
              ["Pharmacies", "Pharmacy (with Pharmacy Council premises licence)"],
              ["Laboratories", "Laboratory (with the scientist in charge)"],
              ["Scan / imaging centres", "Scan centre"]
            ]],
            ["ul", [
              "**Free to apply.**",
              "**Licences verified** with the issuing council.",
              "**You set your own fees** (clinicians).",
              "**Monthly payouts** to bank or mobile money."
            ]],
            ["note", "Home-care nurses, insurers and facilities are brought on directly by the NessaHub team."]
          ]
        },
        {
          id: "how-to-apply",
          title: "How to apply and track your application",
          summary: "Apply at onboard.nessahub.com, get a reference code, and follow each stage.",
          keywords: "application reference code track stages documents interview",
          body: [
            ["steps", [
              "Go to **onboard.nessahub.com** and create a portal account (your email is confirmed with a 6-digit code).",
              "Fill in the application for your provider type.",
              "Note the documents you will submit — they are sent by email or in person, and originals are verified by the compliance team.",
              "Accept the provider policies.",
              "Submit and receive your **reference code** (for example NESSAHUB-123456).",
              "Track progress with your code at any time."
            ]],
            ["table", ["Stage", "What it means"], [
              ["Submitted", "Received."],
              ["Initial review", "The team checks your application."],
              ["Documents requested", "Send the documents asked for."],
              ["Verification", "Licences and documents verified."],
              ["Background checks", "Checks completed."],
              ["Interview / inspection", "An interview, or a premises inspection for pharmacies, labs and scan centres."],
              ["Agreement", "You sign the partner or clinician agreement."],
              ["Approved", "You are approved."],
              ["Account created", "Your NessaHub account is ready."],
              ["On hold / Rejected / Withdrawn", "Paused, not approved, or withdrawn by you."]
            ]],
            ["links", [["Open the provider portal", "https://onboard.nessahub.com"]]]
          ]
        }
      ]
    },
    {
      id: "privacy-security",
      group: "Trust",
      icon: "lock",
      title: "Privacy, safety & security",
      tagline: "Who can see your information, how it is protected, and your rights.",
      articles: [
        {
          id: "who-sees-data",
          title: "Who can see your information",
          summary: "Only the clinicians caring for you, only what they need — and every access is recorded.",
          keywords: "privacy data protection access therapy notes confidential act 843",
          body: [
            ["ul", [
              "Only the clinicians caring for you can see your record, and only what they need.",
              "**Therapy notes stay between you and your therapist.**",
              "Pharmacies see the prescription; labs see the order; insurers see claims — not your whole record.",
              "Every access to your record is recorded in an audit log.",
              "NessaHub follows Ghana’s Data Protection Act, 2012 (Act 843)."
            ]],
            ["links", [
              pol("Health Information Privacy Notice", "patient-privacy-data-protection"),
              pol("Data Sharing & Service Providers", "data-sharing-third-party")
            ]]
          ]
        },
        {
          id: "account-security",
          title: "Keeping your account secure",
          summary: "Two-step sign-in, strong passwords and how NessaHub protects accounts.",
          keywords: "security password two-step lockout session encryption",
          body: [
            ["ul", [
              "Turn on **two-step sign-in** — a 6-digit email code at each sign-in.",
              "Use a strong password you do not use elsewhere.",
              "Repeated wrong passwords temporarily lock sign-in, to stop guessing.",
              "Sessions expire; signing out ends them everywhere it applies.",
              "Connections are encrypted."
            ]],
            ["links", [pol("Security & Breach Notification Policy", "security-policy")]]
          ]
        },
        {
          id: "consent-records",
          title: "Consent and your records",
          summary: "What you agreed to, how long records are kept, and closing your account.",
          keywords: "consent history records retention delete account close",
          body: [
            ["p", "NessaHub records each policy and consent you accept, with the version and time, and you can see your consent history. When a policy changes, you are asked to accept the new version."],
            ["p", "You can ask to **delete your account** from Settings or by contacting support. Some medical records must be kept for a period by law; NessaHub explains what is kept and why."],
            ["links", [
              pol("Medical Records & Retention Policy", "record-keeping-medical-records"),
              pol("Accounts: Access, Suspension & Closure", "account-access-lifecycle-policy"),
              pol("Informed Consent for Care", "informed-consent")
            ]]
          ]
        }
      ]
    },
    {
      id: "policies",
      group: "Trust",
      icon: "book",
      title: "All policies",
      tagline: "Every NessaHub policy, published in full at policy.nessahub.com.",
      articles: [
        {
          id: "legal-essentials",
          title: "Legal essentials",
          summary: "Terms, privacy, cookies, conduct, disclaimer, IP, accessibility and company information.",
          keywords: "terms of service privacy policy cookies conduct disclaimer intellectual property accessibility legal notice",
          body: [["links", [
            pol("Terms of Service", "terms-of-service"), pol("Privacy Policy", "privacy-policy"), pol("Cookie Policy", "cookie-policy"),
            pol("Acceptable Use & Community Rules", "user-conduct-community-rules"), pol("Medical Disclaimer & Limits of Telehealth", "medical-disclaimer"),
            pol("Intellectual Property & Content Policy", "intellectual-property-policy"), pol("Accessibility Statement", "accessibility-statement"),
            pol("Legal Notice & Company Information", "legal-notice")
          ]]]
        },
        {
          id: "care-policies",
          title: "Your care",
          summary: "Telemedicine, consent, emergencies, clinical quality, prescriptions, diagnostics, home care, transfers, matching, AI, calls and therapy.",
          keywords: "telemedicine consent emergency crisis clinical governance prescription pharmacy lab scan home care transfer matching ai recording therapy",
          body: [["links", [
            pol("Telemedicine Policy", "telemedicine-policy"), pol("Informed Consent for Care", "informed-consent"),
            pol("Emergency & Crisis Policy", "emergency-crisis-management"), pol("Clinical Governance & Quality of Care", "medical-practice-clinical-governance"),
            pol("Prescriptions & E-Pharmacy Policy", "prescription-e-pharmacy-policy"), pol("Laboratory & Imaging (Lab and Scan) Policy", "diagnostics-lab-scan-policy"),
            pol("Home Care Services Policy", "home-care-services-policy"), pol("Transfer of Care Policy", "care-transfer-policy"),
            pol("How Matching Works (Doctors & Therapists)", "care-matching-policy"), pol("AI Assistant & Artificial Intelligence Policy", "ai-assistant-policy"),
            pol("Messaging, Calls, Recording & Transcription Policy", "communications-media-video-call-policy"), pol("Mental Health & Therapy Policy", "mental-health-therapy-policy")
          ]]]
        },
        {
          id: "privacy-policies",
          title: "Privacy & data",
          summary: "Health privacy, data sharing, security, records, communications, children and accounts.",
          keywords: "privacy data sharing security breach records retention notifications children parental consent accounts",
          body: [["links", [
            pol("Health Information Privacy Notice", "patient-privacy-data-protection"), pol("Data Sharing & Service Providers", "data-sharing-third-party"),
            pol("Security & Breach Notification Policy", "security-policy"), pol("Medical Records & Retention Policy", "record-keeping-medical-records"),
            pol("Notifications & Electronic Communications", "notifications-electronic-communications"),
            pol("Children, Young People & Parental Consent", "children-minors-parental-consent-policy"),
            pol("Accounts: Access, Suspension & Closure", "account-access-lifecycle-policy")
          ]]]
        },
        {
          id: "payment-policies",
          title: "Payments & refunds",
          summary: "Billing, promotions and insurance billing.",
          keywords: "payment billing refund promotion discount insurance billing",
          body: [["links", [
            pol("Payments & Billing Policy", "payment-billing"), pol("Promotions, Discounts & Free Consultation Terms", "promotions-discounts-terms"),
            pol("Insurance Billing Policy", "insurance-billing-policy")
          ]]]
        },
        {
          id: "provider-policies",
          title: "Providers & partners",
          summary: "Clinician terms and code of conduct, partner terms and insurer terms.",
          keywords: "clinician terms code of conduct partner pharmacy lab imaging insurer",
          body: [["links", [
            pol("Clinician Terms of Service", "provider-terms-of-service"), pol("Clinician Code of Conduct", "provider-code-of-conduct"),
            pol("Partner Terms: Pharmacies, Laboratories & Imaging Centres", "partner-terms-pharmacy-lab-imaging"),
            pol("Insurer & Payer Partner Terms", "insurer-partner-terms")
          ]]]
        },
        {
          id: "compliance-policies",
          title: "Complaints & compliance",
          summary: "Complaints and appeals, reviews and ratings, anti-fraud and anti-bribery.",
          keywords: "complaint appeal grievance review rating fraud bribery",
          body: [["links", [
            pol("Complaints & Appeals Policy", "complaints-grievance-policy"), pol("Reviews & Ratings Policy", "reviews-ratings-policy"),
            pol("Anti-Fraud & Anti-Bribery Policy", "anti-fraud-anti-bribery-policy")
          ]]]
        }
      ]
    },
    {
      id: "help",
      group: "Trust",
      icon: "lifebuoy",
      title: "Help, support & emergencies",
      tagline: "Getting help, reporting problems and what to do in a crisis.",
      articles: [
        {
          id: "crisis",
          title: "Crisis & emergencies",
          summary: "NessaHub is not an emergency service — what to do if someone is at risk.",
          keywords: "crisis emergency suicide self-harm danger urgent help 988",
          body: [
            ["warn", "If you or someone else is in immediate danger, call your local emergency services now."],
            ["ul", [
              "In the United States and Canada, call or text **988** (Suicide & Crisis Lifeline).",
              "Elsewhere, contact your local emergency number or crisis line.",
              "Reach out to someone you trust who can stay with you.",
              "Continue any care plan you already have with your licensed clinician."
            ]],
            ["p", "NessaHub support is for non-urgent platform questions only. Requests that mention an emergency or self-harm are flagged urgent and show emergency guidance."],
            ["links", [pol("Emergency & Crisis Policy", "emergency-crisis-management")]]
          ]
        },
        {
          id: "getting-help",
          title: "Getting help and reporting an issue",
          summary: "Help centre, FAQs, support tickets and Report Issue.",
          keywords: "help support contact ticket report issue faq bug complaint",
          body: [
            ["ul", [
              "**Help centre** on nessahub.com — topics, shortcuts and common questions.",
              "**FAQs** — the full list of questions and answers.",
              "**Contact support** — send a message; the team replies within 1–2 business days.",
              "**Report Issue** in every dashboard — report a technical problem, billing issue, account or appointment issue, or a concern about a provider.",
              "**Complaints & appeals** — the formal route is in the Complaints & Appeals Policy."
            ]]
          ]
        },
        {
          id: "faq",
          title: "Frequently asked questions",
          summary: "Quick answers to the questions people ask most.",
          keywords: "faq questions answers common",
          body: [["faq", [
            ["How do I get started?", "Choose therapy, medical care, psychiatry or a second opinion from the home page. For therapy and psychiatry you pick who it is for (individual, teen or couples), answer a short intake and create your account."],
            ["Can I book for my teenager?", "Yes. Choose Teen. A parent or guardian gives consent first, then the teen is matched with a clinician experienced with young people."],
            ["Why am I asked for a code when I sign in?", "Two-step sign-in is on. A 6-digit code is emailed each time, so only you can get in."],
            ["How do I join a video consultation?", "Open the appointment a few minutes early and press Join. Allow your camera and microphone."],
            ["Can I reschedule or cancel?", "Yes, from the appointment in your dashboard, as long as it is not too close to the start time."],
            ["How do I pay?", "Securely through Paystack with mobile money or card. Receipts are emailed and listed under Billing."],
            ["Can I use my health insurance?", "If your insurer works with NessaHub, add your card under Insurance. Cover is checked before medicines or tests are handed over."],
            ["How do I collect my medicine?", "Show the pickup code from your Prescriptions screen at the pharmacy; the pharmacist verifies it before handing over."],
            ["Where are my lab results?", "They go to the doctor who ordered the test first; they share it with you with a note."],
            ["Who can see my information?", "Only the clinicians caring for you, and only what they need. Therapy notes stay between you and your therapist."],
            ["Can I delete my account?", "Yes, from Settings or by contacting support. Some medical records must be kept by law."]
          ]]]
        }
      ]
    }
  );
})();
