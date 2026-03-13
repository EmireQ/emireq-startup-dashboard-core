import { hideLoader, showLoader } from "../../redux/reducers/loaderSlice";
import { dispatch } from "../../redux/store";
import { BASE_URL } from "../../services/endPoints";
import { token } from "../../utils/utils";

async function postData(url, payload, isToken = false) {
  try {
    dispatch(showLoader());

    const response = await fetch(BASE_URL + url, {
      method: "POST",
      headers: isToken
        ? {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
          }
        : {
            "Content-Type": "application/json",
          },
      body: JSON.stringify(payload),
    });

    if (response) {
      const result = await response.json();
      return result;
    } else {
      console.error("Error:", response.status, response.statusText);
    }
  } catch (error) {
    console.error("Error:", error.message);
  } finally {
    dispatch(hideLoader());
  }
}

async function putData(url, payload) {
  try {
    dispatch(showLoader());

    const response = await fetch(BASE_URL + url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify(payload),
    });

    if (response) {
      const result = await response.json();
      return result;
    } else {
      console.error("Error:", response.status, response.statusText);
    }
  } catch (error) {
    console.error("Error:", error.message);
  } finally {
    dispatch(hideLoader());
  }
}

async function deleteData(url) {
  try {
    dispatch(showLoader());

    const response = await fetch(BASE_URL + url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    });

    if (response) {
      const result = await response.json();
      return result;
    } else {
      console.error("Error:", response.status, response.statusText);
    }
  } catch (error) {
    console.error("Error:", error.message);
  } finally {
    dispatch(hideLoader());
  }
}

const getData = async (url) => {
  try {
    dispatch(showLoader());
    const settings = {
      headers: {
        Authorization: `Token ${token}`,
      },
    };
    const response = await fetch(BASE_URL + url, settings);
    if (response) {
      const result = await response.json();
      return result;
    }
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(hideLoader());
  }
};

async function postFormData(url, payload, isToken = false) {
  try {
    dispatch(showLoader());

    const response = await fetch(BASE_URL + url, {
      method: "POST",
      headers:
        isToken && token
          ? {
              Authorization: `Token ${token}`,
            }
          : {},
      body: payload, // FormData directly
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result?.message || "Something went wrong");
    }

    return result;
  } catch (error) {
    console.error("API Error:", error.message);
    return { error: true, message: error.message };
  } finally {
    dispatch(hideLoader());
  }
}

export const createTransaction = (url, payload, isToken) =>
  postData(url, payload, isToken);
export const uploadTransaction = (url, payload, isToken) =>
  postFormData(url, payload, isToken);

export const getTransactionsList = (url) => getData(url);
export const getTransactionFromId = (url) => getData(url);

export const updateTransaction = (url, payload) => putData(url, payload);
export const deleteTransaction = (url) => deleteData(url);
