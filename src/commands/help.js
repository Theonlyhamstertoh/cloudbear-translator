const { SlashCommandBuilder, codeBlock } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("Show the possible commands you can use"),
  async execute(interaction) {
    const newInvite = await replyWithInvite(interaction);
    return await interaction.reply(
      `${codeBlock(`/translate [text] [lang] - translate your text to the specified targeted language\n/transcribe [user] [lang] [enable] - automatically transcribe the specified user to the targeted language
    
    `)}If you are experiencing a bug or an issue, you can join the Cloudbear server:\n${
        newInvite
          ? `Here's your invite: ${newInvite}`
          : "There has been an error during the creation of the invite."
      }
    `
    );
  },
};

async function replyWithInvite(interaction) {
  // CloudBear Community
  const cloudBearServer = await interaction.client.guilds.fetch("1087906331006075030");
  const channel = await cloudBearServer.channels.fetch("1087906334604796057");
  let invite = await channel
    .createInvite(
      {
        maxAge: 10 * 60 * 1000, // maximum time for the invite, in milliseconds
        maxUses: 20, // maximum times it can be used
      },
      `Requested with command by ${interaction.user.username}`
    )
    .catch(console.log);
  return invite;
}
