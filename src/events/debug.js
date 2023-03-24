const { ActivityType } = require("discord.js");
const { Events } = require("discord.js");

module.exports = {
  name: Events.Debug,
  execute(info) {
    console.log(`Debug-> ${info}`);
  },
};
