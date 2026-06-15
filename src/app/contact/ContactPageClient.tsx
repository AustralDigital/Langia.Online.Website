"use client";

import Link from "next/link";
import { useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";

import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteNavbar } from "@/components/site/SiteNavbar";
import { pagesContent, type ContactPageContent } from "@/content/pages";

type ContactFormState = {
  name: string;
  email: string;
  whatsapp: string;
  country: string;
  preferredLanguage: string;
  company: string;
  interest: string;
  message: string;
};

type RequiredField = Exclude<keyof ContactFormState, "company">;

const initialFormState: ContactFormState = {
  name: "",
  email: "",
  whatsapp: "",
  country: "",
  preferredLanguage: "",
  company: "",
  interest: "",
  message: "",
};

const requiredFields: RequiredField[] = [
  "name",
  "email",
  "whatsapp",
  "country",
  "preferredLanguage",
  "interest",
  "message",
];

const socialLinks = ["Instagram", "LinkedIn", "Facebook", "YouTube"] as const;

function getContactContent(): ContactPageContent {
  const page = pagesContent.es.contact.contactPage;

  if (!page) {
    throw new Error("Contact page content is missing.");
  }

  return page;
}

function ArrowIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p className={`font-heading text-xs font-semibold uppercase tracking-[0.18em] ${light ? "text-[#7EC7FF]" : "text-[#048EFF]"}`}>
      {children}
    </p>
  );
}

