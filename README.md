# Devity Technologies Website

Vite + React + Tailwind website for Devity Technologies.

## Contact Form Email (EmailJS)

This project uses EmailJS to send:

- 1 email to you (with the submitted form details)
- 1 auto-reply to the client ("thanks for reaching out")

### 1) Install + configure env vars

- Copy [.env.example](.env.example) to `.env.local`
- Fill in:
  - `VITE_EMAILJS_PUBLIC_KEY`
  - `VITE_EMAILJS_SERVICE_ID`
  - `VITE_EMAILJS_TEMPLATE_ID_OWNER`
  - `VITE_EMAILJS_TEMPLATE_ID_REPLY`

### 2) EmailJS dashboard setup

- Create an EmailJS **Service** (connect Gmail/Outlook/etc.)
- Create 2 **Email Templates**:

**Owner template** (sent to you):

- Set **To email** to your inbox (static)
- Template variables used by the app:
  - `from_name`
  - `from_email`
  - `project_type`
  - `message`
  - `page_url`

**Auto-reply template** (sent to client):

- Set **To email** to `{{to_email}}`
- Template variables used by the app:
  - `to_name`
  - `to_email`
  - `project_type`

### 3) Domain protection (important)

In EmailJS settings, restrict usage to your production domain(s) to prevent abuse.
