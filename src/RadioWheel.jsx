import { useState } from "react";
import { RadioStation } from "./RadioStation";
import { useContext } from "react";
import { useEffect } from "react";
import { SongContext } from "./context/songplaying"
import stationsData from "./data/radiostations.json"

export function RadioWheel() {
    const [wheelVisible, setwheelVisible] = useState(false)
    const [volume, setVolume] = useState(100)
    const {songs, setSongs, stationPlaying, setStationPlaying} = useContext(SongContext)

    const radiostations = stationsData.stationdata
    const angleStep = 360 / stationsData.stationdata.length
    const height = 45

    
    return(
        <>
            <div className="radiowheel">
                {radiostations.map((stationdata, i) => {
                return <RadioStation key={stationdata.name} angle={angleStep*i} height={height} station={stationdata}></RadioStation>
                })}
            </div>

            <div className="songmetadata">
                <h1 className="radio-name">{}</h1>
                <h2 className="song-name">{}</h2>
                <h3 className="artist-name">{}</h3>
            </div>
        </>

    )
}

/* stationPlaying = {name: null, song:null, artist: null} 
songs = [
    {
        "name": "Blaine County Talk Radio",
        "filename": "blaine-county-talk-radio.png",
        "link": "https://www.youtube.com/watch?v=aaXui87cF5Y&t=3588s",
        "seconds": 5079,
        "location": null
    },
    {
        "name": "Blonded Los Santos",
        "filename": "blonded-los-santos.webp",
        "link": "https://youtu.be/-tVumJBaTWY?si=hP515TI0qg5CteXU",
        "seconds": 6139,
        "location": null
    },
    {
        "name": "Channel X",
        "filename": "channel-x.png",
        "link": "https://www.youtube.com/watch?v=S1-sjuvgo6s",
        "seconds": 6263,
        "location": null
    },
    {
        "name": "East Los FM",
        "filename": "east-los-fm.png",
        "link": "https://youtu.be/iX2liYJZuJU?si=Fdx9XyuQFzozERhM",
        "seconds": 2465,
        "location": null
    },
    {
        "name": "FlyLo FM",
        "filename": "fly-lo-fm.png",
        "link": "https://www.youtube.com/watch?v=YAzCJINGWGM",
        "seconds": 3870,
        "location": null
    },
    {
        "name": "iFruit Radio",
        "filename": "ifruit-radio.webp",
        "link": "https://youtu.be/fpvJaphZ2_g?si=98insbOs6XHfjknH",
        "seconds": 5201,
        "location": null
    },
    {
        "name": "Kult FM",
        "filename": "kult-fm.webp",
        "link": "https://youtu.be/FY9EiOllRhE?si=V0EmyMvvYCkXTniF",
        "seconds": 8406,
        "location": null
    },
    {
        "name": "Los Santos Rock Radio",
        "filename": "los-santos-rock-radio.png",
        "link": "https://www.youtube.com/watch?v=fZPV-9GlM-c",
        "seconds": 17240,
        "location": null
    },
    {
        "name": "Los Santos Underground Radio",
        "filename": "los-santos-underground-radio.png",
        "link": "https://www.youtube.com/watch?v=I2Xjuz-mnN0",
        "seconds": 16734,
        "location": null
    },
    {
        "name": "Motomami Los Santos",
        "filename": "motomami.svg",
        "link": "https://youtu.be/30uA_Hppzpc",
        "seconds": 11759,
        "location": null
    },
    {
        "name": "The Music Locker",
        "filename": "music-locker-radio.png",
        "link": "https://www.youtube.com/watch?v=dBvMBYbUZFc",
        "seconds": 27245,
        "location": null
    },
    {
        "name": "Non-Stop Pop FM",
        "filename": "non-stop-pop-fm.png",
        "link": "https://www.youtube.com/watch?v=Fjp0wu3lEHk",
        "seconds": 13878,
        "location": null
    },
    {
        "name": "Radio Los Santos",
        "filename": "radio-los-santos.png",
        "link": "https://www.youtube.com/watch?v=C3_FSXZtRe8",
        "seconds": 21384,
        "location": null
    },
    {
        "name": "None",
        "filename": "none.png",
        "link": null,
        "seconds": 0,
        "location": null
    },
    {
        "name": "Radio Mirror Park",
        "filename": "radio-mirror-park.webp",
        "link": "https://www.youtube.com/watch?v=SDWHIACuuaQ",
        "seconds": 12773,
        "location": null
    },
    {
        "name": "Rebel Radio",
        "filename": "rebel-radio.webp",
        "link": "https://youtu.be/N12WWl_f3QM?si=H0rzjb_3-THwvPZ9",
        "seconds": 3457,
        "location": null
    },
    {
        "name": "Soulwax FM",
        "filename": "soulwax-fm.jpg",
        "link": "https://youtu.be/sFwcLC5HC9I?si=e6gAJ6OgsUjr1oGj",
        "seconds": 2566,
        "location": null
    },
    {
        "name": "Space 103.2",
        "filename": "space.png",
        "link": "https://youtu.be/lCZc9y9KpY4?si=eEQaYVsi0opQtd-z",
        "seconds": 5653,
        "location": null
    },
    {
        "name": "Still Slipping Los Santos",
        "filename": "still-slipping-los-santos.png",
        "link": "https://youtu.be/P3qixldzDow?si=1eAXSkGFVya4YnRU",
        "seconds": 4364,
        "location": null
    },
    {
        "name": "The Blue Ark",
        "filename": "the-blue-ark.png",
        "link": "https://youtu.be/osmrXqRuwJA?si=Lp4TtHzfj30LDILX",
        "seconds": 4790,
        "location": null
    },
    {
        "name": "The Lab",
        "filename": "the-lab.webp",
        "link": "https://youtu.be/4J6JK7ich6E?si=zh7FT23Qien--43T",
        "seconds": 3299,
        "location": null
    },
    {
        "name": "The Lowdown 91.1",
        "filename": "the-lowdown.webp",
        "link": "https://www.youtube.com/watch?v=oaNdiTLKlMA",
        "seconds": 4372,
        "location": null
    },
    {
        "name": "Vinewood Boulevard Radio",
        "filename": "vinewood-boulevard-radio.webp",
        "link": "https://youtu.be/5fnGyUc2eFs?si=8gMR5ZjrNyjHfvCt",
        "seconds": 5730,
        "location": null
    },
    {
        "name": "WCTR",
        "filename": "wctr.png",
        "link": "https://www.youtube.com/watch?v=IhCFJnaYvnI",
        "seconds": 5815,
        "location": null
    },
    {
        "name": "West Coast Classics",
        "filename": "west-coast-classics.webp",
        "link": "https://www.youtube.com/watch?v=wnmg6CfHQ18",
        "seconds": 7292,
        "location": null
    },
    {
        "name": "Worldwide FM",
        "filename": "worldwide-fm.png",
        "link": "https://youtu.be/fYi-ZoglsY?si=t36_NeqCJOFDkfAC",
        "seconds": 6960,
        "location": null
    }
]
*/