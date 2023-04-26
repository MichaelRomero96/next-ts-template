const capitalizeText = (text: string): string => {
  const lowerCaseText = text.toLowerCase();
  return lowerCaseText.replace(/^\w/, (c) => c.toUpperCase());
};

export default capitalizeText;
