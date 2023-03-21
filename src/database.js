const UserDatabase = new Map();

class TranscribeManager {
  constructor(enable, lang) {
    this.enable = enable ?? false;
    this.lang = lang;
  }
}
module.exports = { UserDatabase, TranscribeManager };
