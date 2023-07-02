import styled from "styled-components";

const StreamerDetailsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding: 20px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  border-radius: 4px;
  margin: 20px;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const StreamerImage = styled.img`
  max-width: 300px;
  height: fit-content;
`;

const StreamerProfile = styled.div``;

export { StreamerDetailsWrapper, StreamerImage, StreamerProfile };
