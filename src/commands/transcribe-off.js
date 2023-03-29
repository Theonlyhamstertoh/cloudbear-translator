const { SlashCommandBuilder, codeBlock, Message, ChannelType } = require("discord.js");
const { translateText } = require("../LanguageTranslator");
const { supportedLanguages, limit_25_languages } = require("../supportedLanguages.js");
const { UserDatabase, User } = require("../database");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("transcribeoff")
    .setDescription("Select an user that you would like to be auto-translated")
    .addUserOption((option) =>
      option.setName("user").setRequired(true).setDescription("User you want to stop translation")
    ),

  async execute(interaction) {
    try {
      const user = interaction.options.getUser("user", true) ?? null;

      if (user.bot === true) {
        return await interaction.reply("Cannot Select A Bot");
      }
      const targetLanguage = supportedLanguages.find((language) =>
        language.value.toLowerCase().includes(lang.toLowerCase())
      );
      if (!targetLanguage) throw Error("Invalid Language Option");

      if (UserDatabase.get(user.id)) {
        const user = UserDatabase.get(user.id);
        user.UserDatabase.get(user.id).enable = false;
      } else {
        // UserDatabase.set(user.id, user);
        // user.addTranscriber(, lang, channel);
        // user.transcribe = true;
        // user.addChannelToTranscriber("weibo", "beta");
      }

      return await interaction.reply({
        content: `Transcription to ${targetLanguage.name} is ${
          mode ? "enabled" : "disabled"
        } for user: ${user.username}  `,
        ephemeral: true,
      });
    } catch (err) {
      console.error(err);
      return await interaction.reply({
        content: codeBlock("Invalid language option. Please select from the autocomplete option"),
        ephemeral: true,
      });
    }
  },
};

1087551442925142119;

/**
 * 
 * 
 * ClientUser {
  id: '1086270246215762022',
  bot: true,
  system: false,
  flags: UserFlagsBitField { bitfield: 0 },
  username: 'CloudBear - Translator',
  discriminator: '4033',
  avatar: 'c4f4caec3928957cd3c8a6f6fa1ddbbd',
  banner: undefined,
  accentColor: undefined,
  verified: true,
  mfaEnabled: false
}

 */

/**
 *
 * .channelId
 * .user.username
 * .member
 *
 */

/**
 * 
 * 
 * 1086372150019113070
Promise {
  <ref *1> TextChannel {
    type: 0
    guildId: '1063718763150716928',
    parentId: '1063718764102811719',
    permissionOverwrites: PermissionOverwriteManager { channel: [Circular *1] },
    messages: MessageManager { channel: [Circular *1] },
    threads: GuildTextThreadManager { channel: [Circular *1] },
    nsfw: false,
    flags: ChannelFlagsBitField { bitfield: 0 },
    id: '1086372150019113070',
    name: 'weibo',
    rawPosition: 5,
    topic: null,
    lastMessageId: '1087545340623855626',
    rateLimitPerUser: 0
  }
}
 */
