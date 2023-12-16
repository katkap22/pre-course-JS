export function renderPlaylistHeader(playlistForRendering) {
    renderPlaylistHeaderTitle(playlistForRendering);
    renderPlaylistHeaderCover(playlistForRendering);
}

function renderPlaylistHeaderTitle(playlistForRendering) {
    let playListTitleElement = document.createElement('h2');
    playListTitleElement.append(playlistForRendering.title);
    document.body.append(playListTitleElement);
}

function renderPlaylistHeaderCover(playlistForRendering) {
    let coverElement = document.createElement('img');
    coverElement.src = playlistForRendering.coverImageUrl;
    document.body.append(coverElement);
}
