import styled, { css } from 'styled-components';

const Btn = styled.button`
  margin-top: 15px;
  width: 100%;
  height: 40px;
  background-color: #C9EEFA;
  border: 1px solid #b9ebfa;
  border-radius: 0.475rem;
  :hover{
    filter: brightness(0.95);
  }

  ${({ size }) =>
    size === "small" &&
    css`
      height: 2rem;
      width: 2rem;
      right: 2rem;
      transition: filter 0.3s;
      align-items: center;
      margin-top: 0;

      img {
        height: 1rem;
        width: 1rem;
      }
  `}
`

const ButtonComponent = (props) => {
  return (
    <Btn 
      type={props.type}
      size={props.size}
      onClick={props.onClick}
    >
      {props.children}
    </Btn>
  );
}

export default ButtonComponent;