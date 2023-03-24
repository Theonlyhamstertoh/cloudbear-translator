const { Events, userMention } = require("discord.js");
const { UserDatabase } = require("../database");
const { translateText } = require("../LanguageTranslator");
const { supportedLanguages } = require("../supportedLanguages");
module.exports = {
  name: Events.MessageCreate,
  async execute(interaction) {
    // if (!interaction.()) return;
    try {
      if (!interaction.author.id) return console.log("DOES NOT EXIST");
      if (interaction.content === ERROR_MESSAGE) return;
      // console.log(
      //   "interaction create ->",
      //   interaction.channelId,
      //   interaction.author.id,
      //   interaction.bot.id
      // );

      userData = UserDatabase.get(interaction.author.id);
      if (userData && userData.enable) {
        // console.log(interaction);
        return await interaction.reply({
          content: `${await translateText(interaction.content, userData.lang)}`,
          ephemeral: true,
        });
      }
    } catch (err) {
      return await interaction.reply(
        "There was an error with Cloudbear. type /help to get the invite link to the discord community"
      );
    }
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

const ERROR_MESSAGE =
  "There was an error with Cloudbear. type /help to get the invite link to the discord community";
