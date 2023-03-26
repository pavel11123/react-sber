export const isLiked = (likes, userId) => likes?.some((id) => id === userId);

export const createMarkup = (textHtml) => {
  return { __html: textHtml };
};
