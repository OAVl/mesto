import Popup from "./Popup.js";
import {imgPopup, titlePopup} from "../utils/constants.js";

export default class PopupWithImage extends Popup {
    constructor(name, link, selectorPopup) {
        super(selectorPopup);
        this._name = name;
        this._link = link;
    }

    open() {
        imgPopup.src = this._link;
        imgPopup.alt = this._name;
        titlePopup.textContent = this._name;
        super.open();
    }
}