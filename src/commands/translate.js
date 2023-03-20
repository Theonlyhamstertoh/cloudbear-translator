const { SlashCommandBuilder } = require("discord.js");
const { translateText } = require("../LanguageTranslator");
const { supportedLanguages, limit_25_languages } = require("../supportedLanguages.js");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("translate")
    .setDescription("Replies with translated text to the language of your choice!")
    .addStringOption((option) =>
      option.setName("text").setRequired(true).setDescription("Text to be translated")
    )
    .addStringOption((option) =>
      option
        .setName("lang")
        .setAutocomplete(true)
        .setDescription("Choose your target language. Type for more language options! ")
        .setRequired(true)
    ),
  async execute(interaction) {
    const lang = interaction.options.getString("lang") ?? null;
    const text = interaction.options.getString("text") ?? null;
    // const user = interaction.options.getUser("user") ?? null;

    const targetLanguage = supportedLanguages.find((language) =>
      language.value.toLowerCase().includes(lang.toLowerCase())
    );
    if (targetLanguage) {
      return await interaction.reply({
        content: await translateText(text, lang),
        ephemeral: false,
      });
    } else {
      await interaction.reply("Invalid target language. Please choose from the autocomplete list");
    }
  },

  async autocomplete(interaction) {
    const focusedValue = interaction.options.getFocused();
    if (focusedValue.length === 0) return await interaction.respond(limit_25_languages);
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
