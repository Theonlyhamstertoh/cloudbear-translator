const { ActivityType } = require("discord.js");
const { Events } = require("discord.js");

module.exports = {
  name: Events.GuildCreate,
  execute(c) {
    console.log("A NEW SERVER HAS ADDED THE BOT");
    c.user.setActivity(`${c.guilds.size} Servers`, { type: ActivityType.Listening });
  },
};
