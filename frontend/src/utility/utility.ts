export const getBlocks = async (queryStr: string) => {
  try {
    const response = await fetch("http://localhost:8000/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ query: queryStr }),
    });

    const resBody = await response.json();

    if (response.status === 200) return resBody;

    return [];
  } catch (error) {
    console.log(error);
  }
};

// convert API data keys to more human-readable format (prev_block => Prev block)
export const unslugify = (word: string) => {
  let newWord = word[0].toUpperCase();

  for (let i = 1; i < word.length; i++) {
    if (word[i] === "_") newWord = `${newWord} `;
    else newWord = `${newWord}${word[i]}`;
  }

  return newWord;
};
