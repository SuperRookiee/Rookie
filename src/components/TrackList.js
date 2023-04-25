import React from "react";
import styled from "styled-components";

const TrackListWrapper = styled.div`
  margin-top: 20px;
  .track {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: #fff;
    border: 1px solid #dee2e6;
    border-radius: 5px;
    &:hover {
      background-color: #f5f5f5;
    }
    .info {
      display: flex;
      align-items: center;
      img {
        width: 64px;
        height: 64px;
        margin-right: 10px;
      }
      .text {
        display: flex;
        flex-direction: column;
        font-size: 14px;
        .name {
          font-weight: bold;
        }
        .artist {
          color: #6c757d;
        }
      }
    }
    .buttons {
      display: flex;
      align-items: center;
      button {
        margin-right: 5px;
      }
    }
  }
`;

const TrackList = ({ tracks, onAddTrack }) => {
  return (
    <TrackListWrapper>
      {tracks.map((track) => (
        <div className="track" key={track.id}>
          <div className="info">
            <img src={track.albumImageUrl} alt="album cover" />
            <div className="text">
              <span className="name">{track.name}</span>
              <span className="artist">{track.artist}</span>
            </div>
          </div>
          <div className="buttons">
            <button
              className="btn btn-outline-secondary btn-sm"
              onClick={() => onAddTrack(track)}
            >
              Add
            </button>
          </div>
        </div>
      ))}
    </TrackListWrapper>
  );
};

export default TrackList;
