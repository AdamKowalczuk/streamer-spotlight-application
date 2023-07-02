import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { StreamerListWrapper, SingleStreamer, IconWrapper, IconWithText, StreamerHeader, LeftSide } from "./StreamerList.styled";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { Icon } from "@mui/material";
import { Button } from "@mui/material";

const StreamerList = ({ streamers, setStreamers }) => {
  const navigate = useNavigate();

  const goToDetails = (streamerId) => {
    navigate(`/${streamerId}`);
  };

  const vote = (streamerId, voteOption, id) => {
    fetch(`http://localhost:8080/streamers/${streamerId}/vote`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ vote: voteOption }),
    })
      .then((response) => response.json())
      .then((data) => {
        let newStreamers = [...streamers];
        newStreamers[id] = data;
        setStreamers(newStreamers);
      })
      .catch((error) => {});
  };

  return (
    <StreamerListWrapper>
      <h1>Streamers list</h1>
      {streamers?.map((streamer, id) => (
        <SingleStreamer key={streamer._id}>
          <StreamerHeader>
            <LeftSide>
              <h3>{streamer.name}</h3>
              <IconWrapper>
                <IconWithText>
                  <Icon color="success" component={ThumbUpIcon} onClick={() => vote(streamer._id, "upvote", id)} />
                  <p>{streamer.upvotes}</p>
                </IconWithText>
                <IconWithText>
                  <Icon color="error" component={ThumbDownIcon} onClick={() => vote(streamer._id, "downvote", id)} />
                  <p>{streamer.downvotes}</p>
                </IconWithText>
              </IconWrapper>
            </LeftSide>

            <Button variant="contained" color="primary" onClick={() => goToDetails(streamer._id)}>
              Go to details
            </Button>
          </StreamerHeader>
        </SingleStreamer>
      ))}
    </StreamerListWrapper>
  );
};

export default StreamerList;
