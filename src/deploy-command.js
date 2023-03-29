const { REST, Routes } = require("discord.js");
// const { clientId, guildId, token } = require("../config.json");
const fs = require("node:fs");
const path = require("node:path");
require("dotenv").config();

const commands = [];
// Grab all the command files from the commands directory you created earlier
const commandsPath = path.join(__dirname, "commands");
const commandFiles = fs.readdirSync(commandsPath).filter((file) => file.endsWith(".js"));

// Grab the SlashCommandBuilder#toJSON() output of each command's data for deployment
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  commands.push(command.data.toJSON());
}

// Construct and prepare an instance of the REST module
const rest = new REST({ version: "10" }).setToken(
  process.env.mode === "dev" ? process.env.token : process.env.PRODUCTION_TOKEN
);
// const rest = new REST({ version: "10" }).setToken(process.env.token);

// and deploy your commands!
(async () => {
  try {
    console.log(`Started refreshing ${commands.length} application (/) commands.`);

    // The put method is used to fully refresh all commands in the DEV guild with the current set

    if (process.env.mode === "dev") {
      const data = await rest.put(
        Routes.applicationGuildCommands(process.env.clientId, process.env.guildId),
        {
          body: commands,
        }
      );
      console.log("not called");
      console.log(`Successfully reloaded ${data.length} application (/) commands.`);
    } else {
      // Global deploy
      const data = await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), {
        body: commands,
      });
      console.log("PRODUCTION ---");
      console.log(`Successfully reloaded ${data.length} application (/) commands.`);
    }
  } catch (error) {
    // And of course, make sure you catch and log any errors!
    console.error(error);
  }
})();
