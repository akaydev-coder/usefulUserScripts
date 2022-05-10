// ==UserScript==
// @name        githubForkz
// @namespace   https://github.com/deltabravozulu/usefulUserScripts
// @match       *://github.com/*/*
// @updateURL   https://github.com/deltabravozulu/usefulUserScripts/raw/main/githubForkz/githubForkz.user.js
// @grant       none
// @version     4.20.69
// @author      DeltaBravoZulu
// @description Adds a button to find active and useful forks on Github
// @description 2022-05-09T22:04:20
// @run-at      document-idle
// @license     PayMe
// ==/UserScript==
(function() {
    'use strict';

    try {
        let ulActions = document.querySelectorAll('#repository-container-header > div.d-flex.mb-3.px-3.px-md-4.px-lg-5:nth-child(1) > ul.pagehead-actions.flex-shrink-0.d-none.d-md-inline:nth-child(2) > li:nth-child(2)')[0];
        if (ulActions !== undefined) {
            let findActiveFork = document.location.pathname.substr(1).split('/');
            findActiveFork = 'https://techgaun.github.io/active-forks/index.html#' + findActiveFork[0] + '/' + findActiveFork[1];
            let findUsefulFork = document.location.pathname.substr(1).split('/');
            findUsefulFork = 'https://useful-forks.github.io/?repo=' + findUsefulFork[0] + '/' + findUsefulFork[1];
            //old:
            //let forkFinder=document.querySelector("#repository-container-header > div.d-flex.mb-3.px-3.px-md-4.px-lg-5 > ul > li > form > button")
            //new one that works whether you are logged in or not:
            let forkFinder=Array.from(document.querySelectorAll('#repository-container-header > div.d-flex.mb-3.px-3.px-md-4.px-lg-5 >ul > li')).find(el => el.textContent.match( 'Fork')).querySelector('span').parentNode
            forkFinder.classList.add("btn-with-count")
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

/* OLD


(function() {
    'use strict';

    try {
        let ulActions = document.querySelectorAll('div.application-main ul.pagehead-actions')[0];
        if (ulActions !== undefined) {
            let findActiveFork = document.location.pathname.substr(1).split('/');
            findActiveFork = 'https://techgaun.github.io/active-forks/index.html#' + findActiveFork[0] + '/' + findActiveFork[1];
            let findUsefulFork = document.location.pathname.substr(1).split('/');
            findUsefulFork = 'https://useful-forks.github.io/?repo=' + findUsefulFork[0] + '/' + findUsefulFork[1];
            ulActions.innerHTML = ulActions.innerHTML + `
            <li class="BtnGroup-parent flex-auto">
                <div class="js-toggler-container js-social-container starring-container on BtnGroup d-flex">
                    <a href="${findActiveFork}" target="_blank">
                        <button class="btn btn-sm btn-with-count rounded-left-2 border-right-0" id="findActiveForks">
                            <svg class="octicon octicon-repo-forked v-align-text-bottom" viewBox="0 0 17.5 16" version="1.1" height="1em" aria-hidden="true">
                                <path d="M6.8 11c0 .9-.4 2.3-1.3 2.3S4.1 11.9 4.1 11s.4-2.3 1.3-2.3 1.4 1.5 1.4 2.3zm10.7-2.1c0 1.3-.1 2.7-.6 4C15.5 16.1 11.7 16 9 16c-2.8 0-6.8.1-8.2-3.1-.6-1.2-.8-2.6-.8-4 0-1.7.5-3.4 1.5-4.7-.2-.7-.3-1.3-.3-2 0-.9.2-1.3.5-2.2 1.7 0 2.7.4 4 1.5 1.1-.3 2.2-.4 3.3-.4 1 0 2 .1 2.9.4C13.1.4 14.2 0 15.8 0c.4.8.5 1.3.5 2.2 0 .7-.1 1.4-.3 2 1.1 1.3 1.5 3 1.5 4.7zM15.2 11c0-1.8-1-3.4-2.7-3.4-.7 0-1.3.1-2 .2-.6.1-1.2.2-1.7.2-.6 0-1.1 0-1.6-.1-.7-.1-1.3-.2-2-.2-1.7 0-2.7 1.6-2.7 3.4 0 3.7 2.9 4.2 5.5 4.2h1.8c2.4-.1 5.4-.6 5.4-4.3zm-3.1-2.3c-.9 0-1.3 1.4-1.3 2.3s.4 2.3 1.3 2.3 1.3-1.4 1.3-2.3-.3-2.3-1.3-2.3z" /></svg>
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


*/
