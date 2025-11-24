import { css, html, LitElement } from "lit";

export class HomeViewElement extends LitElement {

  static styles = css`
    .page {
      display: block;
      padding: 1rem;
    }
   `;

  render() {
    return html`
    
    <header>
        <h1><svg class="icon"> <use href="/icons/football.svg#icon-player"/></svg>
            All Football
        </h1>
        <label id = "dark-label">
            <p>All your football needs</p>
            <input type="checkbox" autocomplete="off"/>
            Dark mode
        </label>
    </header>

    <section class = "Schedule">
        <h2>Games</h2>
        <dl>
            <dt>10/26 10:00pm <a href="Games.html">49ers @ Seahawks</a></dt>
            <dt>11/06 1:05pm <a href="Games.html">49ers @ Rams</a></dt>
            <dt>11/13 5:20pm <a href="Games.html">49ers vs Cardinals</a></dt>
        </dl>
    </section>

    <h2>Teams</h2>
    <h3><img src="teams/logos/NFC_logo.png" alt="N" class="C_logo">FC</h3>
    <div class="Teams">
        <dl>
            <h3>NFC East</h3> 
            <nfl-roster src="data/nfc_east.json"></nfl-roster>  
        </dl>  
        <dl>
            <h3>NFC West</h3>
            <nfl-roster src="data/nfc_west.json"></nfl-roster>
        </dl>
        <dl>
            <h3>NFC North</h3>
            <nfl-roster src="data/nfc_north.json"></nfl-roster> 
        </dl>
        <dl>
            <h3>NFC South</h3>
            <nfl-roster src="data/nfc_south.json"></nfl-roster>
        </dl>
    </div>
    <h3><img src="teams/logos/AFC_logo.png" alt="A" class="C_logo">FC</h3> 
    <div class="Teams">
        <dl>
            <h3>AFC East</h3>
            <nfl-roster src="data/afc_east.json"></nfl-roster>
        </dl>
        <dl>
            <h3>AFC West</h3>
            <nfl-roster src="data/afc_west.json"></nfl-roster>
        </dl>
        <dl>
            <h3>AFC North</h3>
            <nfl-roster src="data/afc_north.json"></nfl-roster>
        </dl>
        <dl>
            <h3>AFC South</h3>
            <nfl-roster src="data/afc_south.json"></nfl-roster>
        </dl>
    </div>

    <section class="Ranking">
        <h2>Ranking</h2>
        <ol>
            <li><a href="49ers.html"><img src="teams/logos/San_Francisco_49ers.png" alt="49ers Logo">49ers</a></li>
            <li>Rams</li>
            <li>Seahawks</li>
            <li>Cardinals</li>
            <li>Eagles</li>
            <li>Commanders</li>
            <li>Cowboys</li>
            <li>Giants</li>
            <li>Lions</li>
            <li>Packers</li>
            <li>Vikings</li>
            <li>Bears</li>
            <li>Buccaneers</li>
            <li>Falcons</li>
            <li>Panthers</li>
            <li>Saints</li>
            <li>Bills</li>
            <li>Patriots</li>
            <li>Dolphins</li>
            <li>Jets</li>
            <li>Chargers</li>
            <li>Chiefs</li>
            <li>Broncos</li>
            <li>Raiders</li>
            <li>Steelers</li>
            <li>Bengals</li>
            <li>Ravens</li>
            <li>Browns</li>
            <li>Colts</li>
            <li>Jaguars</li>
            <li>Texans</li>
            <li>Titans</li>
        </ol>
    </section>

    <h2><a href="Stats.html">Stats</a></h2>
    `;
  }

}

customElements.define("home-view", HomeViewElement);