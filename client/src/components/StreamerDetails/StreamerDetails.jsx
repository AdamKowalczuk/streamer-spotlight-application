import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { StreamerDetailsWrapper, StreamerImage, StreamerProfile } from "./StreamerDetails.styled";
import { IconWrapper, IconWithText } from "../StreamerList/StreamerList.styled";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { Icon } from "@mui/material";

const StreamerDetails = () => {
  const { streamerId } = useParams();
  const [streamer, setStreamer] = useState(null);

  const navigate = useNavigate();

  const goBack = () => {
    navigate(`/`);
  };

  useEffect(() => {
    fetch(`http://localhost:8080/streamers/${streamerId}`)
      .then((response) => response.json())
      .then((data) => setStreamer(data))
      .catch((error) => {});
  });

  if (!streamer) {
    return <div>Loading...</div>;
  }

  const vote = (voteOption) => {
    fetch(`http://localhost:8080/streamers/${streamerId}/vote`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ vote: voteOption }),
    })
      .then((response) => response.json())
      .then((data) => setStreamer(data))
      .catch((error) => {});
  };

  return (
    <div>
      <Button style={{ marginLeft: "20px", marginTop: "20px" }} variant="contained" color="primary" onClick={() => goBack()}>
        Go back
      </Button>
      <StreamerDetailsWrapper>
        <StreamerImage src="https://static-cdn.jtvnw.net/jtv_user_pictures/asmongold-profile_image-f7ddcbd0332f5d28-300x300.png" />
        <StreamerProfile>
          <h2>{streamer.name}</h2>
          <p>{streamer.description}</p>
          <p>Platform: {streamer.platform}</p>
          <IconWrapper>
            <IconWithText>
              <Icon color="success" component={ThumbUpIcon} onClick={() => vote("upvote")} />
              <p>{streamer.upvotes}</p>
            </IconWithText>
            <IconWithText>
              <Icon color="error" component={ThumbDownIcon} onClick={() => vote("downvote")} />
              <p>{streamer.downvotes}</p>
            </IconWithText>
          </IconWrapper>
        </StreamerProfile>
      </StreamerDetailsWrapper>
    </div>
  );
};

export default StreamerDetails;
