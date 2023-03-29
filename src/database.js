const UserDatabase = new Map();

class Transcriber {
  constructor(id, language, lang_code, transcribe) {
    this.mode = transcribe;
    this.id = id;
    this.lang_code = lang_code;
    this.language = language;
    this.channels = new Set();
  }
}

// Getting by the user is the easiest because that becomes the single source of truth. I won't have to sort through each user to see if they added that as transcriber
class User {
  constructor(id) {
    this.id = id;

    // Language codes it should transcribe for in a single message
    this.transcribers = new Map();
  }

  addTranscriber(userId, language, lang_code, channel) {
    this.transcribers.set(userId, new Transcriber(userId, language, lang_code, channel));
  }

  addChannelToTranscriber(userId, channel) {
    const user = this.transcribers.get(userId);
    user.channels.add(channel);
  }
  getAllTranscribers() {
    return this.transcribers;
  }

  getTranscriber(userId) {
    return this.transcribers.get(userId);
  }

  editTranscriber(userId, lang) {
    const transcriber = this.transcribers.get(userId);
    transcriber.lang = lang;
    this.channels.add(lang);
  }

  removeChannelFromTranscriber(userId, channel) {
    const user = this.transcribers.get(userId);
    user.channels.delete(channel);
  }
  deleteTranscriber(userId) {
    this.transcribers.delete(userId);
  }

  clearTranscribers() {
    this.transcribers.clear();
  }
}
module.exports = { UserDatabase, Transcriber, User };

// a person can enable translation for a user, choosing a specific channel for their transcription
// a bot should translate all the languages in one messages if people subscribe to that user
// A user object should contain a list of languages that will be translated by the bot.
// turn off translation for one user with their id /transcribe off :user:

const user = new User("12345");
UserDatabase.set("12345", user);

user.addTranscriber("weibo", "ru", "general");
user.transcribe = true;
user.addChannelToTranscriber("weibo", "beta");

console.log(user.transcribers.get("weibo").channels);
