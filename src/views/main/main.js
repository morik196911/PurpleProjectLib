import { AbstractView } from "../../common/view.js";
import onChange from "on-change"

export class MainView extends AbstractView {
    state = {
        list: [],
        loading: false,
        searchQuery: undefined,
        offset: 0
    }
    constructor(appState){
        super()
        this.setTitle("Поиск книг");
        this.appState = appState;
        this.appState = onChange(this.appState, this.AppStateHook.bind(this))
    }

    AppStateHook(path) {
        if(path === "favorites") {
            console.log(path)
        }
      console.log(path)
    }

    render() {
        const main = document.createElement("div")
        main.innerHTML = `Число книг ${this.appState.favorites.length}`;
        this.app.innerHTML = "";
        this.app.append(main)
        this.appState.favorites.push("ddd")
    }
}//end class