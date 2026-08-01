"use client";

import { LocalizedLink as Link } from "@/components/site/LocalizedLink";
import { useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";

import {
  ArrowIcon,
  CheckIcon,
  EditorialHeading,
  FinalCTA,
  MarketingSection,
  PageHero,
  SectionEyebrow,
  SiteContainer,
} from "@/components/site/MarketingPrimitives";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteNavbar } from "@/components/site/SiteNavbar";
import { siteButtonClass } from "@/components/site/buttonStyles";
import { pagesContent, type ContactPageContent } from "@/content/pages";
import { useSiteLanguage } from "@/hooks/useSiteLanguage";
import { defaultLanguage, type SiteLanguage } from "@/lib/language";

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
type FieldError = "required" | "invalidEmail";
type FormStatus = "idle" | "config" | "opening";

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

const formUiCopy: Record<
  SiteLanguage,
  {
    invalidEmail: string;
    openingWhatsapp: string;
    privacyText: string;
    privacyLink: string;
    selectPlaceholder: string;
  }
> = {
  es: {
    invalidEmail: "Ingresa un email válido para continuar.",
    openingWhatsapp: "Abriendo WhatsApp con tu mensaje listo para enviar.",
    privacyText: "Usaremos esta información para responder y dar seguimiento a tu solicitud.",
    privacyLink: "Consulta nuestra política de privacidad.",
    selectPlaceholder: "Selecciona una opción",
  },
  pt: {
    invalidEmail: "Digite um email válido para continuar.",
    openingWhatsapp: "Abrindo o WhatsApp com sua mensagem pronta para enviar.",
    privacyText: "Usaremos estas informações para responder e acompanhar sua solicitação.",
    privacyLink: "Consulte nossa política de privacidade.",
    selectPlaceholder: "Selecione uma opção",
  },
  en: {
    invalidEmail: "Enter a valid email address to continue.",
    openingWhatsapp: "Opening WhatsApp with your message ready to send.",
    privacyText: "We’ll use this information to respond to and follow up on your request.",
    privacyLink: "Read our privacy policy.",
    selectPlaceholder: "Select an option",
  },
};

function getContactContent(language: SiteLanguage): ContactPageContent {
  const page = pagesContent[language].contact.contactPage;

  if (!page) {
    throw new Error("Contact page content is missing.");
  }

  return page;
}

function FieldShell({
  children,
  error,
  id,
  label,
}: {
  children: ReactNode;
  error?: string;
  id: string;
  label: string;
}) {
  const errorId = `${id}-error`;

  return (
    <label className="grid gap-2.5 text-base font-semibold text-[#0B1F3A]" htmlFor={id}>
      <span>{label}</span>
      {children}
      {error ? (
        <span id={errorId} className="text-sm font-medium leading-6 text-[#B42318]">
          {error}
        </span>
      ) : null}
    </label>
  );
}

function getOptionLabel(options: readonly string[], value: string): string {
  if (value === "") {
    return "";
  }

  const index = Number(value);
  return Number.isInteger(index) ? (options[index] ?? "") : "";
}

function buildWhatsAppMessage(page: ContactPageContent, form: ContactFormState) {
  const company = form.company.trim() || page.form.companyFallback;
  const preferredLanguage = getOptionLabel(page.form.preferredLanguageOptions, form.preferredLanguage);
  const interest = getOptionLabel(page.form.interestOptions, form.interest);

  return [
    page.whatsappMessage.intro,
    "",
    `${page.whatsappMessage.name}: ${form.name.trim()}`,
    `${page.whatsappMessage.email}: ${form.email.trim()}`,
    `${page.whatsappMessage.whatsapp}: ${form.whatsapp.trim()}`,
    `${page.whatsappMessage.country}: ${form.country.trim()}`,
    `${page.whatsappMessage.preferredLanguage}: ${preferredLanguage}`,
    `${page.whatsappMessage.company}: ${company}`,
    `${page.whatsappMessage.interest}: ${interest}`,
    `${page.whatsappMessage.message}: ${form.message.trim()}`,
  ].join("\n");
}

