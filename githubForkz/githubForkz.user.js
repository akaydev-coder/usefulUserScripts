// ==UserScript==
// @name        githubForkz
// @namespace   https://github.com/akaydev-coder/usefulUserScripts
// @match       *://github.com/*/*
// @updateURL   https://github.com/akaydev-coder/usefulUserScripts/raw/main/githubForkz/githubForkz.user.js
// @downloadURL https://github.com/akaydev-coder/usefulUserScripts/raw/main/githubForkz/githubForkz.user.js
// @grant       none
// @version     4.20.70.2023-04-21T21:46:00
// @author      DeltaBravoZulu modded by akay.dev
// @icon        data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2012.172%2015.766%22%3E%3Cpath%20d%3D%22M6.562%201.04a1.412%201.412%200%200%200-1.448%201.369v.071a1.384%201.384%200%200%200%20.76%201.266c.115%201.584-.7%201.96-2.469%202.613-.39.145-.788.294-1.186.469V2.741a1.387%201.387%200%200%200%20.731-1.249V1.48A1.41%201.41%200%200%200%202.486.413a1.5%201.5%200%200%200-.984-.362A1.41%201.41%200%200%200%20.051%201.418v.074a1.378%201.378%200%200%200%20.732%201.249v5.638a4.016%204.016%200%200%200%200%20.676v.3a1.386%201.386%200%200%200-.732%201.251v.011a1.409%201.409%200%200%200%201.389%201.434h.061a1.411%201.411%200%200%200%201.45-1.369v-.071a1.408%201.408%200%200%200-.466-1.067%201.357%201.357%200%200%200-.255-.173c0-.118%200-.239-.01-.353v-.562a.281.281%200%200%201%20.008-.031%2013.068%2013.068%200%200%201%201.679-.716c1.673-.621%203.558-1.321%203.406-4a1.388%201.388%200%200%200%20.7-1.234v-.004A1.41%201.41%200%200%200%206.624%201.04zm-5.85.444a.748.748%200%200%201%20.726-.77h.064a.748.748%200%200%201%20.785.71v.06a.749.749%200%200%201-.725.772h-.06a.75.75%200%200%201-.787-.711.62.62%200%200%201%200-.061zm1.573%209.132a.748.748%200%200%201-.724.771h-.059a.771.771%200%200%201-.05-1.542h.05a.75.75%200%200%201%20.785.712l.001.059zm4.277-7.371a.75.75%200%200%201-.786-.71v-.061a.749.749%200%200%201%20.727-.771h.059a.751.751%200%200%201%20.786.711v.06a.749.749%200%200%201-.726.771z%22%20fill%3D%22%2357a5c4%22%20stroke%3D%22%23000%22%20stroke-miterlimit%3D%2210%22%20stroke-width%3D%220.1px%22%2F%3E%3Cpath%20d%3D%22M10.716%2012.909a1.4%201.4%200%200%200-1.369%201.086%203.963%203.963%200%200%201-.911-.338%201.061%201.061%200%200%201-.245-.18.866.866%200%200%201-.123-.159q-.021-.034-.039-.069a2.054%202.054%200%200%201-.146-.358c-.054-.181-.093-.382-.132-.577l-.02-.1a4.708%204.708%200%200%200-.109-.436%202.156%202.156%200%200%200-.174-.422%201.65%201.65%200%200%200-.145-.218%201.787%201.787%200%200%200-.63-.5%201.773%201.773%200%200%200%20.63-.5%201.182%201.182%200%200%200%20.08-.11c.025-.038.039-.073.065-.106a2.152%202.152%200%200%200%20.18-.422%204.407%204.407%200%200%200%20.109-.429l.02-.1c.039-.2.078-.4.132-.577a1.912%201.912%200%200%201%20.146-.357.789.789%200%200%201%20.033-.066.827.827%200%200%201%20.123-.158%201.037%201.037%200%200%201%20.245-.181%203.911%203.911%200%200%201%20.918-.339%201.4%201.4%200%201%200-.029-.525%204.435%204.435%200%200%200-1.139.411%201.529%201.529%200%200%200-.368.276%201.471%201.471%200%200%200-.192.245l-.053.094a2.444%202.444%200%200%200-.184.453c-.06.2-.1.416-.143.622l-.02.1c-.028.135-.06.266-.1.389a1.708%201.708%200%200%201-.138.32.881.881%200%200%201-.047.077c-.016.025-.034.05-.052.074a1.5%201.5%200%200%201-.9.49l-.182.021H2.875a1.394%201.394%200%201%200-.014.6h2.952l.179.021a1.5%201.5%200%200%201%20.895.49c.019.023.036.049.052.072s.033.053.047.078a1.636%201.636%200%200%201%20.138.322c.037.123.069.253.1.389l.02.1c.04.207.083.421.143.623a2.4%202.4%200%200%200%20.187.457l.052.094a1.51%201.51%200%200%200%20.193.251%201.529%201.529%200%200%200%20.368.276%204.548%204.548%200%200%200%201.142.412%201.4%201.4%200%201%200%201.39-1.61zm0-6.836a.879.879%200%201%201-.883.879.879.879%200%200%201%20.883-.881zm-9.22%205.416a.879.879%200%201%201%20.885-.879.879.879%200%200%201-.885.879zm9.22%203.695a.88.88%200%201%201%20.884-.88.88.88%200%200%201-.884.88z%22%20fill%3D%22%23c0799a%22%20stroke%3D%22%23000%22%20stroke-miterlimit%3D%2210%22%20stroke-width%3D%220.1px%22%2F%3E%3C%2Fsvg%3E
// @description Adds 2 buttons to find active and useful forks on Github
// @run-at      document-idle
// @license     PayMe
// ==/UserScript==
(function() {
    'use strict';
    try {
        let ulActions = Array.from(document.querySelectorAll('#repository-details-container > ul > li')).find(el => el.textContent.match( 'Fork')).querySelector('span').parentNode.parentNode;
        if (ulActions !== undefined) {
            let findActiveFork = document.location.pathname.substr(1).split('/');
            findActiveFork = 'https://techgaun.github.io/active-forks/index.html#' + findActiveFork[0] + '/' + findActiveFork[1];
            let findUsefulFork = document.location.pathname.substr(1).split('/');
            findUsefulFork = 'https://useful-forks.github.io/?repo=' + findUsefulFork[0] + '/' + findUsefulFork[1];
            let forkFinder=Array.from(document.querySelectorAll('#repository-details-container > ul > li')).find(el => el.textContent.match( 'Fork')).querySelector('span').parentNode;
            forkFinder.classList.add("btn-with-count");
            ulActions.innerHTML = ulActions.innerHTML + `
            <li class="BtnGroup-parent flex-auto">
                <div class="js-toggler-container js-social-container starring-container on BtnGroup d-flex">
                    <a href="${findActiveFork}" target="_blank">
                        <button class="btn btn-sm border-right-0" style="border-radius:0" id="findActiveForks">
                            <svg class="octicon octicon-repo-forked v-align-text-bottom" viewBox="0 0 10 15.067" version="1.1" height="1em" aria-hidden="true">
                                <path d="M8.179 1.242a1.771 1.771 0 0 0-1.822 1.794v.014a1.737 1.737 0 0 0 .955 1.589c.144 1.989-.883 2.461-3.1 3.282-.49.182-.99.368-1.49.588V3.378a1.741 1.741 0 0 0 .918-1.569v-.015A1.77 1.77 0 0 0 3.058.455 1.878 1.878 0 0 0 1.822 0 1.77 1.77 0 0 0 0 1.794v.015a1.736 1.736 0 0 0 .919 1.569v7.079a5.2 5.2 0 0 0 0 .848v.384A1.74 1.74 0 0 0 0 13.259v.014a1.77 1.77 0 0 0 1.821 1.794 1.77 1.77 0 0 0 1.821-1.794v-.014a1.766 1.766 0 0 0-.585-1.339 1.7 1.7 0 0 0-.321-.224c0-.148 0-.3-.012-.443v-.7a.3.3 0 0 1 .01-.038 16.5 16.5 0 0 1 2.108-.9c2.1-.779 4.468-1.658 4.276-5.016A1.741 1.741 0 0 0 10 3.05v-.014a1.771 1.771 0 0 0-1.821-1.794zM.834 1.8a.94.94 0 0 1 .988-.966.94.94 0 0 1 .987.967.94.94 0 0 1-.987.968.941.941 0 0 1-.988-.969zm1.975 11.466a.939.939 0 0 1-.987.967.968.968 0 1 1 0-1.935.941.941 0 0 1 .987.968zM8.178 4.01a.94.94 0 0 1-.987-.967.941.941 0 0 1 .987-.968.941.941 0 0 1 .988.968.94.94 0 0 1-.988.967z"/>
                            </svg>
                            &nbsp; Active Forks
                        </button>
                    </a>
                    <a href="${findUsefulFork}" target="_blank">
                        <button class="btn-sm btn BtnGroup-item px-2 float-none" id="findUsefulForks">
                            <svg class="octicon octicon-repo-forked v-align-text-bottom" viewBox="0 0 10 8.5" version="1.1" height="1em" aria-hidden="true">
                                <path d="M8.855 6.223a1.144 1.144 0 0 0-1.117.886A3.189 3.189 0 0 1 7 6.833a.837.837 0 0 1-.2-.147.763.763 0 0 1-.1-.129l-.032-.058a1.659 1.659 0 0 1-.119-.291c-.043-.147-.076-.311-.108-.47l-.016-.08a3.56 3.56 0 0 0-.089-.356 1.772 1.772 0 0 0-.147-.344 1.14 1.14 0 0 0-.118-.179 1.457 1.457 0 0 0-.513-.4 1.45 1.45 0 0 0 .507-.411 1.14 1.14 0 0 0 .118-.178 1.772 1.772 0 0 0 .147-.342 3.56 3.56 0 0 0 .089-.356l.016-.08c.032-.159.065-.323.108-.47a1.669 1.669 0 0 1 .119-.292l.032-.057a.763.763 0 0 1 .1-.129A.811.811 0 0 1 7 1.917a3.154 3.154 0 0 1 .748-.277A1.145 1.145 0 1 0 8.855.226a1.144 1.144 0 0 0-1.136.987 3.681 3.681 0 0 0-.929.335 1.257 1.257 0 0 0-.3.225 1.219 1.219 0 0 0-.157.2l-.043.077a2.023 2.023 0 0 0-.15.369 5.497 5.497 0 0 0-.117.508L6 3.009a3.336 3.336 0 0 1-.079.317 1.3 1.3 0 0 1-.113.262.585.585 0 0 1-.038.063.642.642 0 0 1-.042.06 1.219 1.219 0 0 1-.73.4l-.147.017h-2.4a1.138 1.138 0 1 0-.012.492h2.423L5 4.637a1.225 1.225 0 0 1 .73.4.59.59 0 0 1 .043.059.879.879 0 0 1 .038.063 1.329 1.329 0 0 1 .113.263c.03.1.057.206.079.316l.016.079c.033.169.068.343.117.507a1.967 1.967 0 0 0 .15.369l.043.077a1.187 1.187 0 0 0 .157.205 1.277 1.277 0 0 0 .3.225 3.709 3.709 0 0 0 .933.336 1.145 1.145 0 1 0 1.136-1.313zm0-5.576a.717.717 0 1 1-.722.717.72.72 0 0 1 .722-.717zM1.334 5.068a.717.717 0 1 1 .721-.717.72.72 0 0 1-.721.717zm7.521 3.011a.718.718 0 1 1 .721-.718.721.721 0 0 1-.721.718z" fill="#272727" />
                                <path d="M8.666 5.997a1.146 1.146 0 0 0-1.117.886 3.222 3.222 0 0 1-.743-.276.85.85 0 0 1-.2-.147.714.714 0 0 1-.1-.129c-.012-.019-.022-.038-.032-.057a1.555 1.555 0 0 1-.119-.292c-.044-.147-.076-.311-.108-.47l-.016-.08a3.856 3.856 0 0 0-.089-.356A1.772 1.772 0 0 0 6 4.732a1.37 1.37 0 0 0-.118-.178 1.452 1.452 0 0 0-.514-.405 1.452 1.452 0 0 0 .514-.405c.023-.029.045-.059.065-.09s.032-.059.053-.086a1.772 1.772 0 0 0 .147-.344c.034-.112.064-.232.089-.356l.016-.079c.032-.159.064-.324.108-.471a1.519 1.519 0 0 1 .119-.291.655.655 0 0 1 .027-.059.714.714 0 0 1 .1-.129.85.85 0 0 1 .2-.147 3.2 3.2 0 0 1 .749-.277A1.145 1.145 0 1 0 8.666 0a1.144 1.144 0 0 0-1.135.987 3.628 3.628 0 0 0-.929.335 1.257 1.257 0 0 0-.3.225 1.219 1.219 0 0 0-.157.2l-.043.077a1.955 1.955 0 0 0-.15.369c-.049.165-.084.34-.117.508l-.016.079c-.023.11-.049.217-.079.317a1.374 1.374 0 0 1-.113.261.585.585 0 0 1-.038.063.651.651 0 0 1-.043.06 1.217 1.217 0 0 1-.73.4l-.148.017H2.27a1.139 1.139 0 1 0-.012.492h2.408l.146.017a1.224 1.224 0 0 1 .73.4c.016.019.03.04.043.059s.027.043.038.063a1.39 1.39 0 0 1 .113.263c.03.1.056.206.079.317l.016.078c.033.169.068.343.117.508a1.955 1.955 0 0 0 .152.373l.043.076a1.187 1.187 0 0 0 .157.205 1.257 1.257 0 0 0 .3.225 3.7 3.7 0 0 0 .932.336 1.145 1.145 0 1 0 1.134-1.313zm0-5.576a.717.717 0 1 1-.721.717.72.72 0 0 1 .721-.717zM1.145 4.839a.717.717 0 1 1 .722-.717.72.72 0 0 1-.722.717zm7.521 3.014a.718.718 0 1 1 .721-.718.72.72 0 0 1-.721.718z" />
                            </svg>
                            &nbsp; Useful Forks
                        </button>
                    </a>
                </div>
            </li>`;
        }
    } catch (e) {
        console.log(e);
    }
})();
