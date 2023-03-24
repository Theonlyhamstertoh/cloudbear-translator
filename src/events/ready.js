const { ActivityType } = require("discord.js");
const { Events } = require("discord.js");

module.exports = {
  name: Events.ClientReady,
  once: true,
  execute(c) {
    console.log(`Ready! Logged in as ${c.user.tag}`);
    c.user.setActivity(`${c.guilds.cache.size} Servers`, { type: ActivityType.Listening });
  },
};
