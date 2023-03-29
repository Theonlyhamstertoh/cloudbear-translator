// Reg that checks if the emoji a flag unicode
const checkFlagReg = /[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/;

// Subtraction factor from Regional Letter Alphabets -> Alphebtical Charcodes
const uncode_subtraction_factor = 127397;

// Function that converts one unicode -> alphabetical letter
const unicodeToAlphabet = (unicode_letter) =>
  String.fromCharCode(unicode_letter - uncode_subtraction_factor);

//Check if the character is between 🇦 - 🇿
const checkIfCharIsRegionalAlphabet = (unicode) => 127462 <= unicode && unicode <= 127487;

const checkIfFlagEmoji = (string) => {
  let letters = "";

  for (let i = 0; i < string.length; i++) {
    const unicode = string.codePointAt(i);
    if (checkIfCharIsRegionalAlphabet(unicode)) {
      letters += String.fromCodePoint(unicode);
    }
  }

  return checkFlagReg.test(letters);
};

function unicodeToString(unicode_string) {
  unicode_string = unicode_string.replace(/\s+/g);
  let letters = "";
  for (let i = 0; i < unicode_string.length; i++) {
    const codePoint = unicode_string.codePointAt(i);
    if (!checkIfCharIsRegionalAlphabet(codePoint)) continue;

    letters += unicodeToAlphabet(codePoint);
  }
  return letters;
}

console.log(new Intl.DisplayNames(["en"], { type: "region" }).of("JP"));
module.exports = {
  unicodeToString,
  checkIfCharIsRegionalAlphabet,
  checkFlagReg,
  checkIfFlagEmoji,
};

/**
 * 
🇦 unicode =  127462
🇧 unicode =  127463
🇨 unicode =  127464
🇩 unicode =  127465
🇪 unicode =  127466
🇫 unicode =  127467
🇬 unicode =  127468
🇭 unicode =  127469
🇮 unicode =  127470
🇯 unicode =  127471
🇰 unicode =  127472
🇱 unicode =  127473
🇲 unicode =  127474
🇳 unicode =  127475
🇴 unicode =  127476
🇵 unicode =  127477
🇶 unicode =  127478
🇷 unicode =  127479
🇸 unicode =  127480
🇹 unicode =  127481
🇺 unicode =  127482
🇻 unicode =  127483
🇼 unicode =  127484
🇽 unicode =  127485
🇾 unicode =  127486
🇿 unicode =  127487
 * 
 */
