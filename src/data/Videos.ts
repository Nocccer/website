export interface VideoConf {
    title: string;
    link: string;
}

interface VideosConf {
    official: VideoConf[];
    cooperation: VideoConf[];
}

export const videos: VideosConf = {
    official: [
        {
            title: "Asleep",
            link: "https://www.youtube.com/embed/s26nQaxAgnU"
        },
        {
            title: "Adrift",
            link: "https://www.youtube.com/embed/Cq0DOth2rpU"
        }
    ],
    cooperation: [
        {
            title: "Disconnect / Connect",
            link: "https://www.youtube.com/embed/OpkBGzpaCRw"
        }
    ]
}

