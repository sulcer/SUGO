export const chunkSubstr = (str: string) => {
    const sentences = str.split(".");
    const sentenceGroups = [];
    const groupSize = Math.ceil(sentences.length / 3);

    for (let i = 0; i < sentences.length; i += groupSize) {
        sentenceGroups.push(sentences.slice(i, i + groupSize));
    }

    for (let i = 0; i < sentenceGroups.length; i++) {
        for (let j = 0; j < sentenceGroups[i].length; j++) {
            sentenceGroups[i][j] += ".";
        }
    }
    return sentenceGroups;
}