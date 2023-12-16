import { renderPlaylist } from './playlist/renderPlaylist.component.js';
import { renderSeparator} from "../common/renderSeparator.component.js";

export function renderPlaylists(inputPlaylists) {
    for (let i = 0; i < inputPlaylists.length; i++) {
        const currentPlaylist = inputPlaylists[i]
        renderPlaylist(currentPlaylist);
        renderSeparator();
    }
}
