"use client";

import Link from "next/link";
import { useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";

import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteNavbar } from "@/components/site/SiteNavbar";
import { siteButtonClass } from "@/components/site/buttonStyles";
import { pagesContent, type PageBlock, type WorkWithUsPageContent } from "@/content/pages";
import { useSiteLanguage } from "@/hooks/useSiteLanguage";
import { defaultLanguage, type SiteLanguage } from "@/lib/language";

type TeacherFormState = {
  name: string;
  email: string;
  whatsapp: string;
  country: string;
  teachingLanguages: string[];
  spokenLanguages: string;
  experience: string;
  audience: string;
  technicalConfirmation: boolean;
  message: string;
  link: string;
  availability: string;
  notes: string;
};

type RequiredField =
  | "name"
  | "email"
  | "whatsapp"
  | "country"
  | "teachingLanguages"
  | "spokenLanguages"
  | "experience"
  | "audience"
  | "technicalConfirmation"
  | "message";

const initialFormState: TeacherFormState = {
  name: "",
  email: "",
  whatsapp: "",
  country: "",
  teachingLanguages: [],
  spokenLanguages: "",
  experience: "",
  audience: "",
  technicalConfirmation: false,
  message: "",
  link: "",
  availability: "",
  notes: "",
};

const requiredFields: RequiredField[] = [
  "name",
  "email",
  "whatsapp",
  "country",
  "teachingLanguages",
  "spokenLanguages",
  "experience",
  "audience",
  "technicalConfirmation",
  "message",
];

function getPageContent(language: SiteLanguage): WorkWithUsPageContent {
  const page = pagesContent[language].workWithUs.workWithUsPage;

  if (!page) {
    throw new Error("Work with Us page content is missing.");
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

function ButtonLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "darkSecondary";
}) {
  return (
    <Link href={href} className={siteButtonClass({ variant })}>
      {children}
      <ArrowIcon />
    </Link>
  );
}

function SectionIntro({
  eyebrow,
  title,
  body,
  light = false,
}: {
  eyebrow: string;
  title: string;
  body?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      <Eyebrow light={light}>{eyebrow}</Eyebrow>
      <h2 className={`mt-4 font-heading text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl ${light ? "text-white" : "text-[#0B1F3A]"}`}>
        {title}
      </h2>
      {body ? <p className={`mt-5 text-base leading-8 ${light ? "text-white/70" : "text-[#42526A]"}`}>{body}</p> : null}
    </div>
  );
}

function CardGrid({ cards }: { cards: readonly PageBlock[] }) {
  return (
    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <article key={card.title} className="rounded-[1.75rem] border border-[#E4EDF7] bg-white p-6 shadow-[0_16px_42px_rgba(11,31,58,0.055)]">
          <div className="mb-7 grid h-11 w-11 place-items-center rounded-2xl border border-[#CFE5FA] bg-[#EAF6FF] text-[#048EFF]">
            <CheckIcon />
          </div>
          <h3 className="font-heading text-xl font-semibold text-[#0B1F3A]">{card.title}</h3>
          <p className="mt-4 text-sm leading-7 text-[#42526A]">{card.body}</p>
        </article>
      ))}
    </div>
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

function buildWhatsAppMessage(page: WorkWithUsPageContent, form: TeacherFormState) {
  const fallback = page.form.fallbackNotProvided;

  return [
    page.whatsappMessage.intro,
    "",
    `${page.whatsappMessage.name}: ${form.name}`,
    `${page.whatsappMessage.email}: ${form.email}`,
    `${page.whatsappMessage.whatsapp}: ${form.whatsapp}`,
    `${page.whatsappMessage.country}: ${form.country}`,
    `${page.whatsappMessage.teachingLanguages}: ${form.teachingLanguages.join(", ")}`,
    `${page.whatsappMessage.spokenLanguages}: ${form.spokenLanguages}`,
    `${page.whatsappMessage.experience}: ${form.experience}`,
    `${page.whatsappMessage.audience}: ${form.audience}`,
    `${page.whatsappMessage.availability}: ${form.availability.trim() || fallback}`,
    `${page.whatsappMessage.link}: ${form.link.trim() || fallback}`,
    `${page.whatsappMessage.technicalConfirmation}: ${form.technicalConfirmation ? page.form.yes : page.form.no}`,
    `${page.whatsappMessage.message}: ${form.message}`,
    form.notes.trim() ? `${page.form.fields.notes}: ${form.notes}` : "",
  ]
    .filter(Boolean)
    .join("\n");
}