function FieldShell({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-[#0B1F3A]" htmlFor={id}>
      {label}
      {children}
      {error ? <span className="text-xs font-medium text-[#B42318]">{error}</span> : null}
    </label>
  );
}

function buildWhatsAppMessage(page: ContactPageContent, form: ContactFormState) {
  const company = form.company.trim() || page.form.companyFallback;

  return [
    page.whatsappMessage.intro,
    "",
    `${page.whatsappMessage.name}: ${form.name}`,
    `${page.whatsappMessage.email}: ${form.email}`,
    `${page.whatsappMessage.whatsapp}: ${form.whatsapp}`,
    `${page.whatsappMessage.country}: ${form.country}`,
    `${page.whatsappMessage.preferredLanguage}: ${form.preferredLanguage}`,
    `${page.whatsappMessage.company}: ${company}`,
    `${page.whatsappMessage.interest}: ${form.interest}`,
    `${page.whatsappMessage.message}: ${form.message}`,
  ].join("\n");
}

function ContactForm({ page }: { page: ContactPageContent }) {
  const [form, setForm] = useState<ContactFormState>(initialFormState);
  const [errors, setErrors] = useState<Partial<Record<RequiredField, string>>>({});
  const [configMessage, setConfigMessage] = useState("");

  const inputClass =
    "min-h-12 rounded-2xl border border-[#D8E6F4] bg-white px-4 text-sm font-medium text-[#0B1F3A] outline-none transition placeholder:text-[#7A8798] focus:border-[#048EFF] focus:ring-4 focus:ring-[#048EFF]/15";
  const textareaClass =
    "min-h-36 rounded-2xl border border-[#D8E6F4] bg-white px-4 py-3 text-sm font-medium text-[#0B1F3A] outline-none transition placeholder:text-[#7A8798] focus:border-[#048EFF] focus:ring-4 focus:ring-[#048EFF]/15";

  function updateField(field: keyof ContactFormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    if (field !== "company") {
      setErrors((current) => {
        const next = { ...current };
        delete next[field];
        return next;
      });
    }
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    updateField(event.target.name as keyof ContactFormState, event.target.value);
  }

  function validateForm() {
    const nextErrors: Partial<Record<RequiredField, string>> = {};

    requiredFields.forEach((field) => {
      if (!form[field].trim()) {
        nextErrors[field] = page.form.requiredError;
      }
    });

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setConfigMessage("");

    if (!validateForm()) {
      return;
    }

    const whatsappNumber = process.env.NEXT_PUBLIC_LANGIA_WHATSAPP_NUMBER?.trim();

    if (!whatsappNumber) {
      console.warn(page.form.configWarning);
      setConfigMessage(page.form.configWarning);
      return;
    }

    const message = buildWhatsAppMessage(page, form);
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    const openedWindow = window.open(url, "_blank", "noopener,noreferrer");

    if (!openedWindow) {
      window.location.href = url;
    }
  }

  return (
    <form
      id="contact-form"
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-[#E4EDF7] bg-white p-5 shadow-[0_24px_80px_rgba(11,31,58,0.09)] sm:p-7 lg:p-8"
      noValidate
    >
      <div className="max-w-xl">
        <h2 className="font-heading text-2xl font-semibold leading-tight text-[#0B1F3A]">{page.form.title}</h2>
        <p className="mt-3 text-sm leading-7 text-[#42526A]">{page.form.body}</p>
      </div>

      {configMessage ? (
        <p className="mt-5 rounded-2xl border border-[#F3B737]/40 bg-[#FFF8E6] px-4 py-3 text-sm font-medium leading-6 text-[#6F4B00]">
          {configMessage}
        </p>
      ) : null}

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <FieldShell id="name" label={page.form.fields.name} error={errors.name}>
          <input id="name" name="name" type="text" value={form.name} onChange={handleInputChange} placeholder={page.form.placeholders.name} className={inputClass} required />
        </FieldShell>
        <FieldShell id="email" label={page.form.fields.email} error={errors.email}>
          <input id="email" name="email" type="email" value={form.email} onChange={handleInputChange} placeholder={page.form.placeholders.email} className={inputClass} required />
        </FieldShell>
        <FieldShell id="whatsapp" label={page.form.fields.whatsapp} error={errors.whatsapp}>
          <input id="whatsapp" name="whatsapp" type="tel" value={form.whatsapp} onChange={handleInputChange} placeholder={page.form.placeholders.whatsapp} className={inputClass} required />
        </FieldShell>
        <FieldShell id="country" label={page.form.fields.country} error={errors.country}>
          <input id="country" name="country" type="text" value={form.country} onChange={handleInputChange} placeholder={page.form.placeholders.country} className={inputClass} required />
        </FieldShell>
        <FieldShell id="preferredLanguage" label={page.form.fields.preferredLanguage} error={errors.preferredLanguage}>
          <select id="preferredLanguage" name="preferredLanguage" value={form.preferredLanguage} onChange={handleInputChange} className={inputClass} required>
            <option value="">Selecciona una opción</option>
            {page.form.preferredLanguageOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </FieldShell>
        <FieldShell id="company" label={page.form.fields.company}>
          <input id="company" name="company" type="text" value={form.company} onChange={handleInputChange} placeholder={page.form.placeholders.company} className={inputClass} />
        </FieldShell>
        <FieldShell id="interest" label={page.form.fields.interest} error={errors.interest}>
          <select id="interest" name="interest" value={form.interest} onChange={handleInputChange} className={inputClass} required>
            <option value="">Selecciona una opción</option>
            {page.form.interestOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </FieldShell>
      </div>

      <div className="mt-5">
        <FieldShell id="message" label={page.form.fields.message} error={errors.message}>
          <textarea id="message" name="message" value={form.message} onChange={handleInputChange} placeholder={page.form.placeholders.message} className={textareaClass} required />
        </FieldShell>
      </div>

      <button
        type="submit"
        className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#048EFF] px-6 text-sm font-semibold text-white shadow-[0_16px_34px_rgba(4,142,255,0.22)] transition hover:bg-[#F3B737] sm:w-auto"
      >
        {page.form.submit}
        <ArrowIcon />
      </button>
    </form>
  );
}

export default function ContactPageClient() {
  const page = getContactContent();

  return (
    <main className="min-h-screen bg-white text-[#0B1F3A]">
      <SiteNavbar variant="light" />

      <section className="bg-[#F3F7FB] px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <Eyebrow>{page.hero.eyebrow}</Eyebrow>
            <h1 className="mt-5 max-w-4xl font-heading text-4xl font-semibold leading-tight text-[#0B1F3A] sm:text-5xl lg:text-6xl">
              {page.hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#42526A] sm:text-lg">{page.hero.body}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {page.hero.quickPoints.map((point) => (
                <span key={point} className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#D8E6F4] bg-white px-4 text-sm font-semibold text-[#0B1F3A]">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-[#EAF6FF] text-[#048EFF]">
                    <CheckIcon />
                  </span>
                  {point}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] border border-[#E4EDF7] bg-white p-6 shadow-[0_24px_80px_rgba(11,31,58,0.08)] sm:p-8">
            <div className="rounded-[1.5rem] bg-[#0B1F3A] p-6 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#7EC7FF]">Langia</p>
              <p className="mt-5 font-heading text-3xl font-semibold leading-tight">
                Online, personal, and global by design.
              </p>
              <div className="mt-8 grid gap-3">
                {page.contactCards.slice(0, 3).map((card) => (
                  <div key={card.title} className="rounded-2xl border border-white/12 bg-white/10 p-4">
                    <h2 className="text-sm font-semibold text-white">{card.title}</h2>
                    <p className="mt-2 text-sm leading-6 text-white/68">{card.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-[1180px] gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <ContactForm page={page} />
          <div className="grid gap-5">
            {page.contactCards.map((card) => (
              <article key={card.title} className="rounded-[1.5rem] border border-[#E4EDF7] bg-[#F3F7FB] p-6">
                <div className="mb-5 grid h-10 w-10 place-items-center rounded-2xl bg-white text-[#048EFF]">
                  <CheckIcon />
                </div>
                <h2 className="font-heading text-xl font-semibold text-[#0B1F3A]">{card.title}</h2>
                <p className="mt-3 text-sm leading-7 text-[#42526A]">{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F3F7FB] px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1180px]">
          <Eyebrow>{page.next.eyebrow}</Eyebrow>
          <h2 className="mt-4 max-w-3xl font-heading text-3xl font-semibold leading-tight text-[#0B1F3A] sm:text-4xl">
            {page.next.title}
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {page.next.steps.map((step, index) => (
              <article key={step} className="rounded-[1.5rem] border border-[#E4EDF7] bg-white p-6 shadow-[0_16px_44px_rgba(11,31,58,0.055)]">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[#EAF6FF] font-heading text-sm font-semibold text-[#048EFF]">
                  {index + 1}
                </span>
                <h3 className="mt-6 font-heading text-lg font-semibold leading-snug text-[#0B1F3A]">{step}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-[1180px] gap-8 rounded-[2rem] border border-[#E4EDF7] bg-white p-6 shadow-[0_22px_70px_rgba(11,31,58,0.07)] md:grid-cols-[1fr_0.85fr] md:items-center sm:p-8 lg:p-10">
          <div>
            <Eyebrow>{page.presence.eyebrow}</Eyebrow>
            <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight text-[#0B1F3A] sm:text-4xl">
              {page.presence.title}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-[#42526A]">{page.presence.body}</p>
          </div>
          <div className="rounded-[1.5rem] bg-[#F3F7FB] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#048EFF]">{page.presence.addressLabel}</p>
            <p className="mt-3 font-heading text-xl font-semibold leading-snug text-[#0B1F3A]">{page.presence.address}</p>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.16em] text-[#048EFF]">{page.presence.socialLabel}</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {socialLinks.map((label) => (
                <a key={label} href="#" aria-label={`Langia ${label}`} className="rounded-full border border-[#D8E6F4] bg-white px-4 py-2 text-sm font-semibold text-[#0B1F3A] transition hover:border-[#F3B737] hover:text-[#048EFF]">
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-10">
        <div className="mx-auto grid max-w-[1180px] gap-8 overflow-hidden rounded-[2rem] bg-[#0B1F3A] p-8 text-white shadow-[0_28px_90px_rgba(11,31,58,0.22)] md:grid-cols-[1fr_auto] md:items-center sm:p-10 lg:p-12">
          <div>
            <h2 className="font-heading text-3xl font-semibold leading-tight sm:text-4xl">{page.finalCta.title}</h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-white/70">{page.finalCta.body}</p>
          </div>
          <Link
            href="#contact-form"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#048EFF] px-5 text-sm font-semibold text-white transition hover:bg-[#F3B737]"
          >
            {page.finalCta.cta}
            <ArrowIcon />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
