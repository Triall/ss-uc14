import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslations from "./locales/en/translation.json";
import frTranslations from "./locales/fr/translation.json";
import uaTranslations from "./locales/ua/translation.json";

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: enTranslations,
        },
        fr: {
            translation: frTranslations,
        },
        ua: {
            translation: uaTranslations,
        },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
        escapeValue: false,
    },
    missingKeyHandler: function(lngs, namespace, key, res) {
        console.error(`Missing translation key: ${key} in namespace: ${namespace}`);
    },
});

export default i18n;
