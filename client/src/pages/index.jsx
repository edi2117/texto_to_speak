import Button from 'components/Button/Button';
import TextArea from 'components/TextArea/TextArea';
import { useEffect, useRef, useState } from 'react';
import { WrapperConverter, WrapperPlay, Wrapper } from 'styles/style';
import { api } from 'service/api';

const Home = () => {

  const audio = useRef();

  const [comments, setCommets] = useState();

  useEffect(async () => {
    const res = await api.get(`/comment/list`);
    setCommets(res?.data);
  }, [comments])
  
  const submit = async (e) => {
    e.preventDefault(); 

    let content = e?.target?.text?.value; 

    const res = await api.post(`/comment/add`, {content});
  };

  const play = () => {
    audio?.current?.play();
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
                  ref={audio} 
                  src={`/audio/${comment?.id}.mp3`}
                />
                <Button size="small" onClick={() => play()}>
                  <img src="/play.png" alt="Reproduzir comentário" />
                </Button>
              </div>
            ))
          }
        </WrapperPlay>
      </div>
    </Wrapper>
  );
}

export default Home;