import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import translations
import translationEN from "./locales/en/translation.json";
import translationBS from "./locales/bs/translation.json";
import translationDE from "./locales/de/translation.json";

// Resources object with translations
const resources = {
	en: {
		translation: translationEN,
	},
	bs: {
		translation: translationBS,
	},
	de: {
		translation: translationDE,
	},
};

i18n
	// Detect user language
	.use(LanguageDetector)
	// Pass the i18n instance to react-i18next
	.use(initReactI18next)
	// Initialize i18next
	.init({
		resources,
		fallbackLng: "en",
		debug: process.env.NODE_ENV === "development",
		interpolation: {
			escapeValue: false, // React already safes from XSS
		},
		detection: {
			// Order of language detection methods
			order: ["navigator", "htmlTag", "path", "localStorage"],
			// Cache user language detection
			caches: ["localStorage"],
			// Language detection options
			lookupQuerystring: "lng",
			lookupCookie: "i18next",
			lookupLocalStorage: "i18nextLng",

			// Only detect languages we support
			checkWhitelist: true,
		},
		supportedLngs: ["en", "bs", "de"],
		whitelist: ["en", "bs", "de"],
	});

export default i18n;
