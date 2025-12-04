import { define, Auth, Switch, Store, History } from "@calpoly/mustang";
import { HeaderElement } from "./components/header.js";
import { html } from "lit";
import { Msg } from "./messages";
import { Model, init } from "./model";
import update from "./update";
import "./views/team-view";
import { HomeViewElement } from "./views/home-view";

const routes = [

  {
    path: "/app",
    view: () => html`
      <home-view></home-view>
    `
  },
  {
    path: "/",
    redirect: "/app"
  },
  {
    path: "/app/data/:name",
    view: (params : Switch.Params) => html`
    <team-view team-name=${params.name}></team-view>
    `
  }
];

    define({
        "header-element": HeaderElement,
        "mu-auth": Auth.Provider,
        "mu-history": History.Provider,
        "mu-switch": class AppSwitch extends Switch.Element {
            constructor() {
                super(routes, "football:history", "football:auth");
            }
        },
        "mu-store": class AppStore
        extends Store.Provider<Model, Msg>
        {
          constructor() {
            super(update, init, "football:auth");
          }
        },
        "home-view" : HomeViewElement
    });
    
    HeaderElement.initializeOnce();

    async function getData() {
    const url = "rapidapi.com"
    fetch(url)
    .then((response) => {
        return response.json();
    })
    .then(data => {

    })
    }

    console.log(getData());