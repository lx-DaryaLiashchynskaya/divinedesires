import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import de from './de.json';
import es from './es.json';
import fr from './fr.json';
import pt from './pt.json';

i18n.use(initReactI18next).init({
    fallbackLng: 'en',
    lng: 'en',
    debug: true,
    resources: { en, de, es, fr, pt },
    interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
    },
});

export { i18n };
