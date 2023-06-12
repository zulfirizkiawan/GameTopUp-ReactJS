import Axios from "axios";

const URL = "https://topupgame.kazuhaproject.com";

export async function setSignUp(formData) {
  try {
    const response = await fetch(`${URL}/api/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      return response;
    }
  } catch (error) {
    throw error;
  }
}

export async function setLogin(formData) {
  try {
    const response = await fetch(`${URL}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      return response;
    }
  } catch (error) {
    throw error;
  }
}

export async function setUploadPhoto(data, dataToken) {
  try {
    const response = await fetch(`${URL}/api/user/photo`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
        Authorization: dataToken,
      },
      body: data,
    });

    if (response.ok) {
      const responseData = await response.json();
      return responseData;
    } else {
      return response;
    }
  } catch (error) {
    throw error;
  }
}
