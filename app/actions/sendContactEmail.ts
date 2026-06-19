"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const my_email = process.env.MY_EMAIL_ADDRESS || "";

interface ContactFormData {
  fullName: string;
  email: string;
  age?: string;
  message: string;
}

export async function sendContactEmail(data: ContactFormData) {
  const { fullName, email, age, message } = data;

  try {
    {/* Envoi du courriel principal aux administrateurs du club */}
    await resend.emails.send({
      from: "Les Gaulois Rugby <onboarding@resend.dev>",
      to: my_email,
      replyTo: my_email,
      subject: `Nouvelle demande de renseignements - ${fullName}`,
      html: `
        <h2>Nouvelle demande reçue depuis le site web</h2>
        <p><strong>Nom complet :</strong> ${fullName}</p>
        <p><strong>Courriel de contact :</strong> ${email}</p>
        <p><strong>Âge du joueur/joueuse :</strong> ${age ? age + " ans" : "Non spécifié"}</p>
        <p><strong>Message :</strong></p>
        <p style="white-space: pre-wrap; background-color: #f8fafc; padding: 15px; border-radius: 8px;">${message}</p>
      `,
    });

    {/* Envoi automatique de la copie conforme à l'utilisateur */}
    await resend.emails.send({
      from: "Les Gaulois Rugby <onboarding@resend.dev>",
      to: my_email,
      subject: "Copie de votre demande aux Gaulois de Montréal",
      html: `
        <div style="font-family: sans-serif; color: #000049;">
          <h3>Bonjour ${fullName},</h3>
          <p>Nous avons bien reçu votre demande de renseignements et nous vous remercions de votre intérêt pour le club.</p>
          <p>Un membre de notre équipe de bénévoles ou d'éducateurs vous répondra dans les plus brefs délais (généralement sous 48h).</p>
          <hr style="border: none; border-top: 1px solid #000049/10; margin: 20px 0;" />
          <h4>Rappel de votre message :</h4>
          <p style="color: #000049/80; italic">"${message}"</p>
          <br />
          <p>À bientôt sur le terrain !</p>
          <p><strong>L'équipe des Gaulois de Montréal</strong></p>
        </div>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Erreur lors de l'envoi des courriels :", error);
    return { success: false, error: "Une erreur est survenue lors de l'envoi." };
  }
}