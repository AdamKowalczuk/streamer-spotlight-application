import styled from "styled-components";

const StreamerDetailsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding: 20px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  border-radius: 4px;
  margin: 20px;
`;

const StreamerImage = styled.img`
  max-width: 300px;
`;

const StreamerProfile = styled.div``;

export { StreamerDetailsWrapper, StreamerImage, StreamerProfile };
