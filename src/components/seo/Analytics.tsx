import Script from "next/script";

export function Analytics() {
  const measurementId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID?.trim();
  if (!measurementId) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} strategy="afterInteractive" />
      <Script id="langia-google-analytics" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config',${JSON.stringify(measurementId)});`}
      </Script>
    </>
  );
}
