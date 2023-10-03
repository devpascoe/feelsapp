export const getFeed = async () => {
  const res = await fetch('https://feelsweb.vercel.app/api/feed', {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();
  return data;
};
