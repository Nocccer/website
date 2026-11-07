import flare from "../images/flare.jpg";
import suburbia from "../images/suburbia.jpg";
import topology from "../images/topology.jpg";
import quarry from "../images/quarry.jpg";
import disconnect_connect from "../images/disconnect_connect.jpg";
import a from "../images/a.jpg";
import asleep from "../images/asleep.jpg";
import bonsai from "../images/bonsai.jpg";

export interface LinkConf {
  name: string;
  link?: string;
  preSaveLink?: string;
  preOrderLink?: string;
}

export interface ColorStyleConf {
  textColor: string;
  backgroundColor: string;
  borderColor: string;
  isBright: boolean;
}

export interface ReleaseConf {
  name: string;
  picture: string;
  date: string;
  description: string;
  streams: LinkConf[];
  buys: LinkConf[];
  colorStyle: ColorStyleConf;
}

export function isReleaseUpcoming(date: string): boolean {
  const [month, day, year] = date.split("/");
  const releaseDate = new Date(Number(year), Number(month) - 1, Number(day));
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return releaseDate > today;
}

export const releases: ReleaseConf[] = [
  {
    name: "Suburbia",
    picture: suburbia,
    date: "11/20/2026",
    description: "single",
    streams: [],
    buys: [],
    colorStyle: {
      textColor: "#181515",
      backgroundColor: "#f0c94a",
      borderColor: "#4183c4",
      isBright: true,
    },
  },
  {
    name: "Flare",
    picture: flare,
    date: "12/27/2021",
    description: "single",
    streams: [
      {
        name: "spotify",
        link: "https://open.spotify.com/album/2Il7rw8fchTJfbOjCsOXoZ?si=HzuF5dCiT8uS9QUyfwkymQ",
      },
      {
        name: "apple",
        link: "https://music.apple.com/de/album/flare-single/1599744666",
      },
      {
        name: "deezer",
        link: "https://deezer.page.link/i4z7gfDJD6qy5AV17",
      },
      {
        name: "tidal",
        link: "https://tidal.com/browse/album/208649459",
      },
      {
        name: "qobuz",
        link: "https://www.qobuz.com/be-nl/album/flare-isolate/gx8ojt4h84mjc",
      },
      {
        name: "youtube-music",
        link: "https://music.youtube.com/playlist?list=OLAK5uy_lS3-3gR1F3oQfmHy1qjxDmZqWWgMQhECg&feature=share",
      },
      {
        name: "youtube",
        link: "https://youtu.be/dRhWbG3libM",
      },
    ],
    buys: [
      {
        name: "bandcamp",
        link: "https://weareisolate.bandcamp.com/track/flare",
      },
      {
        name: "itunes",
        link: "https://music.apple.com/de/album/flare-single/1599744666",
      },
    ],
    colorStyle: {
      textColor: "#181515",
      backgroundColor: "#2e9555",
      borderColor: "#df3962",
      isBright: true,
    },
  },
  {
    name: "Topology",
    picture: topology,
    date: "07/30/2021",
    description: "ep",
    streams: [
      {
        name: "spotify",
        link: "https://open.spotify.com/album/7jwqAfros0bEZeOwUiKw92?si=CuJq5s2yTMSO5aDzsGwlgw&dl_branch=1",
      },
      {
        name: "apple",
        link: "https://music.apple.com/de/album/topology-ep/1576168990",
      },
      {
        name: "deezer",
        link: "https://deezer.page.link/itoaceDS5cqT99dA8",
      },
      {
        name: "tidal",
        link: "https://tidal.com/browse/album/190655143",
      },
      {
        name: "qobuz",
        link: "https://www.qobuz.com/be-nl/album/topology-isolate/y3kni7sdmvoha",
      },
      {
        name: "youtube-music",
        link: "https://music.youtube.com/playlist?list=OLAK5uy_lN7NoulJcnST4b_5d6N77GUCD9m3az3jk&feature=share",
      },
      {
        name: "youtube",
        link: "https://youtube.com/playlist?list=PLKSvmxRSe490U7LMF2Tk3I4b2qV95v7nM",
      },
    ],
    buys: [
      {
        name: "bandcamp",
        link: "https://weareisolate.bandcamp.com/album/topology",
      },
      {
        name: "itunes",
        link: "https://itunes.apple.com/album/topology-ep/1576168990?app=itunes&ls=1&at=11lPP6",
      },
    ],
    colorStyle: {
      textColor: "#292929",
      backgroundColor: "#d2d2d2",
      borderColor: "#949494",
      isBright: false,
    },
  },
  {
    name: "Quarry",
    picture: quarry,
    date: "07/16/2021",
    description: "single",
    streams: [
      {
        name: "spotify",
        link: "https://open.spotify.com/track/1KOkrS3KZG8cjEwgMsaf4U?si=02d7780a021b4856",
      },
      {
        name: "apple",
        link: "https://music.apple.com/de/album/quarry/1576164765?i=1576164766",
      },
      {
        name: "deezer",
        link: "https://deezer.page.link/K7okfT3VDfWZzfyb7",
      },
      {
        name: "tidal",
        link: "https://tidal.com/browse/track/190655151",
      },
      {
        name: "qobuz",
        link: "https://www.qobuz.com/be-nl/album/quarry-isolate/jcfgeuc6dkodc",
      },
      {
        name: "youtube-music",
        link: "https://music.youtube.com/watch?v=oYdBbFZLizE&feature=share",
      },
      {
        name: "youtube",
        link: "https://youtu.be/eZSKO6xDDXk",
      },
    ],
    buys: [
      {
        name: "bandcamp",
        link: "https://weareisolate.bandcamp.com/track/quarry",
      },
      {
        name: "itunes",
        link: "https://itunes.apple.com/album/quarry-single/1576164765?app=itunes&ls=1&at=11lPP6",
      },
    ],
    colorStyle: {
      textColor: "#282828",
      backgroundColor: "#d4d4d4",
      borderColor: "#949494",
      isBright: false,
    },
  },
  {
    name: "Disconnect / Connect",
    picture: disconnect_connect,
    date: "05/15/2020",
    description: "soundtrack",
    streams: [
      {
        name: "spotify",
        link: "https://open.spotify.com/track/1XzT7BqzyYprRfI3Jsp7lj?si=4466303090544536",
      },
      {
        name: "apple",
        link: "https://music.apple.com/de/album/disconnect-connect/1514103010?i=1514103011",
      },
      {
        name: "deezer",
        link: "https://deezer.page.link/g9wF6gBX1bJkhz2g9",
      },
      {
        name: "soundcloud",
        link: "https://soundcloud.com/weareisolate/disconnect-connect-original-soundtrack",
      },
      {
        name: "tidal",
        link: "https://tidal.com/browse/album/142143194",
      },
      {
        name: "qobuz",
        link: "https://www.qobuz.com/be-nl/album/disconnect-connect-isolate/jgo84ikbj7aqb",
      },
      {
        name: "youtube-music",
        link: "https://music.youtube.com/playlist?list=OLAK5uy_keYVvXC9MlLfgVjDq3Ouv1Lo9l38n9Weo&feature=share",
      },
    ],
    buys: [
      {
        name: "bandcamp",
        link: "https://weareisolate.bandcamp.com/track/disconnect-connect-original-soundtrack",
      },
      {
        name: "itunes",
        link: "https://music.apple.com/de/album/disconnect-connect-single/1514103010",
      },
    ],
    colorStyle: {
      textColor: "#be9879",
      backgroundColor: "#070606",
      borderColor: "#7c2c04",
      isBright: true,
    },
  },
  {
    name: "A",
    picture: a,
    date: "12/21/2018",
    description: "ep",
    streams: [
      {
        name: "spotify",
        link: "https://open.spotify.com/album/1VBgVVUayDGv74i6Z6DIZH?si=GqDvtRdwQzauQC3DsWBUqg&dl_branch=1",
      },
      {
        name: "apple",
        link: "https://music.apple.com/de/album/1445991586",
      },
      {
        name: "deezer",
        link: "https://www.deezer.com/en/album/81318632",
      },
      {
        name: "soundcloud",
        link: "https://soundcloud.com/weareisolate",
      },
      {
        name: "tidal",
        link: "https://tidal.com/browse/album/100570465",
      },
      // TODO: qobuz link
      // {
      //   name: "qobuz",
      //   link: "",
      // },
      {
        name: "youtube-music",
        link: "https://music.youtube.com/playlist?list=OLAK5uy_k3sZZwTAOviJe4wLhINwZ6ecOI-Oz4sAU",
      },
      {
        name: "youtube",
        link: "https://youtube.com/playlist?list=PLKSvmxRSe491D51x9dyvuN9nKJwKxYRoo",
      },
    ],
    buys: [
      {
        name: "bandcamp",
        link: "https://weareisolate.bandcamp.com/album/a",
      },
      {
        name: "itunes",
        link: "https://music.apple.com/de/album/1445991586",
      },
    ],
    colorStyle: {
      textColor: "#f0ece0",
      backgroundColor: "#53462b",
      borderColor: "#557374",
      isBright: true,
    },
  },
  {
    name: "Asleep",
    picture: asleep,
    date: "12/14/2018",
    description: "single",
    streams: [
      {
        name: "spotify",
        link: "https://open.spotify.com/track/40mCD8johnpmJc6o8PJtEa?si=b2a8f2f1f8904b0b",
      },
      {
        name: "apple",
        link: "https://music.apple.com/de/album/asleep/1445988306?i=1445988308",
      },
      {
        name: "deezer",
        link: "https://deezer.page.link/dP5zRbkizafeCuH48",
      },
      {
        name: "soundcloud",
        link: "https://soundcloud.com/weareisolate/asleep-single",
      },
      {
        name: "tidal",
        link: "https://tidal.com/browse/track/100569808",
      },
      {
        name: "qobuz",
        link: "https://www.qobuz.com/be-nl/album/asleep-isolate/ce9e22a2ddorc",
      },
      {
        name: "youtube-music",
        link: "https://music.youtube.com/watch?v=DSOInUOLJ0M&feature=share",
      },
      {
        name: "youtube",
        link: "https://youtu.be/s26nQaxAgnU",
      },
    ],
    buys: [
      {
        name: "bandcamp",
        link: "https://weareisolate.bandcamp.com/track/asleep",
      },
      {
        name: "itunes",
        link: "https://music.apple.com/us/album/asleep-single/1445988306",
      },
    ],
    colorStyle: {
      textColor: "#f5f3e9",
      backgroundColor: "#6d612d",
      borderColor: "#74847e",
      isBright: true,
    },
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
        link: "https://weareisolate.bandcamp.com/track/bonsai",
      },
    ],
    colorStyle: {
      textColor: "#c4c5c8",
      backgroundColor: "#1f1f1e",
      borderColor: "#5b5b64",
      isBright: true,
    },
  },
];
