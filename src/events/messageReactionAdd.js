const { Events, userMention, inlineCode, codeBlock } = require("discord.js");
const { text } = require("express");
const { UserDatabase } = require("../database");
const {
  unicodeToString,
  checkIfCharIsRegionalAlphabet,
  checkFlagReg,
  checkIfFlagEmoji,
} = require("../helpers/unicodeToString");
const { translateText } = require("../LanguageTranslator");
const { supportedLanguages } = require("../supportedLanguages");

const CountryLanguage = require("@ladjs/country-language");

// const isoToCountryName = new Intl.DisplayNames(["en"], { type: "region" });
module.exports = {
  name: Events.MessageReactionAdd,
  async execute(messageReaction, user) {
    // Get message or fetch through partial
    const message = !messageReaction.message.author
      ? await messageReaction.message.fetch()
      : await messageReaction.message;

    // Validate reaction as a flag emoji
    const emojiName = (await messageReaction._emoji.name) ?? null;
    if (!emojiName) return console.log("No emoji name found");
    if (checkIfFlagEmoji(emojiName) === false) return console.log("NOT A FLAG EMOJI");

    // Get textchannel to send message
    // const textChannel = await message.client.channels.fetch(message.channelId);

    const countryCode = unicodeToString(emojiName);
    // const targetLanguage = countryToLanguage(countryCode.toLowerCase());

    const languageCode = CountryLanguage.getCountry(countryCode).languages[0].iso639_1;

    // Check if language is supported
    const targetLanguage = await supportedLanguages.find((language) => {
      return language.value === languageCode;
    });

    console.log("------------", targetLanguage);
    if (targetLanguage === null || !targetLanguage) {
      return await message.reply(
        codeBlock(
          "Language not available to be translated. /languages for a list of available languages"
        )
      );
    }

    return await message.reply(
      `${inlineCode(countryCode)} ${await translateText(message.content, targetLanguage.value)}`
    );
  },
};

function countryToLanguage(code) {
  const language = supportedLanguages.find((lang) => {
    if (lang.country.length === 1) {
      if (lang.country[0] === code) {
        console.log(lang);
        return lang;
      }
    } else if (lang.country.length > 0) {
      return lang.country.find((l) => {
        if (l === code) {
          console.log(l === "cm", code, l, lang);
          return lang;
        }
      });
    }
  });
  console.log(language, "lang");

  return language ? language : null;
}

/*

message: <ref *1> Message {
    channelId: '1086372150019113070',
    guildId: '1063718763150716928',
    id: '1088349891698364426',
    createdTimestamp: 1679553234744,
    system: null,
    type: null,
    content: null,
    author: null,
    pinned: null,
    tts: null,
    nonce: null,
    embeds: [],
    components: [],
    attachments: Collection(0) [Map] {},
    stickers: Collection(0) [Map] {},
    position: null,
    roleSubscriptionData: null,
    editedTimestamp: null,
    reactions: ReactionManager { message: [Circular *1] },
    mentions: MessageMentions {
      everyone: false,
      users: Collection(0) [Map] {},
      roles: Collection(0) [Map] {},
      _members: null,
      _channels: null,
      _parsedUsers: null,
      crosspostedChannels: Collection(0) [Map] {},
      repliedUser: null
    },
    webhookId: null,
    groupActivityApplication: null,
    applicationId: null,
    activity: null,
    flags: MessageFlagsBitField { bitfield: 0 },
    reference: null,
    interaction: null
  },
  me: false,
  users: ReactionUserManager { reaction: [Circular *2] },
  _emoji: ReactionEmoji {
    animated: null,
    name: '❤️',
    id: null,
    reaction: [Circular *2]
  },
  count: null
} User {
  id: '364998638159527946',
  bot: false,
  system: false,
  flags: UserFlagsBitField { bitfield: 128 },
  username: 'theonlyhamster',
  discriminator: '3094',
  avatar: 'c4474ca04e40a0028b366663afa03f44',
  banner: undefined,
  accentColor: undefined
}

*/
const ERROR_MESSAGE =
  "There was an error with Cloudbear. type /help to get the invite link to the discord community";
