const { SlashCommandBuilder } = require("discord.js");
const { translateText } = require("../LanguageTranslator");
const { supportedLanguages, limit_25_languages } = require("../supportedLanguages.js");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("translate")
    .setDescription("Replies with translated text to the language of your choice!")
    .addStringOption((option) =>
      option
        .setName("lang")
        .setAutocomplete(true)
        .setDescription("Choose your target language. Type for more language options! ")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option.setName("translate").setRequired(true).setDescription("Text to be translated")
    ),
  async execute(interaction) {
    const reason = interaction.options.getString("translate") ?? "No text provided";
    const lang = interaction.options.getString("lang") ?? "No text provided";

    await interaction.reply(await translateText(reason, lang));
  },

  async autocomplete(interaction) {
    const focusedValue = interaction.options.getFocused();
    if (focusedValue.length === 0) return await interaction.respond(limit_25_languages);
    console.log(focusedValue);
    const filtered = supportedLanguages.filter((language) => {
      languageName = language.name.toLowerCase();
      userInput = focusedValue.toLowerCase();
      if (languageName.startsWith(userInput)) {
        return language;
      }
    });
    await interaction.respond(filtered);
  },
};
