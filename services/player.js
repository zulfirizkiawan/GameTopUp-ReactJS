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

export async function setCO(data, dataToken) {
  try {
    const response = await fetch(`${URL}/api/checkouttransaction`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${dataToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const responseData = await response.json();
      // Lakukan sesuatu dengan responseData jika perlu
      // console.log("responseData", responseData);
      return responseData;
    } else {
      // Tangani respons gagal di sini
      return response;
    }
  } catch (error) {
    console.log("error", error);
    throw error;
  }
}

export async function getOverviewMobile(dataToken) {
  try {
    const response = await Axios.get(`${URL}/api/dashboard?category=Mobile`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${dataToken}`,
        "Content-Type": "application/json",
      },
    });

    const resMobile = response.data.data;
    return resMobile;
  } catch (error) {
    throw error;
  }
}

export async function getOverviewDesktop(dataToken) {
  try {
    const response = await Axios.get(`${URL}/api/dashboard?category=Desktop`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${dataToken}`,
        "Content-Type": "application/json",
      },
    });

    const resMobile = response.data.data;
    return resMobile;
  } catch (error) {
    throw error;
  }
}

export async function getOverviewConsole(dataToken) {
  try {
    const response = await Axios.get(`${URL}/api/dashboard?category=Console`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${dataToken}`,
        "Content-Type": "application/json",
      },
    });

    const resMobile = response.data.data;
    return resMobile;
  } catch (error) {
    throw error;
  }
}

export async function getLatestTrancation(dataToken) {
  try {
    const response = await Axios.get(`${URL}/api/transaction`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${dataToken}`,
        "Content-Type": "application/json",
      },
    });

    const resMobile = response.data.data;
    return resMobile;
  } catch (error) {
    throw error;
  }
}
