let playlist1 = {
    title: 'Hip-Hop Hits',
    coverImageUrl: './assets/images/playlist1.png',
    info: {
        totalTracksCount: 4,
        totalTracksDurationInSeconds: 733,
    },
    tracks: [
        {
            coverImageUrl: './assets/images/imageEminem.png',
            artistName: 'Eminem',
            title: 'Rap God',
            fileUrl: './assets/tracks/Eminem_-_Rap_God.mp3',
            isHot: false,
        },
        {
            coverImageUrl: './assets/images/image50Cent.png',
            artistName: '50cent',
            title: 'In da Club',
            fileUrl: './assets/tracks/50cent.mp3',
            isHot: true,
        },
        // {
        //     coverImageUrl: './assets/images/image50Cent.png',
        //     artistName: '50cent',
        //     title: 'Kolors',
        //     fileUrl: './assets/tracks/the-kolors-italo-disco.mp3',
        //     isHot: true,
        // },
    ]
}

let playlist2 = {
    title: 'Hip-Hop Hits',
    coverImageUrl: './assets/images/playlist1.png',
    info: {
        totalTracksCount: 4,
        totalTracksDurationInSeconds: 733,
    },
    tracks: [
        {
            coverImageUrl: './assets/images/imageEminem.png',
            artistName: 'Eminem',
            title: 'Rap God',
            fileUrl: './assets/tracks/Eminem_-_Rap_God.mp3',
            isHot: false,
        },
        {
            coverImageUrl: './assets/images/image50Cent.png',
            artistName: '50cent',
            title: 'In da Club',
            fileUrl: './assets/tracks/50cent.mp3',
            isHot: true,
        }
    ]
}

renderPlaylist(playlist1);
renderPlaylist(playlist2);

function renderPlaylist(playlistForRendering) {
    renderPlaylistHeader(playlistForRendering);

    renderTrack(playlistForRendering.tracks[0]);
    renderTrack(playlistForRendering.tracks[1]);
}

function renderPlaylistHeader(playlistForRendering) {
    let playListImageElement = document.createElement('img');
    playListImageElement.src = playlistForRendering.coverImageUrl;
    document.body.append(playListImageElement);

    let playListTitleElement = document.createElement('h2');
    playListTitleElement.append(playlistForRendering.title);
    document.body.append(playListTitleElement);
}

function renderTrack(inputTrackForRendering) {

    let trackElement = document.createElement('div');
    trackElement.append(inputTrackForRendering.artistName + ' - ' + inputTrackForRendering.title);

    let playerElement = document.createElement("audio");
    playerElement.src = inputTrackForRendering.fileUrl;
    playerElement.controls = true;
    trackElement.append(playerElement);

    let coverElement = document.createElement('img');
    coverElement.src = inputTrackForRendering.coverImageUrl;
    trackElement.append(coverElement);

    document.body.append(trackElement);
}