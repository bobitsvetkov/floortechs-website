import { useEffect } from "react";

const useRecaptchaLoader = (siteKey: string) => {
  useEffect(() => {
    if (window.grecaptcha) return;

    const scriptId = "recaptcha-v3-script";
    if (document.getElementById(scriptId)) return;

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
    script.async = true;
    document.head.appendChild(script);
  }, [siteKey]);
};

export default useRecaptchaLoader;