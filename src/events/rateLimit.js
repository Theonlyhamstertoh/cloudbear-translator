const { Events, userMention } = require("discord.js");
const { UserDatabase } = require("../database");
const { translateText } = require("../LanguageTranslator");
const { supportedLanguages } = require("../supportedLanguages");
module.exports = {
  name: "rateLimit" /* @todo replaced!!!!!!!! */,
  async execute(interaction) {
    // if (!interaction.()) return;
    await interaction.reply("Rate limi reached");
  },
};

const ERROR_MESSAGE =
  "There was an error with Cloudbear. type /help to get the invite link to the discord community";
