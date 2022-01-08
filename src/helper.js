export const languageData = (array) => {
  const result = {};
  const languageCountResult = [];
  const starCountResult = [];
  array.forEach((element) => {
    const { language: lang, stargazers_count: star } = element;
    if (lang) {
      if (result.hasOwnProperty(lang)) {
        result[lang].countLang += 1;
        result[lang].countStar += star;
      } else {
        result[lang] = { countLang: 1, countStar: star };
      }
    }
  });

  for (const [key, value] of Object.entries(result)) {
    languageCountResult.push({ label: key, value: value.countLang });
    starCountResult.push({ label: key, value: value.countStar });
  }
  return { languageCountResult, starCountResult };
};

export const getTopData = (array, key) => {
  const result = [];
  array.sort((firstItem, secondItem) => secondItem[key] - firstItem[key]);
  const topFive = array.length > 5 ? 5 : array.length;
  for (let i = 0; i < topFive; i++) {
    result.push({ label: array[i].name, value: array[i][key] });
  }
  return result;
};
