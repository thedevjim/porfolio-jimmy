/**
 * Email utilities for contact form and notifications
 */

interface EmailData {
  readonly to: string;
  readonly subject: string;
  readonly message: string;
  readonly from?: string;
}

/**
 * Sends an email using the contact form
 */
export async function sendContactEmail(emailData: EmailData): Promise<boolean> {
  try {
    // This would integrate with your email service (e.g., SendGrid, Nodemailer)
    console.log("Sending email:", emailData);

    // Placeholder for actual email sending logic
    const response: Response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailData),
    });

    return response.ok;
  } catch (error: unknown) {
    console.error("Failed to send email:", error);
    return false;
  }
}

/**
 * Validates email data before sending
 */
export function validateEmailData(emailData: EmailData): boolean {
  return (
    emailData.to.length > 0 &&
    emailData.subject.length > 0 &&
    emailData.message.length > 0
  );
}
