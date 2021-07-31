import topology from '../images/topology.jpg';
import quarry from '../images/quarry.jpg';
import disconnect_connect from '../images/disconnect_connect.jpg';
import a from '../images/a.jpg';
import asleep from '../images/asleep.jpg';
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
            name: "Topology",
            picture: topology,
            date: "07/30/2021",
            description: "ep",
            streams: [
                {
                    name: "spotify",
                    link: "https://open.spotify.com/album/7jwqAfros0bEZeOwUiKw92?si=CuJq5s2yTMSO5aDzsGwlgw&dl_branch=1"
                },
                {
                    name: "apple",
                    link: "https://music.apple.com/de/album/topology-ep/1576168990"
                },
                {
                    name: "deezer",
                    link: "https://deezer.page.link/itoaceDS5cqT99dA8"
                },
                {
                    name: "tidal",
                    link: "https://tidal.com/browse/album/190655143"
                },
                {
                    name: "napster",
                    link: "https://de.napster.com/artist/isolate-2/album/topology"
                },
                {
                    name: "youtube",
                    link: "https://music.youtube.com/playlist?list=OLAK5uy_lN7NoulJcnST4b_5d6N77GUCD9m3az3jk&feature=share"
                }
            ],
            buys: [
                {
                    name: "bandcamp",
                    link: "https://weareisolate.bandcamp.com/album/topology"
                },
                {
                    name: "itunes",
                    link: "https://itunes.apple.com/album/topology-ep/1576168990?app=itunes&ls=1&at=11lPP6"
                },
                {
                    name: "amazon",
                    link: "https://www.amazon.de/gp/product/B0996GL78V/ref=dm_ws_sp_ps_dp"
                }
            ]
        },
        {
            name: "Quarry",
            picture: quarry,
            date: "07/16/2021",
            description: "single",
            streams: [
                {
                    name: "spotify",
                    link: "https://open.spotify.com/track/1KOkrS3KZG8cjEwgMsaf4U?si=02d7780a021b4856"
                },
                {
                    name: "apple",
                    link: "https://music.apple.com/de/album/quarry/1576164765?i=1576164766"
                },
                {
                    name: "deezer",
                    link: "https://deezer.page.link/K7okfT3VDfWZzfyb7"
                },
                {
                    name: "tidal",
                    link: "https://tidal.com/browse/track/190655151"
                },
                {
                    name: "napster",
                    link: "https://de.napster.com/artist/isolate-2/album/quarry"
                },
                {
                    name: "youtube",
                    link: "https://music.youtube.com/watch?v=oYdBbFZLizE&feature=share"
                }
            ],
            buys: [
                {
                    name: "bandcamp",
                    link: "https://weareisolate.bandcamp.com/track/quarry"
                },
                {
                    name: "itunes",
                    link: "https://itunes.apple.com/album/quarry-single/1576164765?app=itunes&ls=1&at=11lPP6"
                },
                {
                    name: "amazon",
                    link: "https://www.amazon.de/dp/B09968N69K/ref=ap_ws_tlw_trk1?tag=sp0f88-20"
                }
            ]
        },
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
                    name: "apple",
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
                    name: "youtube",
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
                    name: "apple",
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
                    name: "youtube",
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
            name: "Asleep",
            picture: asleep,
            date: "12/14/2018",
            description: "single",
            streams: [
                {
                    name: "spotify",
                    link: "https://open.spotify.com/track/40mCD8johnpmJc6o8PJtEa?si=b2a8f2f1f8904b0b"
                },
                {
                    name: "apple",
                    link: "https://music.apple.com/de/album/asleep/1445988306?i=1445988308"
                },
                {
                    name: "deezer",
                    link: "https://deezer.page.link/dP5zRbkizafeCuH48"
                },
                {
                    name: "soundcloud",
                    link: "https://soundcloud.com/weareisolate/asleep-single"
                },
                {
                    name: "tidal",
                    link: "https://tidal.com/browse/track/100569808"
                },
                {
                    name: "napster",
                    link: "https://de.napster.com/artist/isolate-2/album/asleep-340015428"
                },
                {
                    name: "youtube",
                    link: "https://music.youtube.com/watch?v=DSOInUOLJ0M&feature=share"
                }
            ],
            buys: [
                {
                    name: "bandcamp",
                    link: "https://weareisolate.bandcamp.com/track/asleep"
                },
                {
                    name: "itunes",
                    link: "https://music.apple.com/us/album/asleep-single/1445988306"
                },
                {
                    name: "amazon",
                    link: "https://www.amazon.de/Asleep-Isolate/dp/B07L6PPSL1/ref=sr_1_51?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=isolate+asleep&qid=1627221624&s=dmusic&sr=1-51"
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