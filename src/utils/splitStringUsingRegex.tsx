function splitStringUsingRegex(inputString: string): string[] {
  const words: string[] = [];
  const regex = /\w+('\w+)?|[^\w\s]+/g; // This matches words and non-word characters

  let match;

  while ((match = regex.exec(inputString)) !== null) {
    words.push(match[0]);
  }

  return words;
}

export default splitStringUsingRegex;
