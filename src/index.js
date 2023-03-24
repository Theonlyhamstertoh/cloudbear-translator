// Require the necessary discord.js classes
const fs = require("node:fs");
const path = require("node:path");
require("dotenv").config();

// require("./deploy-command");
const { Client, Collection, Events, GatewayIntentBits, Guild } = require("discord.js");
const { Partials } = require("discord.js");

// Create a new client instance
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.GuildMessageReactions,
  ],
  partials: [Partials.Message, Partials.Channel, Partials.Reaction],
});
client.commands = new Collection();

const commandsPath = path.join(__dirname, "commands");
const commandFiles = fs.readdirSync(commandsPath).filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const filePath = path.join(commandsPath, file);
  const command = require(filePath);
  // Set a new item in the Collection with the key as the command name and the value as the exported module
  if ("data" in command && "execute" in command) {
    client.commands.set(command.data.name, command);
  } else {
    console.log(
      `[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`
    );
  }
}

const eventsPath = path.join(__dirname, "events");
const eventsFile = fs.readdirSync(eventsPath).filter((event) => event.endsWith(".js"));

for (const file of eventsFile) {
  const filePath = path.join(eventsPath, file);
  const event = require(filePath);

  if (event.once) {
    client.once(event.name, event.execute);
  } else {
    client.on(event.name, event.execute);
  }
}

// client.user.setActivity(`on ${client.guilds.cache.size} Servers.`, {
//   type: "PLAYING",
// });

// Log in to Discord with your client's token

client.login(process.env.token);
