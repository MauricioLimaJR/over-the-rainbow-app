import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80%;
`;

export const Form = styled.form`
  max-width: 400px;
  background: #fff;
  padding: 5px;
  img {
    width: 100px;
  }
  p {
    color: #ff3333;
    margin-bottom: 15px;
    border: 1px solid #ff3333;
    padding: 10px;
    width: 100%;
    text-align: center;
  }
  input {
    height: 46px;
    margin-bottom: 15px;
    padding: 0 5%;
    color: #777;
    font-size: 15px;
    width: 90%;
    border: 1px solid #ddd;
    &::placeholder {
      color: #999;
    }
  }
  button {
    color: #fff;
    font-size: 16px;
    background: linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%);
    box-shadow: 0 3px 5px 2px rgba(255, 105, 135, .3);
    height: 56px;
    border: 0;
    border-radius: 5px;
    width: 100%;
  }
  hr {
    margin: 20px 0;
    border: none;
    border-bottom: 1px solid #cdcdcd;
    width: 100%;
  }
  a {
    font-size: 16;
    font-weight: bold;
    color: #999;
    text-decoration: none;
  }
`