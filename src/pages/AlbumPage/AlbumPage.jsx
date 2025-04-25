import React from "react";
import { useParams } from "react-router-dom";

export default function AlbumPage() {
  const { albumId } = useParams();

  return <>{albumId}</>;
}