function TeacherInterestForm({ page }: { page: WorkWithUsPageContent }) {
  const [form, setForm] = useState<TeacherFormState>(initialFormState);
  const [errors, setErrors] = useState<Partial<Record<RequiredField, string>>>({});
  const [configMessage, setConfigMessage] = useState("");

  const inputClass =
    "min-h-12 rounded-2xl border border-[#D8E6F4] bg-white px-4 text-sm font-medium text-[#0B1F3A] outline-none transition placeholder:text-[#7A8798] focus:border-[#048EFF] focus:ring-4 focus:ring-[#048EFF]/15";
  const textareaClass =
    "min-h-36 rounded-2xl border border-[#D8E6F4] bg-white px-4 py-3 text-sm font-medium text-[#0B1F3A] outline-none transition placeholder:text-[#7A8798] focus:border-[#048EFF] focus:ring-4 focus:ring-[#048EFF]/15";

  function clearError(field: RequiredField) {
    setErrors((current) => {
      const next = { ...current };
      delete next[field];
      return next;
    });
  }

  function updateTextField(field: keyof Omit<TeacherFormState, "teachingLanguages" | "technicalConfirmation">, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    if (requiredFields.includes(field as RequiredField)) {
      clearError(field as RequiredField);
    }
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    updateTextField(event.target.name as keyof Omit<TeacherFormState, "teachingLanguages" | "technicalConfirmation">, event.target.value);
  }

  function handleLanguageToggle(language: string, checked: boolean) {
    setForm((current) => ({
      ...current,
      teachingLanguages: checked
        ? [...current.teachingLanguages, language]
        : current.teachingLanguages.filter((item) => item !== language),
    }));
    clearError("teachingLanguages");
  }

  function handleTechnicalConfirmation(checked: boolean) {
    setForm((current) => ({ ...current, technicalConfirmation: checked }));
    clearError("technicalConfirmation");
  }

  function validateForm() {
    const nextErrors: Partial<Record<RequiredField, string>> = {};

    requiredFields.forEach((field) => {
      if (field === "teachingLanguages" && form.teachingLanguages.length === 0) {
        nextErrors[field] = page.form.requiredError;
        return;
      }

      if (field === "technicalConfirmation" && !form.technicalConfirmation) {
        nextErrors[field] = page.form.requiredError;
        return;
      }

      if (field !== "teachingLanguages" && field !== "technicalConfirmation" && !form[field].trim()) {
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
      id="teacher-form"
      onSubmit={handleSubmit}
      className="scroll-mt-24 rounded-[2rem] border border-[#E4EDF7] bg-white p-5 shadow-[0_24px_80px_rgba(11,31,58,0.09)] sm:p-7 lg:p-8"
      noValidate
    >
      <div className="max-w-2xl">
        <h2 className="font-heading text-2xl font-semibold leading-tight text-[#0B1F3A]">{page.form.title}</h2>
        <p className="mt-3 text-sm leading-7 text-[#42526A]">{page.form.body}</p>
        <p className="mt-4 rounded-2xl border border-[#D8E6F4] bg-[#F3F7FB] px-4 py-3 text-sm leading-7 text-[#42526A]">
          {page.form.note}
        </p>
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
      </div>

      <fieldset className="mt-5 rounded-[1.5rem] border border-[#D8E6F4] p-4">
        <legend className="px-2 text-sm font-semibold text-[#0B1F3A]">{page.form.fields.teachingLanguages}</legend>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {page.form.teachingLanguageOptions.map((language) => (
            <label key={language} className="flex items-center gap-3 rounded-2xl bg-[#F3F7FB] px-4 py-3 text-sm font-semibold text-[#0B1F3A]">
              <input
                type="checkbox"
                checked={form.teachingLanguages.includes(language)}
                onChange={(event) => handleLanguageToggle(language, event.target.checked)}
                className="h-4 w-4 accent-[#048EFF]"
              />
              {language}
            </label>
          ))}
        </div>
        {errors.teachingLanguages ? <p className="mt-3 text-xs font-medium text-[#B42318]">{errors.teachingLanguages}</p> : null}
      </fieldset>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <FieldShell id="spokenLanguages" label={page.form.fields.spokenLanguages} error={errors.spokenLanguages}>
          <input id="spokenLanguages" name="spokenLanguages" type="text" value={form.spokenLanguages} onChange={handleInputChange} placeholder={page.form.placeholders.spokenLanguages} className={inputClass} required />
        </FieldShell>
        <FieldShell id="experience" label={page.form.fields.experience} error={errors.experience}>
          <select id="experience" name="experience" value={form.experience} onChange={handleInputChange} className={inputClass} required>
            <option value="">{page.form.selectPlaceholder}</option>
            {page.form.experienceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </FieldShell>
        <FieldShell id="audience" label={page.form.fields.audience} error={errors.audience}>
          <select id="audience" name="audience" value={form.audience} onChange={handleInputChange} className={inputClass} required>
            <option value="">{page.form.selectPlaceholder}</option>
            {page.form.audienceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </FieldShell>
        <FieldShell id="availability" label={page.form.fields.availability}>
          <input id="availability" name="availability" type="text" value={form.availability} onChange={handleInputChange} placeholder={page.form.placeholders.availability} className={inputClass} />
        </FieldShell>
        <FieldShell id="link" label={page.form.fields.link}>
          <input id="link" name="link" type="url" value={form.link} onChange={handleInputChange} placeholder={page.form.placeholders.link} className={inputClass} />
        </FieldShell>
        <FieldShell id="notes" label={page.form.fields.notes}>
          <input id="notes" name="notes" type="text" value={form.notes} onChange={handleInputChange} placeholder={page.form.placeholders.notes} className={inputClass} />
        </FieldShell>
      </div>

      <div className="mt-5">
        <FieldShell id="message" label={page.form.fields.message} error={errors.message}>
          <textarea id="message" name="message" value={form.message} onChange={handleInputChange} placeholder={page.form.placeholders.message} className={textareaClass} required />
        </FieldShell>
      </div>

      <label className="mt-5 flex gap-3 rounded-[1.5rem] border border-[#D8E6F4] bg-[#F3F7FB] p-4 text-sm font-semibold leading-7 text-[#0B1F3A]">
        <input
          type="checkbox"
          checked={form.technicalConfirmation}
          onChange={(event) => handleTechnicalConfirmation(event.target.checked)}
          className="mt-1 h-4 w-4 shrink-0 accent-[#048EFF]"
        />
        <span>
          {page.form.technicalConfirmation}
          {errors.technicalConfirmation ? <span className="mt-2 block text-xs font-medium text-[#B42318]">{errors.technicalConfirmation}</span> : null}
        </span>
      </label>

      <button
        type="submit"
        className={siteButtonClass({ className: "mt-7 w-full px-6 sm:w-auto" })}
      >
        {page.form.submit}
        <ArrowIcon />
      </button>
    </form>
  );
}

export default function WorkWithUsClient() {
  const { language } = useSiteLanguage(defaultLanguage);
  const page = getPageContent(language);

  return (
    <main className="min-h-screen bg-[#F3F7FB] text-[#0B1F3A]">
      <SiteNavbar variant="light" language={language} />

      <section className="bg-[#F3F7FB] px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
          <div>
            <Eyebrow>{page.hero.eyebrow}</Eyebrow>
            <h1 className="mt-5 max-w-4xl font-heading text-4xl font-semibold leading-tight text-[#0B1F3A] sm:text-5xl lg:text-6xl">
              {page.hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#42526A] sm:text-lg">{page.hero.body}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#teacher-form">{page.hero.primaryCta}</ButtonLink>
              <ButtonLink href="#requirements" variant="secondary">
                {page.hero.secondaryCta}
              </ButtonLink>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {page.hero.quickFacts.map((fact) => (
                <div key={fact} className="rounded-2xl border border-[#E4EDF7] bg-white px-4 py-3 text-sm font-semibold text-[#0B1F3A] shadow-[0_10px_28px_rgba(11,31,58,0.04)]">
                  {fact}
                </div>
              ))}
            </div>
          </div>
          <div className="relative min-h-[390px] overflow-hidden rounded-[2rem] border border-[#E4EDF7] bg-white p-6 shadow-[0_24px_80px_rgba(11,31,58,0.08)]">
            <div className="absolute left-6 top-8 h-40 w-[62%] rounded-[1.75rem] border border-[#D8E6F4] bg-[#F3F7FB]" />
            <div className="absolute bottom-8 right-6 h-44 w-[70%] rounded-[1.75rem] border border-[#CFE5FA] bg-[#EAF6FF]" />
            <div className="absolute bottom-28 left-14 h-3 w-28 rounded-full bg-[#048EFF]/40" />
            <div className="absolute bottom-20 left-14 h-3 w-52 rounded-full bg-[#D8E6F4]" />
            <div className="absolute right-16 top-24 h-11 w-11 rounded-full bg-[#F3B737]" />
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1180px]">
          <SectionIntro eyebrow={page.why.eyebrow} title={page.why.title} body={page.why.body} />
          <CardGrid cards={page.why.cards} />
        </div>
      </section>

      <section className="bg-[#F3F7FB] px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1180px]">
          <SectionIntro eyebrow={page.profile.eyebrow} title={page.profile.title} body={page.profile.body} />
          <CardGrid cards={page.profile.cards} />
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-[1180px] gap-8 lg:grid-cols-[1fr_0.92fr] lg:items-center">
          <SectionIntro eyebrow={page.languages.eyebrow} title={page.languages.title} body={page.languages.body} />
          <div className="grid gap-4 sm:grid-cols-2">
            {page.languages.items.map((language) => (
              <div key={language} className="rounded-[1.75rem] border border-[#E4EDF7] bg-white p-6 shadow-[0_16px_42px_rgba(11,31,58,0.055)]">
                <div className="mb-8 h-12 w-12 rounded-2xl border border-[#CFE5FA] bg-[#EAF6FF]" />
                <h3 className="font-heading text-2xl font-semibold text-[#0B1F3A]">{language}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="requirements" className="scroll-mt-24 bg-[#F3F7FB] px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1180px]">
          <SectionIntro eyebrow={page.requirements.eyebrow} title={page.requirements.title} body={page.requirements.body} />
          <CardGrid cards={page.requirements.items} />
          <p className="mt-8 rounded-[1.5rem] border border-[#D8E6F4] bg-white px-5 py-4 text-sm font-semibold leading-7 text-[#0B1F3A]">
            {page.requirements.deviceNote}
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1180px]">
          <SectionIntro eyebrow={page.process.eyebrow} title={page.process.title} body={page.process.body} />
          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {page.process.steps.map((step, index) => (
              <article key={step.title} className="rounded-[1.5rem] border border-[#E4EDF7] bg-white p-6 shadow-[0_16px_42px_rgba(11,31,58,0.055)]">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[#EAF6FF] font-heading text-sm font-semibold text-[#048EFF]">
                  {index + 1}
                </span>
                <h3 className="mt-6 font-heading text-lg font-semibold text-[#0B1F3A]">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#42526A]">{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F3F7FB] px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-[1180px] gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <TeacherInterestForm page={page} />
          <div className="rounded-[2rem] bg-[#0B1F3A] p-7 text-white shadow-[0_24px_80px_rgba(11,31,58,0.18)]">
            <Eyebrow light>{page.finalCta.primaryCta}</Eyebrow>
            <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight">{page.finalCta.title}</h2>
            <p className="mt-4 text-sm leading-7 text-white/70">{page.finalCta.body}</p>
            <ButtonLink href="#teacher-form" variant="darkSecondary">
              {page.finalCta.primaryCta}
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1180px]">
          <SectionIntro eyebrow={page.faq.eyebrow} title={page.faq.title} />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {page.faq.items.map((item) => (
              <article key={item.title} className="rounded-[1.5rem] border border-[#E4EDF7] bg-white p-6 shadow-[0_12px_34px_rgba(11,31,58,0.04)]">
                <h3 className="font-heading text-xl font-semibold text-[#0B1F3A]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#42526A]">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-10">
        <div className="mx-auto grid max-w-[1180px] gap-8 overflow-hidden rounded-[2rem] bg-[#0B1F3A] p-8 text-white shadow-[0_28px_90px_rgba(11,31,58,0.22)] md:grid-cols-[1fr_auto] md:items-center sm:p-10 lg:p-12">
          <div>
            <h2 className="font-heading text-3xl font-semibold leading-tight sm:text-4xl">{page.finalCta.title}</h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-white/70">{page.finalCta.body}</p>
          </div>
          <ButtonLink href="#teacher-form">{page.finalCta.primaryCta}</ButtonLink>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
