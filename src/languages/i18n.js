import i18next from "i18next";
import english from "./english.json";
import french from "./french.json";
import italian from "./italian.json";
import spanish from "./spanish.json";
import vietnamita from "./vietnamita.json";
import { initReactI18next } from "react-i18next";
import { getLocales } from "expo-localization";
/*
import * as RNLocalize from "react-native-localize";
*/
const languageDetector = {
	type: "languageDetector",
	async: true,
	detect: (callback) => {
		return callback(getLocales()[0].languageCode);
	},
	init: () => {},
	cacheUserLanguage: () => {},
};
i18next
	.use(languageDetector)
	.use(initReactI18next)
	.init({
		compatibilityJSON: "v3",
		fallbackLng: "es",
		resources: {
			es: spanish,
			en: english,
			fr: french,
			it: italian,
			vi: vietnamita,
		},
		react: {
			useSuspense: false,
		},
	});
export default i18next;
