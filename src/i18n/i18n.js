import Vue from 'vue'
import VueI18n from 'vue-i18n'

import es from './es'
import en from './en'
import eus from './eus'

Vue.use(VueI18n)
export default new VueI18n({
  locale: 'es',
  silentTranslationWarn: true,
  messages: {
    es,
    en,
    eus
  }
})
