import { updateUsers } from "./postUsers";

export const getMemes = async (id) => {
  try {
    const url = `http://localhost:4000/playlists/${id}`;

    const resp = await fetch(url);
    const apiData = await resp.json();
    return apiData;
  } catch (error) {
    console.log("Algo fallo en la api");
  }
};

export const createMemes = async (
  newMeme = "default",
  newUrl = "default",
) => {
  console.log(userId);
  const memes = {
    name: newMeme,
    Url: newUrl,
  };

  try {
    const rawResponse = await fetch("http://localhost:5000/memes/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(memes),
    });
    const content = await rawResponse.json();
    const memeId = content.data._id;
    console.log(memeId);

    updateUsers(memeId, userId);
    console.log(userId);
    console.log("successfull addition DB", content);
    return content;
  } catch (error) {
    console.log("can not create meme");
  }
};

const deleteMeme = async (id, token) => {
  const options = {
      method: 'DELETE',
      headers: {
          Authorization: `Bearer ${token}`,
      },
  }
  try {
      const res = await fetch("http://localhost:5000/memes/" + id)
      const data = await res.json() 
      return data
      
  } catch (error) {
      console.log(error);
  }
}

export default deleteMeme