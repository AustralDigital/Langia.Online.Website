"use client";

import { LocalizedLink as Link } from "@/components/site/LocalizedLink";
import { useRef, useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";

import {
  ArrowIcon,
  EditorialHeading,
  FAQList,
  FinalCTA,
  MarketingButton,
  MarketingSection,
  MediaFrame,
  PageHero,
  ProcessSteps,
  SectionHeader,
  SiteContainer,
} from "@/components/site/MarketingPrimitives";
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
  teachingLanguages: number[];
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

type FieldError = "required" | "invalidEmail";

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

const formUi: Record<
  SiteLanguage,
  { invalidEmail: string; privacyText: string; privacyLink: string }
> = {
  es: {
    invalidEmail: "Escribe un correo electrónico válido.",
    privacyText: "Usaremos esta información para revisar tu perfil y contactarte sobre oportunidades compatibles.",
    privacyLink: "Consulta nuestra política de privacidad.",
  },
  pt: {
    invalidEmail: "Digite um endereço de e-mail válido.",
    privacyText: "Usaremos estas informações para analisar seu perfil e entrar em contato sobre oportunidades compatíveis.",
    privacyLink: "Consulte nossa política de privacidade.",
  },
  en: {
    invalidEmail: "Enter a valid email address.",
    privacyText: "We’ll use this information to review your profile and contact you about relevant opportunities.",
    privacyLink: "Read our privacy policy.",
  },
};

const educatorImageAlt: Record<SiteLanguage, string> = {
  es: "Educadora independiente preparando una sesión remota en un espacio luminoso",
  pt: "Educadora independente preparando uma sessão remota em um espaço iluminado",
  en: "An independent educator preparing a remote session in a bright workspace",
};

function getPageContent(language: SiteLanguage): WorkWithUsPageContent {
  const page = pagesContent[language].workWithUs.workWithUsPage;

  if (!page) {
    throw new Error("Work with Us page content is missing.");
  }

  return page;
}

function EditorialList({ items }: { items: readonly PageBlock[] }) {
  return (
    <div className="border-t border-[#0B1F3A]/16">
      {items.map((item, index) => (
        <article
          key={item.title}
          className={`grid gap-5 border-b border-[#0B1F3A]/16 py-8 sm:grid-cols-[3.5rem_1fr] sm:gap-7 ${
            index % 2 === 1 ? "lg:ml-14" : "lg:mr-14"
          }`}
        >
          <span className="pt-1 text-sm font-semibold tabular-nums text-[var(--langia-blue-ink)]">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <EditorialHeading as="h3" size="card">
              {item.title}
            </EditorialHeading>
            <p className="mt-4 max-w-xl text-base leading-8 text-[#52657A]">{item.body}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

function Hero({ language, page }: { language: SiteLanguage; page: WorkWithUsPageContent }) {
  return (
    <PageHero
      tone="mist"
      eyebrow={page.hero.eyebrow}
      title={page.hero.title}
      body={page.hero.body}
      actions={
        <>
          <MarketingButton href="#teacher-form">{page.hero.primaryCta}</MarketingButton>
          <MarketingButton href="#requirements" variant="secondary">
            {page.hero.secondaryCta}
          </MarketingButton>
        </>
      }
      media={
        <div>
          <MediaFrame
            src="/images/marketing-2026/shared/independent-educator-remote-work.webp"
            alt={educatorImageAlt[language]}
            aspectClassName="aspect-[5/4] sm:aspect-[16/11]"
            imageClassName="object-cover object-center"
            className="ring-1 ring-[#0B1F3A]/8"
            priority
          />
          <ul className="mt-6 grid grid-cols-2 border-y border-[#0B1F3A]/16">
            {page.hero.quickFacts.map((fact, index) => (
              <li
                key={fact}
                className={`flex min-h-16 items-center py-4 text-base font-semibold leading-6 text-[#0B1F3A] ${
                  index % 2 === 0 ? "pr-4" : "border-l border-[#0B1F3A]/16 pl-4"
                } ${index < 2 ? "border-b border-[#0B1F3A]/16" : ""}`}
              >
                {fact}
              </li>
            ))}
          </ul>
        </div>
      }
    />
  );
}

function SplitContentSection({
  body,
  eyebrow,
  items,
  title,
  tone,
}: {
  body: string;
  eyebrow: string;
  items: readonly PageBlock[];
  title: string;
  tone: "white" | "mist";
}) {
  return (
    <MarketingSection tone={tone}>
      <SiteContainer>
        <div className="grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-24">
          <SectionHeader eyebrow={eyebrow} title={title} body={body} />
          <EditorialList items={items} />
        </div>
      </SiteContainer>
    </MarketingSection>
  );
}

function Languages({ page }: { page: WorkWithUsPageContent }) {
  return (
    <MarketingSection tone="white">
      <SiteContainer>
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-24">
          <SectionHeader eyebrow={page.languages.eyebrow} title={page.languages.title} body={page.languages.body} />
          <ul className="grid grid-cols-2 border-y border-[#0B1F3A]/16">
            {page.languages.items.map((language, index) => (
              <li
                key={language}
                className={`flex min-h-24 items-center py-5 font-heading text-2xl font-medium tracking-[-0.035em] text-[#0B1F3A] ${
                  index % 2 === 0 ? "pr-5" : "border-l border-[#0B1F3A]/16 pl-5"
                } ${index < 2 ? "border-b border-[#0B1F3A]/16" : ""}`}
              >
                {language}
              </li>
            ))}
          </ul>
        </div>
      </SiteContainer>
    </MarketingSection>
  );
}

function Requirements({ page }: { page: WorkWithUsPageContent }) {
  return (
    <MarketingSection id="requirements" tone="mist">
      <SiteContainer>
        <div className="grid gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:gap-24">
          <SectionHeader eyebrow={page.requirements.eyebrow} title={page.requirements.title} body={page.requirements.body} />
          <div>
            <EditorialList items={page.requirements.items} />
            <p className="mt-8 border-l-2 border-[#048EFF] pl-5 text-base font-semibold leading-8 text-[#0B1F3A]">
              {page.requirements.deviceNote}
            </p>
          </div>
        </div>
      </SiteContainer>
    </MarketingSection>
  );
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
  return (
    <label className="grid min-w-0 gap-2.5 text-base font-semibold text-[#0B1F3A]" htmlFor={id}>
      {label}
      {children}
      {error ? (
        <span id={`${id}-error`} className="text-sm font-medium leading-6 text-[#B42318]">
          {error}
        </span>
      ) : null}
    </label>
  );
}

function buildWhatsAppMessage(page: WorkWithUsPageContent, form: TeacherFormState) {
  const fallback = page.form.fallbackNotProvided;
  const teachingLanguages = form.teachingLanguages
    .map((optionIndex) => page.form.teachingLanguageOptions[optionIndex])
    .filter((option): option is string => Boolean(option));
  const experience = page.form.experienceOptions[Number(form.experience)] ?? fallback;
  const audience = page.form.audienceOptions[Number(form.audience)] ?? fallback;

  return [
    page.whatsappMessage.intro,
    "",
    `${page.whatsappMessage.name}: ${form.name}`,
    `${page.whatsappMessage.email}: ${form.email}`,
    `${page.whatsappMessage.whatsapp}: ${form.whatsapp}`,
    `${page.whatsappMessage.country}: ${form.country}`,
    `${page.whatsappMessage.teachingLanguages}: ${teachingLanguages.join(", ")}`,
    `${page.whatsappMessage.spokenLanguages}: ${form.spokenLanguages}`,
    `${page.whatsappMessage.experience}: ${experience}`,
    `${page.whatsappMessage.audience}: ${audience}`,
    `${page.whatsappMessage.availability}: ${form.availability.trim() || fallback}`,
    `${page.whatsappMessage.link}: ${form.link.trim() || fallback}`,
    `${page.whatsappMessage.technicalConfirmation}: ${form.technicalConfirmation ? page.form.yes : page.form.no}`,
    `${page.whatsappMessage.message}: ${form.message}`,
    form.notes.trim() ? `${page.form.fields.notes}: ${form.notes}` : "",
  ]
    .filter(Boolean)
    .join("\n");
}

function TeacherInterestForm({ language, page }: { language: SiteLanguage; page: WorkWithUsPageContent }) {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState<TeacherFormState>(initialFormState);
  const [errors, setErrors] = useState<Partial<Record<RequiredField, FieldError>>>({});
  const [hasConfigError, setHasConfigError] = useState(false);

  const inputClass =
    "min-h-12 w-full min-w-0 rounded-xl border border-[#D8E6F4] bg-white px-4 text-base font-medium text-[#0B1F3A] outline-none transition placeholder:text-[#7A8798] focus:border-[#048EFF] focus:ring-4 focus:ring-[#048EFF]/15";
  const textareaClass =
    "min-h-36 w-full min-w-0 rounded-xl border border-[#D8E6F4] bg-white px-4 py-3 text-base font-medium text-[#0B1F3A] outline-none transition placeholder:text-[#7A8798] focus:border-[#048EFF] focus:ring-4 focus:ring-[#048EFF]/15";

  function errorMessage(field: RequiredField) {
    const error = errors[field];

    if (error === "invalidEmail") {
      return formUi[language].invalidEmail;
    }

    return error === "required" ? page.form.requiredError : undefined;
  }

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

  function handleLanguageToggle(optionIndex: number, checked: boolean) {
    setForm((current) => ({
      ...current,
      teachingLanguages: checked
        ? [...current.teachingLanguages, optionIndex]
        : current.teachingLanguages.filter((item) => item !== optionIndex),
    }));
    clearError("teachingLanguages");
  }

  function handleTechnicalConfirmation(checked: boolean) {
    setForm((current) => ({ ...current, technicalConfirmation: checked }));
    clearError("technicalConfirmation");
  }

  function validateForm(formElement: HTMLFormElement) {
    const nextErrors: Partial<Record<RequiredField, FieldError>> = {};

    requiredFields.forEach((field) => {
      if (field === "teachingLanguages" && form.teachingLanguages.length === 0) {
        nextErrors[field] = "required";
        return;
      }

      if (field === "technicalConfirmation" && !form.technicalConfirmation) {
        nextErrors[field] = "required";
        return;
      }

      if (field !== "teachingLanguages" && field !== "technicalConfirmation" && !form[field].trim()) {
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
      window.requestAnimationFrame(() => {
        formRef.current?.querySelector<HTMLElement>(`[data-field="${firstInvalidField}"]`)?.focus();
      });
    }

    return Object.keys(nextErrors).length === 0;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setHasConfigError(false);

    if (!validateForm(event.currentTarget)) {
      return;
    }

    const whatsappNumber = process.env.NEXT_PUBLIC_LANGIA_WHATSAPP_NUMBER?.trim();

    if (!whatsappNumber) {
      setHasConfigError(true);
      return;
    }

    const message = buildWhatsAppMessage(page, form);
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    const openedWindow = window.open("", "_blank");

    if (openedWindow) {
      openedWindow.opener = null;
      openedWindow.location.replace(url);
      return;
    }

    window.location.assign(url);
  }

  return (
    <form
      ref={formRef}
      id="teacher-form"
      onSubmit={handleSubmit}
      className="min-w-0 scroll-mt-28 rounded-[2rem] border border-[#E4EDF7] bg-white p-5 shadow-[0_22px_70px_rgba(11,31,58,0.07)] sm:p-8"
      aria-describedby="teacher-form-note"
      noValidate
    >
      {hasConfigError ? (
        <p
          className="mb-6 rounded-xl border border-[#F3B737]/40 bg-[#FFF8E6] px-4 py-3 text-sm font-medium leading-6 text-[#6F4B00]"
          role="status"
          aria-live="polite"
        >
          {page.form.configWarning}
        </p>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <FieldShell id="name" label={page.form.fields.name} error={errorMessage("name")}>
          <input id="name" name="name" type="text" value={form.name} onChange={handleInputChange} placeholder={page.form.placeholders.name} className={inputClass} data-field="name" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} required />
        </FieldShell>
        <FieldShell id="email" label={page.form.fields.email} error={errorMessage("email")}>
          <input id="email" name="email" type="email" value={form.email} onChange={handleInputChange} placeholder={page.form.placeholders.email} className={inputClass} data-field="email" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} required />
        </FieldShell>
        <FieldShell id="whatsapp" label={page.form.fields.whatsapp} error={errorMessage("whatsapp")}>
          <input id="whatsapp" name="whatsapp" type="tel" value={form.whatsapp} onChange={handleInputChange} placeholder={page.form.placeholders.whatsapp} className={inputClass} data-field="whatsapp" aria-invalid={Boolean(errors.whatsapp)} aria-describedby={errors.whatsapp ? "whatsapp-error" : undefined} required />
        </FieldShell>
        <FieldShell id="country" label={page.form.fields.country} error={errorMessage("country")}>
          <input id="country" name="country" type="text" value={form.country} onChange={handleInputChange} placeholder={page.form.placeholders.country} className={inputClass} data-field="country" aria-invalid={Boolean(errors.country)} aria-describedby={errors.country ? "country-error" : undefined} required />
        </FieldShell>
      </div>

      <fieldset
        className="mt-6 min-w-0 rounded-2xl border border-[#D8E6F4] p-4"
        aria-invalid={Boolean(errors.teachingLanguages)}
        aria-describedby={errors.teachingLanguages ? "teachingLanguages-error" : undefined}
      >
        <legend className="px-2 text-base font-semibold text-[#0B1F3A]">{page.form.fields.teachingLanguages}</legend>
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {page.form.teachingLanguageOptions.map((languageOption, index) => (
            <label key={languageOption} className="flex min-h-12 items-center gap-3 rounded-xl bg-[#F3F7FB] px-4 py-3 text-base font-semibold text-[#0B1F3A]">
              <input
                type="checkbox"
                checked={form.teachingLanguages.includes(index)}
                onChange={(event) => handleLanguageToggle(index, event.target.checked)}
                className="h-5 w-5 accent-[#048EFF]"
                data-field={index === 0 ? "teachingLanguages" : undefined}
              />
              {languageOption}
            </label>
          ))}
        </div>
        {errors.teachingLanguages ? (
          <p id="teachingLanguages-error" className="mt-3 text-sm font-medium leading-6 text-[#B42318]">
            {errorMessage("teachingLanguages")}
          </p>
        ) : null}
      </fieldset>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <FieldShell id="spokenLanguages" label={page.form.fields.spokenLanguages} error={errorMessage("spokenLanguages")}>
          <input id="spokenLanguages" name="spokenLanguages" type="text" value={form.spokenLanguages} onChange={handleInputChange} placeholder={page.form.placeholders.spokenLanguages} className={inputClass} data-field="spokenLanguages" aria-invalid={Boolean(errors.spokenLanguages)} aria-describedby={errors.spokenLanguages ? "spokenLanguages-error" : undefined} required />
        </FieldShell>
        <FieldShell id="experience" label={page.form.fields.experience} error={errorMessage("experience")}>
          <select id="experience" name="experience" value={form.experience} onChange={handleInputChange} className={inputClass} data-field="experience" aria-invalid={Boolean(errors.experience)} aria-describedby={errors.experience ? "experience-error" : undefined} required>
            <option value="">{page.form.selectPlaceholder}</option>
            {page.form.experienceOptions.map((option, index) => (
              <option key={option} value={String(index)}>{option}</option>
            ))}
          </select>
        </FieldShell>
        <FieldShell id="audience" label={page.form.fields.audience} error={errorMessage("audience")}>
          <select id="audience" name="audience" value={form.audience} onChange={handleInputChange} className={inputClass} data-field="audience" aria-invalid={Boolean(errors.audience)} aria-describedby={errors.audience ? "audience-error" : undefined} required>
            <option value="">{page.form.selectPlaceholder}</option>
            {page.form.audienceOptions.map((option, index) => (
              <option key={option} value={String(index)}>{option}</option>
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

      <div className="mt-6">
        <FieldShell id="message" label={page.form.fields.message} error={errorMessage("message")}>
          <textarea id="message" name="message" value={form.message} onChange={handleInputChange} placeholder={page.form.placeholders.message} className={textareaClass} data-field="message" aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error" : undefined} required />
        </FieldShell>
      </div>

      <label className="mt-6 flex min-h-12 gap-3 rounded-2xl border border-[#D8E6F4] bg-[#F3F7FB] p-4 text-base font-semibold leading-7 text-[#0B1F3A]">
        <input
          id="technicalConfirmation"
          type="checkbox"
          checked={form.technicalConfirmation}
          onChange={(event) => handleTechnicalConfirmation(event.target.checked)}
          className="mt-1 h-5 w-5 shrink-0 accent-[#048EFF]"
          data-field="technicalConfirmation"
          aria-invalid={Boolean(errors.technicalConfirmation)}
          aria-describedby={errors.technicalConfirmation ? "technicalConfirmation-error" : undefined}
          aria-required="true"
          required
        />
        <span>
          {page.form.technicalConfirmation}
          {errors.technicalConfirmation ? (
            <span id="technicalConfirmation-error" className="mt-2 block text-sm font-medium leading-6 text-[#B42318]">
              {errorMessage("technicalConfirmation")}
            </span>
          ) : null}
        </span>
      </label>

      <button type="submit" className={siteButtonClass({ className: "mt-8 w-full px-6 sm:w-auto" })}>
        {page.form.submit}
        <ArrowIcon />
      </button>
      <p className="mt-4 max-w-2xl text-sm leading-6 text-[#52657A]">
        {formUi[language].privacyText}{" "}
        <Link
          href="/legal#privacy"
          className="font-semibold text-[var(--langia-blue-ink)] underline underline-offset-4"
        >
          {formUi[language].privacyLink}
        </Link>
      </p>
    </form>
  );
}

function Application({ language, page }: { language: SiteLanguage; page: WorkWithUsPageContent }) {
  return (
    <MarketingSection tone="mist">
      <SiteContainer>
        <div className="grid min-w-0 gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-20">
          <div className="min-w-0 lg:sticky lg:top-32">
            <SectionHeader eyebrow={page.hero.eyebrow} title={page.form.title} body={page.form.body} />
            <p id="teacher-form-note" className="mt-7 border-l-2 border-[#048EFF] pl-5 text-base leading-8 text-[#52657A]">
              {page.form.note}
            </p>
          </div>
          <TeacherInterestForm page={page} language={language} />
        </div>
      </SiteContainer>
    </MarketingSection>
  );
}

function Faq({ page }: { page: WorkWithUsPageContent }) {
  return (
    <MarketingSection tone="white">
      <SiteContainer>
        <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
          <SectionHeader eyebrow={page.faq.eyebrow} title={page.faq.title} />
          <FAQList items={page.faq.items} />
        </div>
      </SiteContainer>
    </MarketingSection>
  );
}

export default function WorkWithUsClient() {
  const { language } = useSiteLanguage(defaultLanguage);
  const page = getPageContent(language);

  return (
    <main className="min-h-screen bg-white text-[#0B1F3A]">
      <SiteNavbar variant="light" language={language} />
      <Hero language={language} page={page} />
      <SplitContentSection
        eyebrow={page.why.eyebrow}
        title={page.why.title}
        body={page.why.body}
        items={page.why.cards}
        tone="white"
      />
      <SplitContentSection
        eyebrow={page.profile.eyebrow}
        title={page.profile.title}
        body={page.profile.body}
        items={page.profile.cards}
        tone="mist"
      />
      <Languages page={page} />
      <Requirements page={page} />
      <MarketingSection tone="white">
        <SiteContainer>
          <div className="grid gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:gap-24">
            <SectionHeader eyebrow={page.process.eyebrow} title={page.process.title} body={page.process.body} />
            <ProcessSteps items={page.process.steps} />
          </div>
        </SiteContainer>
      </MarketingSection>
      <Application page={page} language={language} />
      <Faq page={page} />
      <FinalCTA
        title={page.finalCta.title}
        body={page.finalCta.body}
        primary={{ href: "#teacher-form", label: page.finalCta.primaryCta }}
      />
      <SiteFooter />
    </main>
  );
}
