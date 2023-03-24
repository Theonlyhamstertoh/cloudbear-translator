// Imports the Google Cloud client library
const { Translate } = require("@google-cloud/translate").v2;

// Creates a client
const translator = new Translate({
  projectId: "core-rhythm-381023",
  keyFilename: "core-rhythm-381023-f52f17f0d140.json",
});

/**
 * TODO(developer): Uncomment the following lines before running the sample.
 */
// const text = 'The text to translate, e.g. Hello, world!';
// const target = 'The target language, e.g. ru';
async function getLanguage() {
  const [languages] = await translate.getLanguages(code);
  return languages;
}

async function translateText(text, lang) {
  let [translations] = await translator.translate(text, lang);
  return translations;
  // if (translations.code === 400) {
  // console.log(translator.translate());
  // }

  console.error("Missing values to translate");
  // Translates the text into the target language. "text" can be a string for
  // translating a single piece of text, or an array of strings for translating
  // multiple texts.

  // console.log("Translations:");
  // let x = null;
  // translations.map((translation, i) => {
  //   console.log(`${text[i]} => (${lang}) ${translation}`);
  //   return translation
  // });
}

module.exports = { translateText, getLanguage };
