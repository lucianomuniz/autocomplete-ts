export const JSON_FILE = '/files/data.json';

export const remarkupText = (text) => {
  const re1 = /<strong>(.+?)<\/strong>/g;
  const re2 = /<strong>(.+)<\/strong>/;
  const matched = text.match(re1).map((str) => str.match(re2)[1]);
  const texts = text.split(re1);

  const markedJsx = texts.map((str, idx) => {
    if (idx === 0 || idx === texts.length - 1) return str;
    if (matched.includes(str))
      return <strong key={`${idx}-${str}`}>{str}</strong>;
    return str;
  });

  return markedJsx;
};
