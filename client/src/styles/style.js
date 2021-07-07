import styled, { css }  from 'styled-components';

export const Wrapper = styled.main `
  width: 100%;
  height: 100%;

  div {
    @media (min-width: 600px) {
      display: flex;
    }
  }  
`
export const WrapperConverter = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 30px;

  @media (min-width: 600px) {
    width: 50%;
  }
`

export const WrapperPlay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 30px;

  h1 {
    margin-top: 20px;
    text-align: center;
  }
  
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 20px ;
    width: 100%;
    margin-top: 10px;
    border: 1px solid lightgray;
    border-radius: 5px;
    flex-wrap: wrap;    
  }

  audio {
    height: 30px;
    border-radius: 2px;
  }
  
  p {
    margin: 0 10px;
    text-align: center;
    max-width: 350px;
  }
  
  @media (min-width: 600px) {
    width: 50%;
    margin: 0 10px 0 0;
  }

`