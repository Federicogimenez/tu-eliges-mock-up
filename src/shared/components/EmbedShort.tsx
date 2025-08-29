import ReactPlayer from 'react-player';

interface EmbedShortProps{
    id: string;
    handleOnEnd: ()=>void;
    active: boolean;
}

export default function EmbedShort( { id, handleOnEnd, active }: EmbedShortProps) {
  return (
    <div>
        <ReactPlayer src={`https://www.youtube.com/shorts/${id}`} 
            volume={.1}
            width="100%"
            height="100%"
            // playbackRate={undefined}
            style={{ width: '100%', height: '100%', aspectRatio: '2/3' }}
            config={{
                youtube: {
                    color:'red',
                    rel:0
                    // color: 'light',
                },
            }}
            playing={active}
            onEnded={handleOnEnd} 
            />
    </div>
  )
}
