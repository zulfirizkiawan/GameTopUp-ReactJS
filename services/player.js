import Axios from "axios";

const URL = "https://topupgame.kazuhaproject.com";

export async function getFeaturedGame() {
  try {
    const response = await Axios.get(`${URL}/api/game`);

    const resGame = response.data.data;
    // console.log("game data:", resGame);
    return resGame;
  } catch (error) {
    console.log("Error fetching game data:", error);
    throw error;
  }
}

export async function getDetailFeaturedGame(id) {
  try {
    const response = await Axios.get(`${URL}/api/game/${id}`);

    const resGame = response.data.data;
    return resGame;
  } catch (error) {
    console.log("Error fetching game data:", error);
    throw error;
  }
}

export async function getBank() {
  try {
    const response = await Axios.get(`${URL}/api/bank`);

    const resBank = response.data.data;
    // console.log("Bank data:", resBank);
    return resBank;
  } catch (error) {
    console.log("Error fetching game data:", error);
    throw error;
  }
}
