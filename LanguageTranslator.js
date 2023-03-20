// Imports the Google Cloud client library
const { Translate } = require("@google-cloud/translate").v2;

// Creates a client
const translate = new Translate({
  projectId: "core-rhythm-381023",
  keyFilename: "core-rhythm-381023-f52f17f0d140.json",
});

/**
 * TODO(developer): Uncomment the following lines before running the sample.
 */
// const text = 'The text to translate, e.g. Hello, world!';
// const target = 'The target language, e.g. ru';
// async function listLanguages() {
//   const [languages] = await translate.getLanguages();
//   return languages;
// }

async function translateText(text, lang) {
  // Translates the text into the target language. "text" can be a string for
  // translating a single piece of text, or an array of strings for translating
  // multiple texts.
  let translations = await translate.translate(text, lang);

  // translations = Array.isArray(translations) ? translations : [translations];

  // console.log("Translations:");
  // let x = null;
  // translations.forEach((translation, i) => {
  //   console.log(`${text[i]} => (${lang}) ${translation}`);
  //   x = translation;
  // });
  console.log(translations[1].data.translations);
}

translateText("Hi I am weibo", "zh");

module.exports = { translateText };
