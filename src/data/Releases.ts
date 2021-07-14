import a from '../images/a.jpg';

interface LinkConf {
    name: string;
    link: string;
}

export interface ReleaseConf {
    name: string;
    picture: string;
    date: string;
    description: string;
    tracklist: string[];
    streams: LinkConf[];
    buys: LinkConf[];
}

export const releases: ReleaseConf[] =
    [
        {
            name: "A",
            picture: a,
            date: "12/21/2018",
            description: "",
            tracklist: [
                "Anew",
                "Asleep",
                "Adrift",
                "Afar",
                "Aglow",
                "Alight"
            ],
            streams: [
                {
                    name: "spotify",
                    link: "https://open.spotify.com/album/1VBgVVUayDGv74i6Z6DIZH?si=GqDvtRdwQzauQC3DsWBUqg&dl_branch=1"
                },
                {
                    name: "apple-music",
                    link: "https://music.apple.com/de/album/1445991586"
                },
                {
                    name: "deezer",
                    link: "https://www.deezer.com/en/album/81318632"
                },
                {
                    name: "soundcloud",
                    link: "https://soundcloud.com/weareisolate"
                },
                {
                    name: "tidal",
                    link: "https://tidal.com/browse/album/100570465"
                },
                {
                    name: "napster",
                    link: "https://de.napster.com/artist/isolate-2/album/a-340014706"
                },
                {
                    name: "youtube-music",
                    link: "https://music.youtube.com/playlist?list=OLAK5uy_k3sZZwTAOviJe4wLhINwZ6ecOI-Oz4sAU"
                }
            ],
            buys: [
                {
                    name: "bandcamp",
                    link: "https://weareisolate.bandcamp.com/album/a"
                },
                {
                    name: "itunes",
                    link: "https://music.apple.com/de/album/1445991586"
                },
                {
                    name: "amazon",
                    link: "https://www.amazon.de/dp/B07L6PYVZ8/ref=ap_ws_tlw_alb1"
                }
            ]
        }
    ]