import { hideLoader, showLoader } from "../../redux/reducers/loaderSlice";
import { dispatch } from "../../redux/store";
import { BASE_URL } from "../../services/endPoints";
import { token } from "../../utils/utils";

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

export const getDashboardData = (url) => getData(url)
export const getCustomersData = (url) => getData(url)
export const getInvoiceData = (url) => getData(url)
export const getPaymentData = (url) => getData(url)
export const getAgeingAnalysisData = (url) => getData(url)