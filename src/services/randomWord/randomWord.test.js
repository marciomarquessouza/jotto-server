jest.mock('fs');
const fs = require("fs");
const randomWord = require("./randomWord");

describe('/services/randowWord', () => {
    it('should  returns a random string word', () => {
        fs.readFileSync.mockReturnValue(JSON.stringify({
            "words": [
                "burqa",
                "buxom",
                "cajon",
                "calyx",
                "capiz",
                "check"
        ]}));
        expect(typeof randomWord()).toBe("string");
        fs.readFileSync.mockReset();
    });

    it('should throw an error when exists some error to read the json file', () => {
        fs.readFileSync.mockImplementation(() => {
            throw new Error('Mock Error');
          });
        expect(randomWord).toThrowError();
        fs.readFileSync.mockReset();
    });

    it('should throws an error when the word list is empity', () => {
        fs.readFileSync.mockReturnValue(JSON.stringify());
        expect(randomWord).toThrowError();
        fs.readFileSync.mockReset();
    });
});
