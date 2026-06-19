"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const my_email = process.env.MY_EMAIL_ADDRESS || "";

interface TrialRequestData {
  email: string;
  periode: string;
  nomParticipant: string;
  ageParticipant: string;
  contactUrgence: string;
}

export async function sendTrialRequest(data: TrialRequestData) {
  if (!data.email || !data.periode || !data.nomParticipant || !data.ageParticipant || !data.contactUrgence) {
    return { success: false, error: "Tous les champs obligatoires doivent être remplis." };
  }

  try {
    {/* Envoi de la notification principale aux administrateurs du club */}
    await resend.emails.send({
      from: "Les Gaulois Rugby <onboarding@resend.dev>", 
      to: my_email, 
      replyTo: my_email, 
      subject: `Nouvelle demande d'essai - ${data.nomParticipant} (${data.periode})`,
      html: `
        <div style="font-family: sans-serif; color: #000049; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; padding: 24px; rounded-width: 12px;">
          <h2 style="color: #000049; text-transform: uppercase; border-bottom: 2px solid #f368f1; padding-bottom: 10px;">
            Nouvelle demande d'essai gratuit
          </h2>
          <p>Un parent vient de soumettre une demande d'initiation via le site web :</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 180px;">Nom du participant :</td>
              <td style="padding: 8px 0;">${data.nomParticipant}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Âge indiqué :</td>
              <td style="padding: 8px 0;">${data.ageParticipant} ans</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Période souhaitée :</td>
              <td style="padding: 8px 0; color: #f368f1; font-weight: bold;">${data.periode}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Courriel du parent :</td>
              <td style="padding: 8px 0;"><a href="mailto:${data.email}">${data.email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Urgence / Cellulaire :</td>
              <td style="padding: 8px 0;">${data.contactUrgence}</td>
            </tr>
          </table>
          
          <div style="margin-top: 30px; font-size: 11px; color: #a0aec0; text-align: center; font-family: monospace;">
            Formulaire d'onboarding — Synchronisé sur la saison en cours
          </div>
        </div>
      `,
    });

    {/* Envoi automatique de la copie conforme de confirmation au parent */}
    await resend.emails.send({
      from: "Les Gaulois Rugby <onboarding@resend.dev>", 
      to: my_email,
      replyTo: my_email,
      subject: `Demande d'essai gratuit - ${data.nomParticipant}`,
      html: `
        <div style="font-family: sans-serif; color: #000049; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; padding: 24px; border-radius: 12px;">
          
          <div style="text-align: center; margin-bottom: 24px; padding-bottom: 24px; border-bottom: 2px solid #f368f1;">
            <h2 style="color: #000049; text-transform: uppercase; margin: 0; font-size: 20px; tracking-tight: -0.025em;">
              Félicitations, la demande est transmise !
            </h2>
            <p style="font-size: 14px; color: #4a5568; margin: 5px 0 0 0;">
              Ceci est une copie de confirmation pour vos dossiers.
            </p>
          </div>
          
          <p style="font-size: 14px; line-height: 1.6;">Bonjour,</p>
          <p style="font-size: 14px; line-height: 1.6;">
            Nous avons bien reçu votre demande d'essai gratuit pour le club de rugby <strong>Les Gaulois</strong>. Un responsable d'équipe examinera les détails et vous contactera rapidement par courriel pour valider le premier entraînement.
          </p>
          
          <div style="background-color: #f8fafc; border: 1px solid #edf2f7; border-radius: 8px; padding: 16px; margin: 24px 0;">
            <h3 style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #f368f1; margin-top: 0; margin-bottom: 12px;">
              Détails de la demande
            </h3>
            <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
              <tr>
                <td style="padding: 6px 0; font-weight: bold; color: #4a5568; width: 160px;">Participant :</td>
                <td style="padding: 6px 0; color: #000049;">${data.nomParticipant}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; font-weight: bold; color: #4a5568;">Âge du joueur :</td>
                <td style="padding: 6px 0; color: #000049;">${data.ageParticipant} ans</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; font-weight: bold; color: #4a5568;">Période choisie :</td>
                <td style="padding: 6px 0; color: #000049; font-weight: bold;">${data.periode}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; font-weight: bold; color: #4a5568;">Contact d'urgence :</td>
                <td style="padding: 6px 0; color: #000049;">${data.contactUrgence}</td>
              </tr>
            </table>
          </div>
          
          <p style="font-size: 13px; color: #718096; line-height: 1.5; font-style: italic;">
            * Rappel : L'initiation gratuite dure 4 semaines et est totalement sans engagement financier ou réglementaire.
          </p>
          
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 30px 0;" />
          
          <div style="text-align: center; font-size: 11px; color: #a0aec0; font-family: monospace;">
            Club de Rugby Les Gaulois
          </div>
        </div>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Erreur lors de l'envoi des courriels :", error);
    return { success: false, error: "Une erreur est survenue lors de l'envoi." };
  }
}