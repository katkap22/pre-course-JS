export function renderPlaylistTrack(inputTrackForRendering) {
    const trackElement = document.createElement('div')

    let coverElement = document.createElement('img');
    coverElement.src = inputTrackForRendering.coverImageUrl;
    coverElement.style.border = '3px solid black';
    coverElement.style.borderRadius = '20%';
    coverElement.style.width = '48px';
    coverElement.style.height = '48px';
    trackElement.append(coverElement);

    const trackTitleElement = document.createElement('div');

    if (inputTrackForRendering.inTrend) {
        trackTitleElement.append('🔥'); //window + ;
    }
    trackTitleElement.append(inputTrackForRendering.artistName + ' - ' + inputTrackForRendering.title);
    trackElement.append(trackTitleElement);

    let audioElement = document.createElement("audio");
    audioElement.src = inputTrackForRendering.fileUrl;
    audioElement.controls = true;
    trackElement.append(audioElement);


    document.body.append(trackElement);
}