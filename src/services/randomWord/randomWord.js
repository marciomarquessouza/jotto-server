const fs = require("fs");

const randomWord = () => {
    let fileContents;
    try {
        fileContents = fs.readFileSync("src/services/randomWord/fiveLetterWords.json", "utf-8");    
    } catch (error) {
        throw new Error("Error to read the file fiveLetterWords.json")
    }
    
    if (fileContents) {
        const { words } = JSON.parse(fileContents);
        if (words.length === 0) throw new Error("Word list is empity");
        return words[Math.floor(Math.random() * words.length)];
    }

    throw new Error("Invalid word list");
}

module.exports = randomWord;

