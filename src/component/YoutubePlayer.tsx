import { useEffect, useRef, useState } from "react";
import Youtube from "react-youtube";

interface YoutubeiFrameProps {
    videoId: string,
    width?: string;
    height?: string;
}

export const YoutubePlayer: React.FC<YoutubeiFrameProps> = ({ videoId, width, height }) => {

    const playerRef = useRef(null);
    const [ready, setReady] = useState(false);

    const opts = {
        height: height ? height : 'auto',
        width: width ? width : 'auto',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
            loop: 1,
            disablekb: 1,
            showinfo: 0,
            mute: 1, 
            fs: 0,
            rel: 0,
            wmode: "transparent",
            modestbranding: 0,
            autohide: 0,
            branding: 0,
            controls: 0,
            enablejsapi: 1,
            widgetid: 1
        },
    };

    const onEndHandler = (event: any) => {
        event.target.playVideo()
    }

    const onPlayHandler = (event: any) => {
        setReady(true);
    }

    const onReadyHandler = (event: any) => {}

    let left = width && (((parseInt(width)  - window.innerWidth)/2)* -1)+'px';
    useEffect(()=>{
        left = width && (((parseInt(width)  - window.innerWidth)/2)* -1)+'px'
    }, [window.innerWidth])

    return (
        <>
            <div className={`youtube-player-container ${ready&& "playing"} `}>
                <Youtube
                    ref={playerRef}
                    videoId={videoId}
                    opts={opts}
                    onEnd={(event) => { onEndHandler(event) }}
                    onReady={(event) => { onReadyHandler(event) }}
                    onPlay={(event) => { onPlayHandler(event) }}
                    // style={{left: `${width ?  left : 0}`}} 
                />

            </div>
        </>
    )
}

