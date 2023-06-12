import Axios from "axios";
const URL = "https://topupgame.kazuhaproject.com";

export async function setUpdateProfile(data, dataToken) {
  try {
    const response = await Axios.post(`${URL}/api/user`, data, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${dataToken}`,
        "Content-Type": "application/json",
      },
    });

    const updatedData = response.data.data;
    return updatedData;
  } catch (error) {
    throw error;
  }
}
