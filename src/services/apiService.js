const apiHost = process.env.API_HOST;

export const getFeed = async () => {
  const res = await fetch(`${apiHost}/api/feed`);
  const data = await res.json();
  return data;
};

export const createPost = async (title, name) => {
  const res = await fetch(`${apiHost}/api/feed`, {
    method: 'POST',
    body: JSON.stringify({title, name}),
  });
  const data = await res.json();
  return data;
};
