const { SlashCommandBuilder, codeBlock, Message } = require("discord.js");
const { translateText } = require("../LanguageTranslator");
const { supportedLanguages, limit_25_languages } = require("../supportedLanguages.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("transcribe")
    .setDescription("Select an user that you would like to be auto-translated")
    .addUserOption((option) =>
      option.setName("user").setRequired(true).setDescription("User you want translation for")
    ),
  async execute(interaction) {
    const user = interaction.options.getUser("user").id ?? null;
    // console.log(interaction.guild.members);
    // THIS IS A FETCH ASYNC OPERATION
    const channel = await interaction.guild.channels.fetch(interaction.channelId);
    const messages = await channel.messages.fetch({ limit: 10, cahche: false });
    // console.log(messages);
    messages.forEach((message) => console.log(message.id, message.content));
    await interaction.reply(codeBlock("yo"));
  },
};

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
