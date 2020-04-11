import { AppLang } from 'langs/@types/types';
import ru_lang from 'langs/ru';

type Langs = Record<
  'ru',
  AppLang
>;

const langs: Langs = {
  ru: ru_lang,
};

export default langs;
