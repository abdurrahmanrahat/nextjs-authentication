"user server";

export const registerUser = async (data) => {
  const res = await fetch(`${process.env.BACKED_URL}/register`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });
  const userInfo = await res.json();

  return userInfo;
};