function ContactForm({ language, page }: { language: SiteLanguage; page: ContactPageContent }) {
  const [form, setForm] = useState<ContactFormState>(initialFormState);
  const [errors, setErrors] = useState<Partial<Record<RequiredField, FieldError>>>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const ui = formUiCopy[language];

  const inputClass =
    "min-h-14 w-full rounded-xl border border-[#D8E6F4] bg-white px-4 text-base font-medium text-[#0B1F3A] outline-none transition placeholder:text-[#7A8798] focus:border-[#048EFF] focus:ring-4 focus:ring-[#048EFF]/15";
  const textareaClass =
    "min-h-40 w-full resize-y rounded-xl border border-[#D8E6F4] bg-white px-4 py-3.5 text-base font-medium text-[#0B1F3A] outline-none transition placeholder:text-[#7A8798] focus:border-[#048EFF] focus:ring-4 focus:ring-[#048EFF]/15";

  function updateField(field: keyof ContactFormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setStatus("idle");

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

  function errorMessage(field: RequiredField): string | undefined {
    const error = errors[field];

    if (error === "invalidEmail") {
      return ui.invalidEmail;
    }

    return error === "required" ? page.form.requiredError : undefined;
  }

  function fieldAccessibility(field: RequiredField) {
    const hasError = Boolean(errors[field]);

    return {
      "aria-describedby": hasError ? `${field}-error` : undefined,
      "aria-invalid": hasError || undefined,
    };
  }

  function validateForm(formElement: HTMLFormElement) {
    const nextErrors: Partial<Record<RequiredField, FieldError>> = {};

    requiredFields.forEach((field) => {
      if (!form[field].trim()) {
        nextErrors[field] = "required";
      }
    });

    const emailInput = formElement.elements.namedItem("email");

    if (
      form.email.trim() &&
      emailInput instanceof HTMLInputElement &&
      !emailInput.validity.valid
    ) {
      nextErrors.email = "invalidEmail";
    }

    setErrors(nextErrors);

    const firstInvalidField = requiredFields.find((field) => nextErrors[field]);
    if (firstInvalidField) {
      window.requestAnimationFrame(() => document.getElementById(firstInvalidField)?.focus());
    }

    return !firstInvalidField;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("idle");

    if (!validateForm(event.currentTarget)) {
      return;
    }

    const whatsappNumber = process.env.NEXT_PUBLIC_LANGIA_WHATSAPP_NUMBER?.trim();

    if (!whatsappNumber) {
      setStatus("config");
      return;
    }

    const message = buildWhatsAppMessage(page, form);
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    const openedWindow = window.open("", "_blank");

    setStatus("opening");

    if (openedWindow) {
      openedWindow.opener = null;
      openedWindow.location.replace(url);
      return;
    }

    window.location.assign(url);
  }

  const firstErrorField = requiredFields.find((field) => errors[field]);

  return (
    <form
      id="contact-form"
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-[#DCE6F0] bg-white p-6 shadow-[0_22px_70px_rgba(11,31,58,0.07)] sm:p-8 lg:p-10"
      noValidate
    >
      <div className="max-w-2xl">
        <EditorialHeading as="h2" size="secondary">
          {page.form.title}
        </EditorialHeading>
        <p className="mt-5 text-base leading-8 text-[#52657A]">{page.form.body}</p>
      </div>

      <div className="sr-only" aria-live="polite">
        {firstErrorField ? errorMessage(firstErrorField) : ""}
      </div>

      {status !== "idle" ? (
        <p
          className={`mt-6 rounded-xl border px-4 py-3 text-sm font-medium leading-6 ${
            status === "config"
              ? "border-[#F3B737]/40 bg-[#FFF8E6] text-[#6F4B00]"
              : "border-[#CFE5FA] bg-[#EAF6FF] text-[#0B1F3A]"
          }`}
          role="status"
        >
          {status === "config" ? page.form.configWarning : ui.openingWhatsapp}
        </p>
      ) : null}

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <FieldShell id="name" label={page.form.fields.name} error={errorMessage("name")}>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={handleInputChange}
            placeholder={page.form.placeholders.name}
            className={inputClass}
            required
            {...fieldAccessibility("name")}
          />
        </FieldShell>
        <FieldShell id="email" label={page.form.fields.email} error={errorMessage("email")}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={handleInputChange}
            placeholder={page.form.placeholders.email}
            className={inputClass}
            required
            {...fieldAccessibility("email")}
          />
        </FieldShell>
        <FieldShell id="whatsapp" label={page.form.fields.whatsapp} error={errorMessage("whatsapp")}>
          <input
            id="whatsapp"
            name="whatsapp"
            type="tel"
            autoComplete="tel"
            value={form.whatsapp}
            onChange={handleInputChange}
            placeholder={page.form.placeholders.whatsapp}
            className={inputClass}
            required
            {...fieldAccessibility("whatsapp")}
          />
        </FieldShell>
        <FieldShell id="country" label={page.form.fields.country} error={errorMessage("country")}>
          <input
            id="country"
            name="country"
            type="text"
            autoComplete="country-name"
            value={form.country}
            onChange={handleInputChange}
            placeholder={page.form.placeholders.country}
            className={inputClass}
            required
            {...fieldAccessibility("country")}
          />
        </FieldShell>
        <FieldShell
          id="preferredLanguage"
          label={page.form.fields.preferredLanguage}
          error={errorMessage("preferredLanguage")}
        >
          <select
            id="preferredLanguage"
            name="preferredLanguage"
            value={form.preferredLanguage}
            onChange={handleInputChange}
            className={inputClass}
            required
            {...fieldAccessibility("preferredLanguage")}
          >
            <option value="">{ui.selectPlaceholder}</option>
            {page.form.preferredLanguageOptions.map((option, index) => (
              <option key={option} value={String(index)}>
                {option}
              </option>
            ))}
          </select>
        </FieldShell>
        <FieldShell id="company" label={page.form.fields.company}>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            value={form.company}
            onChange={handleInputChange}
            placeholder={page.form.placeholders.company}
            className={inputClass}
          />
        </FieldShell>
        <div className="sm:col-span-2">
          <FieldShell id="interest" label={page.form.fields.interest} error={errorMessage("interest")}>
            <select
              id="interest"
              name="interest"
              value={form.interest}
              onChange={handleInputChange}
              className={inputClass}
              required
              {...fieldAccessibility("interest")}
            >
              <option value="">{ui.selectPlaceholder}</option>
              {page.form.interestOptions.map((option, index) => (
                <option key={option} value={String(index)}>
                  {option}
                </option>
              ))}
            </select>
          </FieldShell>
        </div>
      </div>

      <div className="mt-6">
        <FieldShell id="message" label={page.form.fields.message} error={errorMessage("message")}>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleInputChange}
            placeholder={page.form.placeholders.message}
            className={textareaClass}
            required
            {...fieldAccessibility("message")}
          />
        </FieldShell>
      </div>

      <button type="submit" className={siteButtonClass({ className: "mt-8 w-full px-6 sm:w-auto" })}>
        {page.form.submit}
        <ArrowIcon />
      </button>
      <p className="mt-4 max-w-2xl text-sm leading-6 text-[#52657A]">
        {ui.privacyText}{" "}
        <Link
          href="/legal#privacy"
          className="font-semibold text-[var(--langia-blue-ink)] underline underline-offset-4"
        >
          {ui.privacyLink}
        </Link>
      </p>
    </form>
  );
}

export default function ContactPageClient() {
  const { language } = useSiteLanguage(defaultLanguage);
  const page = getContactContent(language);

  return (
    <>
      <SiteNavbar variant="light" language={language} />
      <main className="min-h-screen bg-white text-[#0B1F3A]">
        <PageHero
          eyebrow={page.hero.eyebrow}
          title={page.hero.title}
          body={page.hero.body}
          media={
            <div className="rounded-[2rem] border border-[#BFDFFF] bg-[linear-gradient(145deg,#FFFFFF_0%,#EAF6FF_52%,#CFEAFF_100%)] px-6 py-8 text-[#0B1F3A] shadow-[0_22px_70px_rgba(4,142,255,0.1)] sm:px-8 sm:py-10 lg:px-10 lg:py-12">
              <SectionEyebrow>Langia</SectionEyebrow>
              <ul className="mt-8 border-t border-[#0B1F3A]/16">
                {page.hero.quickPoints.map((point) => (
                  <li key={point} className="flex min-h-16 items-center gap-4 border-b border-[#0B1F3A]/16 py-4 text-base font-semibold">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#048EFF] text-white">
                      <CheckIcon />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          }
        />

        <MarketingSection tone="white">
          <SiteContainer className="grid gap-14 lg:grid-cols-[1.18fr_.82fr] lg:items-start lg:gap-20">
            <ContactForm language={language} page={page} />
            <aside aria-label={page.hero.eyebrow} className="lg:sticky lg:top-32">
              <SectionEyebrow>{page.hero.eyebrow}</SectionEyebrow>
              <EditorialHeading as="h2" className="mt-7 max-w-[13ch]" size="secondary">
                {page.contactCards[3].title}
              </EditorialHeading>
              <p className="mt-5 text-base leading-8 text-[#52657A]">{page.contactCards[3].body}</p>
              <div className="mt-10 border-t border-[#0B1F3A]/16">
                {page.contactCards.slice(0, 3).map((card) => (
                  <section key={card.title} className="border-b border-[#0B1F3A]/16 py-7">
                    <h3 className="font-heading text-xl font-medium tracking-[-0.025em] text-[#0B1F3A]">{card.title}</h3>
                    <p className="mt-3 text-base leading-7 text-[#52657A]">{card.body}</p>
                  </section>
                ))}
              </div>
            </aside>
          </SiteContainer>
        </MarketingSection>

        <MarketingSection tone="mist">
          <SiteContainer>
            <SectionEyebrow>{page.next.eyebrow}</SectionEyebrow>
            <EditorialHeading as="h2" className="mt-7 max-w-[14ch]">
              {page.next.title}
            </EditorialHeading>
            <ol className="mt-14 grid border-t border-[#0B1F3A]/18 md:grid-cols-2 lg:grid-cols-4">
              {page.next.steps.map((step, index) => (
                <li
                  key={step}
                  className="border-b border-[#0B1F3A]/18 py-8 md:px-7 md:first:pl-0 lg:border-r lg:last:border-r-0"
                >
                  <span className="text-sm font-semibold tabular-nums text-[#0B1F3A]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-8 max-w-[15ch] font-heading text-2xl font-medium leading-tight tracking-[-0.035em] text-[#0B1F3A]">
                    {step}
                  </h3>
                </li>
              ))}
            </ol>
          </SiteContainer>
        </MarketingSection>

        <MarketingSection tone="white">
          <SiteContainer className="grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:gap-20">
            <div>
              <SectionEyebrow>{page.presence.eyebrow}</SectionEyebrow>
              <EditorialHeading as="h2" className="mt-7 max-w-[13ch]">
                {page.presence.title}
              </EditorialHeading>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#52657A]">{page.presence.body}</p>
            </div>
            <div className="rounded-[2rem] bg-[#F3F7FB] p-7 sm:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#52657A]">{page.presence.addressLabel}</p>
              <address className="mt-4 font-heading text-xl font-medium not-italic leading-snug text-[#0B1F3A]">
                {page.presence.address}
              </address>
            </div>
          </SiteContainer>
        </MarketingSection>

        <FinalCTA
          title={page.finalCta.title}
          body={page.finalCta.body}
          primary={{ href: "#contact-form", label: page.finalCta.cta }}
        />
      </main>
      <SiteFooter language={language} />
    </>
  );
}
