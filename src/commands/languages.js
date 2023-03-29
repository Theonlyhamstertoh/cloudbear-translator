const { supportedLanguages } = require("../supportedLanguages");
const { SlashCommandBuilder, codeBlock } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder().setName("languages").setDescription("Supported languages"),
  async execute(interaction) {
    supportedLanguages;

    let formattedLanguages = "";
    supportedLanguages.forEach((language) => {
      formattedLanguages += `\n${language.name}`;
    });

    return await interaction.reply({ content: codeBlock(formattedLanguages), ephemeral: true });
  },
};
