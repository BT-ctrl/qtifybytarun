import { Chip, Tooltip } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";

function Card({ data, type }) {
  if (!data) return null;

  const renderAlbumCard = () => {
    const { image, follows, title, slug, songs = [] } = data;
    return (
      <Tooltip title={`${songs.length} songs`} placement="top" arrow>
        <Link to={`/album/${slug}`} className={styles.linkWrapper}>
          <div className={styles.wrapper}>
            <div className={styles.card}>
              <img src={image} alt={title} loading="lazy" />
              <div className={styles.banner}>
                <Chip
                  label={`${follows} Follows`}
                  size="small"
                  className={styles.chip}
                />
              </div>
            </div>
            <div className={styles.titleWrapper}>
              <p>{title}</p>
            </div>
          </div>
        </Link>
      </Tooltip>
    );
  };

  const renderSongCard = () => {
    const { image, likes, title } = data;
    return (
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <img src={image} alt={title} loading="lazy" />
          <div className={styles.banner}>
            <div className={styles.pill}>
              <p>{likes} Likes</p>
            </div>
          </div>
        </div>
        <div className={styles.titleWrapper}>
          <p>{title}</p>
        </div>
      </div>
    );
  };

  return type === "album" ? renderAlbumCard() : renderSongCard();
}

export default Card;
