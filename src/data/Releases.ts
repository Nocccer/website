import a from '../images/a.jpg';
import disconnect_connect from '../images/disconnect_connect.jpg';
import bonsai from '../images/bonsai.jpg';

interface LinkConf {
    name: string;
    link: string;
}

export interface ReleaseConf {
    name: string;
    picture: string;
    date: string;
    description: string;
    streams: LinkConf[];
    buys: LinkConf[];
}

export const releases: ReleaseConf[] =
    [
        {
            name: "Disconnect / Connect",
            picture: disconnect_connect,
            date: "05/15/2020",
            description: "ost - single",
            streams: [
                {
                    name: "spotify",
                    link: "https://open.spotify.com/track/1XzT7BqzyYprRfI3Jsp7lj?si=4466303090544536"
                },
                {
                    name: "apple-music",
                    link: "https://music.apple.com/de/album/disconnect-connect/1514103010?i=1514103011"
                },
                {
                    name: "deezer",
                    link: "https://deezer.page.link/g9wF6gBX1bJkhz2g9"
                },
                {
                    name: "soundcloud",
                    link: "https://soundcloud.com/weareisolate/disconnect-connect-original-soundtrack"
                },
                {
                    name: "tidal",
                    link: "https://tidal.com/browse/album/142143194"
                },
                {
                    name: "napster",
                    link: "https://de.napster.com/artist/isolate-2/album/disconnect-connect"
                },
                {
                    name: "youtube-music",
                    link: "https://music.youtube.com/playlist?list=OLAK5uy_keYVvXC9MlLfgVjDq3Ouv1Lo9l38n9Weo&feature=share"
                }
            ],
            buys: [
                {
                    name: "bandcamp",
                    link: "https://weareisolate.bandcamp.com/track/disconnect-connect-original-soundtrack"
                },
                {
                    name: "itunes",
                    link: "https://music.apple.com/de/album/disconnect-connect-single/1514103010"
                },
                {
                    name: "amazon",
                    link: "https://www.amazon.de/Disconnect-Connect/dp/B088SC45H9/ref=sr_1_7?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=disconnect+%2F+connect&qid=1627042906&s=dmusic&sr=1-7"
                }
            ]
        },
        {
            name: "A",
            picture: a,
            date: "12/21/2018",
            description: "ep",
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
        },
        {
            name: "Bonsai",
            picture: bonsai,
            date: "01/01/2017",
            description: "single",
            streams: [],
            buys: [
                {
                    name: "bandcamp",
                    link: "https://weareisolate.bandcamp.com/track/bonsai"
                }
            ]
        }
    ]