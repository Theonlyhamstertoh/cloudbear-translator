const limit_25_languages = [
  { value: "ar", name: "Arabic" },
  { value: "zh", name: "Chinese (Simplified)" },
  { value: "nl", name: "Dutch" },
  { value: "en", name: "English" },
  { value: "tl", name: "Filipino" },
  { value: "fr", name: "French" },
  { value: "de", name: "German" },
  { value: "el", name: "Greek" },
  { value: "iw", name: "Hebrew" },
  { value: "hi", name: "Hindi" },
  { value: "ga", name: "Irish" },
  { value: "it", name: "Italian" },
  { value: "ja", name: "Japanese" },
  { value: "ko", name: "Korean" },
  { value: "la", name: "Latin" },
  { value: "pl", name: "Polish" },
  { value: "pt", name: "Portuguese" },
  { value: "ru", name: "Russian" },
  { value: "es", name: "Spanish" },
  { value: "sv", name: "Swedish" },
  { value: "tr", name: "Turkish" },
  { value: "uk", name: "Ukrainian" },
  { value: "vi", name: "Vietnamese" },
  { value: "he", name: "Hebrew" },
];

const supportedLanguages = [
  { country: ["za"], value: "af", name: "Afrikaans" },
  { country: ["gh"], value: "ak", name: "Akan" },
  { country: ["al"], value: "sq", name: "Albanian" },
  { country: ["et"], value: "am", name: "Amharic" },
  {
    country: [
      "DZ",
      "BH",
      "TD",
      "DJ",
      "JO",
      "KW",
      "LY",
      "MA",
      "OM",
      "QA",
      "SA",
      "SD",
      "SY",
      "TN",
      "AE",
      "YE",
    ],
    value: "ar",
    name: "Arabic",
  },
  { country: ["am"], value: "hy", name: "Armenian" },
  { country: [""], value: "as", name: "Assamese" },
  { country: ["bo"], value: "ay", name: "Aymara" },
  { country: ["az"], value: "az", name: "Azerbaijani" },
  { country: ["ml"], value: "bm", name: "Bambara" },
  { country: [""], value: "eu", name: "Basque" },
  { country: ["by"], value: "be", name: "Belarusian" },
  { country: ["bd"], value: "bn", name: "Bengali" },
  { country: [""], value: "bho", name: "Bhojpuri" },
  { country: ["ba"], value: "bs", name: "Bosnian" },
  { country: ["bg"], value: "bg", name: "Bulgarian" },
  { country: ["ad"], value: "ca", name: "Catalan" },
  { country: [""], value: "ceb", name: "Cebuano" },
  { country: ["mw"], value: "ny", name: "Chichewa" },
  { country: ["MO", "CN", , "SG"], value: "zh", name: "Chinese Simplified" },
  { country: ["TW", "HK"], value: "zh-TW", name: "Chinese Traditional" },
  { country: [""], value: "co", name: "Corsican" },
  { country: ["hr", "ba"], value: "hr", name: "Croatian" },
  { country: ["cz", "sk"], value: "cs", name: "Czech" },
  { country: ["dk", "fo"], value: "da", name: "Danish" },
  { country: ["mv"], value: "dv", name: "Divehi" },
  { country: [""], value: "doi", name: "Dogri" },
  { country: ["BE", "NL", "AW", "CW", "SX", "SR"], value: "nl", name: "Dutch" },
  { country: ["AG", "AU", "CA", "NZ", "GB", "US"], value: "en", name: "English" },
  { country: [""], value: "eo", name: "Esperanto" },
  { country: ["ee"], value: "et", name: "Estonian" },
  { country: ["gh", "tg"], value: "ee", name: "Ewe" },
  { country: ["ph"], value: "tl", name: "Filipino" },
  { country: ["fi"], value: "fi", name: "Finnish" },
  { country: ["fr", "cm", "bf"], value: "fr", name: "French" },
  { country: [""], value: "fy", name: "Frisian" },
  { country: [""], value: "gl", name: "Galician" },
  { country: [""], value: "lg", name: "Ganda" },
  { country: ["ge"], value: "ka", name: "Georgian" },
  { country: ["de"], value: "de", name: "German" },
  { country: [""], value: "gom", name: "Goan Konkani" },
  { country: ["gr"], value: "el", name: "Greek" },
  { country: ["py"], value: "gn", name: "Guarani" },
  { country: [""], value: "gu", name: "Gujarati" },
  { country: ["ht"], value: "ht", name: "Haitian Creole" },
  { country: ["ne", "ng"], value: "ha", name: "Hausa" },
  { country: [""], value: "haw", name: "Hawaiian" },
  { country: ["in"], value: "hi", name: "Hindi" },
  { country: [""], value: "hmn", name: "Hmong" },
  { country: ["hu"], value: "hu", name: "Hungarian" },
  { country: ["is"], value: "is", name: "Icelandic" },
  { country: ["ng"], value: "ig", name: "Igbo" },
  { country: [""], value: "ilo", name: "Iloko" },
  { country: ["id"], value: "id", name: "Indonesian" },
  { country: ["ie"], value: "ga", name: "Irish" },
  { country: ["it"], value: "it", name: "Italian" },
  { country: ["jp"], value: "ja", name: "Japanese" },
  { country: [""], value: "jw", name: "Javanese" },
  { country: [""], value: "kn", name: "Kannada" },
  { country: ["kz"], value: "kk", name: "Kazakh" },
  { country: ["kh"], value: "km", name: "Khmer" },
  { country: ["rw"], value: "rw", name: "Kinyarwanda" },
  { country: ["kp", "kr"], value: "ko", name: "Korean" },
  { country: [""], value: "kri", name: "Krio" },
  { country: ["iq"], value: "ku", name: "Kurdish (Kurmanji)" },
  { country: [""], value: "ckb", name: "Kurdish (Sorani)" },
  { country: ["kg"], value: "ky", name: "Kyrgyz" },
  { country: ["la"], value: "lo", name: "Lao" },
  { country: ["va"], value: "la", name: "Latin" },
  { country: ["lv"], value: "lv", name: "Latvian" },
  { country: ["cd", "cg"], value: "ln", name: "Lingala" },
  { country: ["lt"], value: "lt", name: "Lithuanian" },
  { country: ["lu"], value: "lb", name: "Luxembourgish" },
  { country: ["mk"], value: "mk", name: "Macedonian" },
  { country: [""], value: "mai", name: "Maithili" },
  { country: ["mg"], value: "mg", name: "Malagasy" },
  { country: ["my"], value: "ms", name: "Malay" },
  { country: [""], value: "ml", name: "Malayalam" },
  { country: ["mt"], value: "mt", name: "Maltese" },
  { country: [""], value: "mni-Mtei", name: "Manipuri (Meitei Mayek)" },
  { country: ["nz"], value: "mi", name: "Maori" },
  { country: [""], value: "mr", name: "Marathi" },
  { country: [""], value: "lus", name: "Mizo" },
  { country: ["mn"], value: "mn", name: "Mongolian" },
  { country: ["mm"], value: "my", name: "Myanmar (Burmese)" },
  { country: ["np"], value: "ne", name: "Nepali" },
  { country: ["za"], value: "nso", name: "Northern Sotho" },
  { country: ["no"], value: "no", name: "Norwegian" },
  { country: [""], value: "or", name: "Odia (Oriya)" },
  { country: [""], value: "om", name: "Oromo" },
  { country: ["af"], value: "ps", name: "Pashto" },
  { country: ["ir"], value: "fa", name: "Persian" },
  { country: ["pl"], value: "pl", name: "Polish" },
  { country: ["pt", "br"], value: "pt", name: "Portuguese" },
  { country: [""], value: "pa", name: "Punjabi" },
  { country: ["pe"], value: "qu", name: "Quechua" },
  { country: ["ro"], value: "ro", name: "Romanian" },
  { country: ["ru"], value: "ru", name: "Russian" },
  { country: [""], value: "sm", name: "Samoan" },
  { country: [""], value: "sa", name: "Sanskrit" },
  { country: [""], value: "gd", name: "Scots Gaelic" },
  { country: ["rs"], value: "sr", name: "Serbian" },
  { country: ["ls"], value: "st", name: "Sesotho" },
  { country: ["zw"], value: "sn", name: "Shona" },
  { country: [""], value: "sd", name: "Sindhi" },
  { country: ["lk"], value: "si", name: "Sinhala" },
  { country: ["sk"], value: "sk", name: "Slovak" },
  { country: ["si"], value: "sl", name: "Slovenian" },
  { country: ["so"], value: "so", name: "Somali" },
  { country: ["mx"], value: "es", name: "Spanish" },
  { country: [""], value: "su", name: "Sundanese" },
  { country: ["ug"], value: "sw", name: "Swahili" },
  { country: ["se"], value: "sv", name: "Swedish" },
  { country: ["tj"], value: "tg", name: "Tajik" },
  { country: ["lk"], value: "ta", name: "Tamil" },
  { country: [""], value: "tt", name: "Tatar" },
  { country: [""], value: "te", name: "Telugu" },
  { country: ["th"], value: "th", name: "Thai" },
  { country: ["er"], value: "ti", name: "Tigrinya" },
  { country: [""], value: "ts", name: "Tsonga" },
  { country: ["tr"], value: "tr", name: "Turkish" },
  { country: ["tm"], value: "tk", name: "Turkmen" },
  { country: ["ua"], value: "uk", name: "Ukrainian" },
  { country: ["pk"], value: "ur", name: "Urdu" },
  { country: [""], value: "ug", name: "Uyghur" },
  { country: ["uz"], value: "uz", name: "Uzbek" },
  { country: ["vn"], value: "vi", name: "Vietnamese" },
  { country: ["gb"], value: "cy", name: "Welsh" },
  { country: ["za"], value: "xh", name: "Xhosa" },
  { country: [""], value: "yi", name: "Yiddish" },
  { country: ["bj"], value: "yo", name: "Yoruba" },
  { country: [""], value: "zu", name: "Zulu" },
  { country: ["il"], value: "he", name: "Hebrew" },
  { country: [""], value: "jv", name: "Javanese" },
];

module.exports = { supportedLanguages, limit_25_languages };
