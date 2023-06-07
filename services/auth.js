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
      console.log("Sign Up success:", data);
      return data;
    } else {
      console.log("Sign Up failed:", response);
      return response;
    }
  } catch (error) {
    console.log("Error sign up:", error);
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
