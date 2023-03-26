export const buildPrompt = (currentBio: string, textStyle: string): string => {
  return `
  Generate 2 ${textStyle} twitter biographies with no hashtags and clearly labeled "1." and "2.". ${
    textStyle === "funny"
      ? "Make sure there is a joke in there and it's a little ridiculous."
      : null
  }
      Make sure each generated biography is less than 160 characters, has short sentences that are found in Twitter bios, and base them on this context: ${currentBio}${
    currentBio.slice(-1) === "." ? "" : "."
  }
    `
}
