export const chunkSubstr = (str: string) => {
    const sentences = str.split(".");
    const sentenceGroups = [];
    const groupSize = Math.ceil(sentences.length / 4);

    for (let i = 0; i < sentences.length; i += groupSize) {
        sentenceGroups.push(sentences.slice(i, i + groupSize));
    }
    return sentenceGroups;
}