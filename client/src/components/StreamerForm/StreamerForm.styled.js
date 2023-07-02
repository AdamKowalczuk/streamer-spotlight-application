import styled from "styled-components";

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 500px;
    padding: 20px;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    border-radius: 4px;
  }
`;

export { FormWrapper };
