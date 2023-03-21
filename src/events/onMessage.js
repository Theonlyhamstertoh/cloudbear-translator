const { Events } = require("discord.js");

module.exports = {
  name: Events.MessageCreate,
  async execute(message) {
    // if (!interaction.()) return;
    console.log(message);
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
