import Button from 'components/Button/Button';
import TextArea from 'components/TextArea/TextArea';
import { useEffect, useState } from 'react';
import { WrapperConverter, WrapperPlay, Wrapper } from 'styles/style';
import { api } from 'service/api';

const Home = () => {


  const [comments, setCommets]    = useState();

  const getAll = async () => {
    const res = await api.get(`/comment/list`);

    setCommets(res?.data);
  }
  useEffect(async () => {
    getAll();
  }, [])
  
  const submit = async (e) => {
    e.preventDefault(); 
    let response = [];
    let content  = e?.target?.text?.value;
    e.target.reset();
    const res = await api.post(`/comment/add`, {content});
  
    setTimeout(() => {
      setCommets(response.concat(comments, res?.data?.return));
      
    }, 2000)
  }
  return (
    <Wrapper>
      <div>
        <WrapperConverter onSubmit={submit}>
          <TextArea />
          <Button>
            Cadastrar
          </Button>
        </WrapperConverter>
        <WrapperPlay>
          <h1>Comentários</h1>
          {
            comments?.map((comment,key) => (
              <div key={comment?.id}>
                <p>{comment?.content}</p>
                
                <audio 
                  controls
                  src={`/audio/${comment?.id}.mp3`}
                />
              </div>
            ))
          }
        </WrapperPlay>
      </div>
    </Wrapper>
  );
}

export default Home;