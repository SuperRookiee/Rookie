import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { fetchTracks, searchTracks } from '../store/slices/MusicSlice';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  margin-top: 50px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 50px;
`;

const Input = styled.input`
  padding: 10px;
  margin-right: 10px;
  font-size: 1rem;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #1db954;
  color: white;
  font-weight: 800;
  border: none;

  &:hover {
    background-color: #1ed760;
  }
`;

const TracksContainer = styled.div`
  margin-top: 50px;
`;

const Track = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const TrackImage = styled.img`
  width: 64px;
  height: 64px;
`;

const TrackName = styled.a`
  margin-left: 10px;
  color: black;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 600;
`;

function MusicTrack() {
  const dispatch = useDispatch();
  const tracks = useSelector((state) => state.music.tracks);
  const loading = useSelector((state) => state.music.loading);
  const error = useSelector((state) => state.music.error);
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchClick = () => {
    if (searchTerm) {
      dispatch(searchTracks({ search: searchTerm }));
    }
  };

  const handleFetchClick = () => {
    dispatch(fetchTracks());
  };

  return (
    <Container>
      <Title>My Spotify Tracks</Title>
      <InputContainer>
        <Input type="text" placeholder="Search by artist" value={searchTerm} onChange={handleInputChange} />
        <Button onClick={handleSearchClick}>Search</Button>
      </InputContainer>
      <Button onClick={handleFetchClick}>Load My Tracks</Button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <TracksContainer>
        {tracks.map((track) => (
          <Track key={track.id}>
            <TrackImage src={track.album.images[0].url} alt={track.album.name} />
            <TrackName href={track.external_urls.spotify} target="_blank" rel="noopener noreferrer">{track.name}</TrackName>
          </Track>
        ))}
      </TracksContainer>
    </Container>
  );
}

export default MusicTrack;
