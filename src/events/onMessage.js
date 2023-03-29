const { Events, userMention, inlineCode } = require("discord.js");
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
      if (interaction.author.bot) return "i am a bot";

      // console.log(
      //   "interaction create ->",
      //   interaction.channelId,
      //   interaction.author.id,
      //   interaction.bot.id
      // );

      const selected_user = await UserDatabase.get(interaction.author.id);

      let message = "";
      for (const [key, transcriber] of selected_user.transcribers) {
        if (transcriber.mode && transcriber.channels.has(interaction.channelId)) {
          message += `\n${inlineCode(transcriber.language)} ${await translateText(
            interaction.content,
            transcriber.lang_code
          )}`;
        }
      }

      return await interaction.reply(message);
    } catch (err) {
      console.error(err);
      return await interaction.reply(
        "There was an error with Cloudbear. type /help to get the invite link to the discord community"
      );
    }
  },
};

const ERROR_MESSAGE =
  "There was an error with Cloudbear. type /help to get the invite link to the discord community";
