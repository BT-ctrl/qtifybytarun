import React, { useState, useEffect } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import Carousel from "./Carousel"; // Assuming you already have this Carousel component
import axios from "axios"; // For fetching data

const SongsSection = () => {
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [songsData, setSongsData] = useState([]);
  const [genres, setGenres] = useState([]);

  // Fetch the genres for the tabs
  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await axios.get("https://qtify-backend-labs.crio.do/genres");
        setGenres(response.data); // Assuming the API response is an array of genres
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };

    fetchGenres();
  }, []);

  // Fetch songs data based on the selected genre
  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const genreQuery = selectedGenre === "All" ? "" : `?genre=${selectedGenre}`;
        const response = await axios.get(`https://qtify-backend-labs.crio.do/songs${genreQuery}`);
        setSongsData(response.data); // Assuming the API returns an array of songs
      } catch (error) {
        console.error("Error fetching songs:", error);
      }
    };

    fetchSongs();
  }, [selectedGenre]);

  // Handle tab change
  const handleTabChange = (event, newValue) => {
    setSelectedGenre(newValue);
  };

  // Render a single song (just an example, modify as per your design)
  const renderSong = (song) => {
    return (
      <div key={song.id} className="song-card">
        <img src={song.image} alt={song.name} />
        <div className="song-info">
          <h3>{song.name}</h3>
          <p>{song.artist}</p>
          <span>{song.likes} Likes</span>
        </div>
      </div>
    );
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs value={selectedGenre} onChange={handleTabChange} centered>
        <Tab label="All" value="All" />
        {genres.map((genre) => (
          <Tab key={genre} label={genre} value={genre} />
        ))}
      </Tabs>

      {/* Carousel for the selected genre */}
      <Carousel
        data={songsData}
        renderComponent={renderSong}
      />
    </Box>
  );
};

export default SongsSection;
