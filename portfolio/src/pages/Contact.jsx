import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLanguage } from '../i18n/LanguageContext';
import { profile } from '../data/profile';
import { isEmailConfigured, sendContactMessage } from '../services/email';
import Icon from '../components/Icon';
import styles from './Contact.module.css';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// 5531999999999 -> +55 31 99999-9999
function formatPhone(digits) {
  const m = digits.match(/^(\d{2})(\d{2})(\d{4,5})(\d{4})$/);
  return m ? `+${m[1]} ${m[2]} ${m[3]}-${m[4]}` : `+${digits}`;
}

const handle = (url) => url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');

export default function Contact() {
  const { t } = useLanguage();
  const c = t.contact;
  const [status, setStatus] = useState('idle'); // idle | sending | sent | failed | notConfigured

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: 'onTouched' });

  const channels = [
    {
      key: 'email',
      href: `mailto:${profile.contacts.email}`,
      value: profile.contacts.email,
    },
    {
      key: 'whatsapp',
      href: `https://wa.me/${profile.contacts.whatsapp}`,
      value: formatPhone(profile.contacts.whatsapp),
      external: true,
    },
    {
      key: 'linkedin',
      href: profile.contacts.linkedin,
      value: handle(profile.contacts.linkedin),
      external: true,
    },
    {
      key: 'github',
      href: profile.contacts.github,
      value: handle(profile.contacts.github),
      external: true,
    },
  ];

  const onSubmit = async (data) => {
    if (!isEmailConfigured) {
      setStatus('notConfigured');
      return;
    }
    setStatus('sending');
    try {
      await sendContactMessage({
        name: data.name.trim(),
        email: data.email.trim(),
        message: data.message.trim(),
      });
      setStatus('sent');
      reset();
    } catch {
      setStatus('failed');
    }
  };

  const feedback = {
    sent: { text: c.sent, tone: styles.ok },
    failed: { text: c.failed, tone: styles.error },
    notConfigured: { text: c.notConfigured, tone: styles.error },
  }[status];

  return (
    <div className="container">
      <header className="page-head">
        <h1>{c.title}</h1>
        <p>{c.lead}</p>
      </header>

      <div className={styles.grid}>
        <section aria-labelledby="channels-title">
          <h2 id="channels-title" className={styles.blockTitle}>
            {c.channelsTitle}
          </h2>
          <ul className={styles.channels}>
            {channels.map((ch) => (
              <li key={ch.key}>
                <a
                  className={styles.channel}
                  href={ch.href}
                  {...(ch.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                >
                  <span className={styles.channelIcon}>
                    <Icon name={ch.key} size={22} />
                  </span>
                  <span className={styles.channelText}>
                    <span className={styles.channelName}>{c.channels[ch.key]}</span>
                    <span className={styles.channelValue}>{ch.value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="form-title" className={styles.formBlock}>
          <h2 id="form-title" className={styles.blockTitle}>
            {c.formTitle}
          </h2>

          <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className={styles.field}>
              <label htmlFor="name">{c.fields.name}</label>
              <input
                id="name"
                type="text"
                autoComplete="name"
                placeholder={c.placeholders.name}
                aria-invalid={errors.name ? 'true' : 'false'}
                aria-describedby={errors.name ? 'name-error' : undefined}
                {...register('name', {
                  required: c.errors.nameRequired,
                  validate: (v) => v.trim().length >= 2 || c.errors.nameShort,
                })}
              />
              {errors.name && (
                <p id="name-error" className={styles.fieldError}>
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className={styles.field}>
              <label htmlFor="email">{c.fields.email}</label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                inputMode="email"
                placeholder={c.placeholders.email}
                aria-invalid={errors.email ? 'true' : 'false'}
                aria-describedby={errors.email ? 'email-error' : undefined}
                {...register('email', {
                  required: c.errors.emailRequired,
                  pattern: { value: EMAIL_PATTERN, message: c.errors.emailInvalid },
                })}
              />
              {errors.email && (
                <p id="email-error" className={styles.fieldError}>
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className={styles.field}>
              <label htmlFor="message">{c.fields.message}</label>
              <textarea
                id="message"
                rows={6}
                placeholder={c.placeholders.message}
                aria-invalid={errors.message ? 'true' : 'false'}
                aria-describedby={errors.message ? 'message-error' : undefined}
                {...register('message', {
                  required: c.errors.messageRequired,
                  validate: (v) => v.trim().length >= 10 || c.errors.messageShort,
                })}
              />
              {errors.message && (
                <p id="message-error" className={styles.fieldError}>
                  {errors.message.message}
                </p>
              )}
            </div>

            <div className={styles.submitRow}>
              <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
                {status === 'sending' ? c.sending : c.send}
              </button>
              <p className={`${styles.feedback} ${feedback?.tone ?? ''}`} role="status" aria-live="polite">
                {feedback?.text}
              </p>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}
