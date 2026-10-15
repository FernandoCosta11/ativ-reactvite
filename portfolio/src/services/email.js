import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_FOR_ME = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_FOR_ME;
const TEMPLATE_FOR_SENDER = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_FOR_SENDER;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const isEmailConfigured = Boolean(SERVICE_ID && TEMPLATE_FOR_ME && PUBLIC_KEY);

/**
 * Envia a mensagem do formulário de contato.
 * As variáveis usadas nos templates do EmailJS são: {{name}}, {{email}}, {{message}}, {{time}}.
 * Se houver template de resposta automática, ele também é enviado (falha nele não cancela o envio principal).
 */
export async function sendContactMessage({ name, email, message }) {
  if (!isEmailConfigured) {
    throw new Error('EMAIL_NOT_CONFIGURED');
  }

  const params = {
    name,
    email,
    message,
    time: new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' }),
  };

  await emailjs.send(SERVICE_ID, TEMPLATE_FOR_ME, params, { publicKey: PUBLIC_KEY });

  if (TEMPLATE_FOR_SENDER) {
    emailjs
      .send(SERVICE_ID, TEMPLATE_FOR_SENDER, params, { publicKey: PUBLIC_KEY })
      .catch(() => {
        /* resposta automática é opcional */
      });
  }
}
