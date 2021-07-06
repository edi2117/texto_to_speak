import {Label, Input} from 'reactstrap';
import styled from 'styled-components';


const LabelStyle = styled(Label)`
  margin-top: 20px;
`

const InputStyle = styled(Input)`
  resize: none;
  height: 200px;
`

const TextArea = () => {
  return(
    <>
      <LabelStyle htmlFor="comment">Comentário</LabelStyle>
      <InputStyle 
        type="textarea"
        name="text"
        id="comment"
      />
    </>
  )
} 

export default TextArea;