const { ActivityType } = require("discord.js");
const { Events } = require("discord.js");

module.exports = {
  name: Events.GuildDelete,
  execute(c) {
    console.log("A SERVER HAS REMOVED BOT");
    c.user.setActivity(`${c.guilds.size} Servers`, { type: ActivityType.Listening });

    //
  },
};
