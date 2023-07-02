import styled from "styled-components";

const StreamerListWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  flex-direction: column;
  gap: 20px;
  border-radius: 4px;
  h1 {
    text-align: center;
  }
`;

const SingleStreamer = styled.div`
  padding: 20px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
`;

const IconWrapper = styled.div`
  display: flex;
  gap: 20px;
  p {
    margin: 5px;
  }
`;

const IconWithText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  svg {
    cursor: pointer;
  }
`;

const StreamerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const LeftSide = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
`;

export { StreamerListWrapper, SingleStreamer, IconWrapper, IconWithText, StreamerHeader, LeftSide };
