import { api } from "../client";

type Album = {
  something: string;
};

export const getAlbums = async ({
  userName,
}: {
  userName: string;
}): Promise<Album[]> => {
  // /2.0/?method=user.gettopalbums&user=rj&api_key=YOUR_API_KEY&format=json
  //   `?method=user.gettopalbums&user=${userName}&api_key=${process.env.API_KEY}&format=json`

  const response = await api.get<Album[]>("", {
    params: {
      method: "user.gettopalbums",
      user: userName,
      api_key: process.env.API_KEY,
      format: "json",
      period: "7day",
      limit: 2,
    },
  });

  return response.data;
};
