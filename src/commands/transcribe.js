const { SlashCommandBuilder, codeBlock, Message } = require("discord.js");
const { translateText } = require("../LanguageTranslator");
const { supportedLanguages, limit_25_languages } = require("../supportedLanguages.js");
const { UserDatabase, TranscribeManager } = require("../database");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("transcribe")
    .setDescription("Select an user that you would like to be auto-translated")
    .addUserOption((option) =>
      option.setName("user").setRequired(true).setDescription("User you want translation for")
    )
    .addStringOption((option) =>
      option
        .setName("lang")
        .setAutocomplete(true)
        .setDescription("Choose your target language. Type for more language options! ")
        .setRequired(true)
    )
    .addBooleanOption((option) =>
      option
        .setName("enable")
        .setRequired(true)
        .setDescription("Enable transcription for this user")
    ),
  async execute(interaction) {
    try {
      const user = interaction.options.getUser("user", true) ?? null;
      const lang = interaction.options.getString("lang", true) ?? null;
      const mode = interaction.options.getBoolean("enable", true) ?? null;

      if (user.bot === true) {
        return await interaction.reply("Cannot Select A Bot To Transcribe");
      }
      const targetLanguage = supportedLanguages.find((language) =>
        language.value.toLowerCase().includes(lang.toLowerCase())
      );
      if (!targetLanguage) throw Error("Invalid Language Option");

      if (UserDatabase.get(user.id)) {
        UserDatabase.get(user.id).enable = mode;
        UserDatabase.get(user.id).lang = lang;
        console.log(lang);
      } else {
        UserDatabase.set(user.id, new TranscribeManager(mode, lang));
      }

      console.log(interaction.deferReply);
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

    // // THIS IS A FETCH ASYNC OPERATION
    // const channel = await interaction.guild.channels.fetch(interaction.channelId);
    // const messages = await channel.messages.fetch({ limit: 10, cahche: false });
    // // console.log(messages);
    // messages.forEach((message) => console.log(message.id, message.content));
    // await interaction.reply(codeBlock("yo"));
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
