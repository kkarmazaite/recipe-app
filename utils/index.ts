export const removeHTMLTags = (text: string) => {
  const regex = /(<([^>]+)>)/gi;
  return text.replace(regex, "");
};
