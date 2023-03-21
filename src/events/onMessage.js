const { Events, userMention } = require("discord.js");
const { UserDatabase } = require("../database");
const { translateText } = require("../LanguageTranslator");
const { supportedLanguages } = require("../supportedLanguages");
module.exports = {
  name: Events.MessageCreate,
  async execute(interaction) {
    // if (!interaction.()) return;
    // try {
    if (!interaction.author.id) return console.log("DOES NOT EXIST");
    userData = UserDatabase.get(interaction.author.id);
    if (userData && userData.enable) {
      return await interaction.reply({
        content: `${await translateText(interaction.content, userData.lang)}`,
        ephemeral: true,
      });
    }

    // } catch (err) {
    // console.err(err);
    // }
    // try {
    //   await command.execute(interaction);
    // } catch (error) {
    //   console.error(error);
    //   if (interaction.replied || interaction.deferred) {
    //     await interaction.followUp({
    //       content: "There was an error while executing this command!",
    //       ephemeral: true,
    //     });
    //   } else {
    //     await interaction.reply({
    //       content: "There was an error while executing this command!",
    //       ephemeral: true,
    //     });
    //   }
    // }
  },
};
