import axios from "axios";

// Centralized base endpoint
export const BACKEND_ENDPOINT = "https://qtify-backend-labs.crio.do";

// Create an Axios instance with the base URL
const axiosInstance = axios.create({
  baseURL: BACKEND_ENDPOINT,
});

// Fetch Top Albums
export const fetchTopAlbums = async () => {
  try {
    const response = await axiosInstance.get("/albums/top");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch top albums:", error);
    return []; // fallback to empty array
  }
};

// Fetch New Albums
export const fetchNewAlbums = async () => {
  try {
    const response = await axiosInstance.get("/albums/new");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch new albums:", error);
    return []; // fallback to empty array
  }
};

// Fetch Songs
export const fetchSongs = async () => {
  try {
    const response = await axiosInstance.get("/songs");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch songs:", error);
    return []; // fallback to empty array
  }
};

// Fetch Filters (Genres)
export const fetchFilters = async () => {
  try {
    const response = await axiosInstance.get("/genres");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch genres:", error);
    return []; // fallback to empty array
  }
};
