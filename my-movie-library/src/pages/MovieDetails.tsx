import React from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return <h1>Movie Details Page for Movie ID: {id}</h1>;
};

export default MovieDetails;
