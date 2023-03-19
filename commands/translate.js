const { SlashCommandBuilder } = require("discord.js");
const { translateText } = require("../translate");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("translate")
    .setDescription("Replies with translated text to the language of your choice!")
    .addStringOption((option) =>
      option
        .setRequired(true)
        .setName("lang")
        .addChoices(
          { name: "Russian", value: "ru" },
          { name: "Persian", value: "fa" },
          { name: "Spanish", value: "es" },
          { name: "Chinese (Simplified)", value: "zh" }
        )
        .setDescription("Target language to be translated to")
    )
    .addStringOption((option) =>
      option.setName("translate").setRequired(true).setDescription("Text to be translated")
    ),
  async execute(interaction) {
    const reason = interaction.options.getString("translate") ?? "No text provided";
    const lang = interaction.options.getString("lang") ?? "No text provided";
    await interaction.reply(await translateText(reason, lang));
  },
};
