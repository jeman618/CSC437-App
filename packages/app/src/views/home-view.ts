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
    <head>
    <meta charset="UTF-8">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link 
    href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&family=Libertinus+Serif+Display&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/styles/tokens.css">
    <link rel="stylesheet" href="/styles/page.css">
    <link rel="stylesheet" href="/styles/reset.css">

    <title>Football</title>
</head>

<body class="page">
    <mu-auth provides="football:auth">
    
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
            <h3>10/26 10:00am <a href="games/49ers-seahawks.html">49ers vs Seahawks</a></h3>
            <h3>11/06 1:05pm <a href="games/49ers-rams.html">49ers vs Rams</a></h3>
            <h3>11/17 5:20pm <a href="games/49ers-cardinals.html">49ers vs Cardinals</a></h3>
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
            <li><a href="teams/49ers.html"><img src="teams/logos/San_Francisco_49ers.png" alt="49ers Logo"></a></li>
            <li><a href="teams/rams.html"><img src="teams/logos/Los_Angeles_Rams.png" alt="Rams Logo"></a></li>
            <li><a href="teams/seahawks.html"><img src="teams/logos/Seattle_Seahawks.png" alt="Seahawks Logo"></a></li>
            <li><a href="teams/cardinals.html"><img src="teams/logos/Arizona_Cardinals.png" alt="Cardinals Logo"></a></li>
            <li><a href="teams/eagles.html"><img src="teams/logos/Philadelphia_Eagles.png" alt="Eagles Logo"></a></li>
            <li><a href="teams/commanders.html"><img src="teams/logos/Washington_Commanders.png" alt="Commanders Logo"></a></li>
            <li><a href="teams/cowboys.html"><img src="teams/logos/Dallas_Cowboys.png" alt="Cowboys Logo"></a></li>
            <li><a href="teams/giants.html"><img src="teams/logos/New_York_Giants.png" alt="Giants Logo"></a></li>
            <li><a href="teams/lions.html"><img src="teams/logos/Detroit_Lions.png" alt="Lions Logo"></a></li>
            <li><a href="teams/packers.html"><img src="teams/logos/Green_Bay_Packers.png" alt="Packers Logo"></a></li>
            <li><a href="teams/vikings.html"><img src="teams/logos/Minnesota_Vikings.png" alt="Vikings Logo"></a></li>
            <li><a href="teams/bears.html"><img src="teams/logos/Chicago_Bears.png" alt="Bears Logo"></a></li>
            <li><a href="teams/buccaneers.html"><img src="teams/logos/Tampa_Bay_Buccaneers.png" alt="Buccaneers Logo"></a></li>
            <li><a href="teams/falcons.html"><img src="teams/logos/Atlanta_Falcons.png" alt="Falcons Logo"></a></li>
            <li><a href="teams/panthers.html"><img src="teams/logos/Carolina_Panthers.png" alt="Panthers Logo"></a></li>
            <li><a href="teams/saints.html"><img src="teams/logos/New_Orleans_Saints.png" alt="Saints Logo"></a></li>
            <li><a href="teams/bills.html"><img src="teams/logos/Buffalo_Bills.png" alt="Bills Logo"></a></li>
            <li><a href="teams/patriots.html"><img src="teams/logos/New_England_Patriots.png" alt="Patriots Logo"></a></li>
            <li><a href="teams/dolphins.html"><img src="teams/logos/Miami_Dolphins.png" alt="Dolphins Logo"></a></li>
            <li><a href="teams/jets.html"><img src="teams/logos/New_York_Jets.png" alt="Jets Logo"></a></li>
            <li><a href="teams/chargers.html"><img src="teams/logos/Los_Angeles_Chargers.png" alt="Chargers Logo"></a></li>
            <li><a href="teams/chiefs.html"><img src="teams/logos/Kansas_City_Chiefs.png" alt="Chiefs Logo"></a></li>
            <li><a href="teams/broncos.html"><img src="teams/logos/Denver_Broncos.png" alt="Broncos Logo"></a></li>
            <li><a href="teams/raiders.html"><img src="teams/logos/Las_Vegas_Raiders.png" alt="Raiders Logo"></a></li>
            <li><a href="teams/steelers.html"><img src="teams/logos/Pittsburgh_Steelers.png" alt="Steelers Logo"></a></li>
            <li><a href="teams/bengals.html"><img src="teams/logos/Cincinnati_Bengals.png" alt="Bengals Logo"></a></li>
            <li><a href="teams/ravens.html"><img src="teams/logos/Baltimore_Ravens.png" alt="Ravens Logo"></a></li>
            <li><a href="teams/browns.html"><img src="teams/logos/Cleveland_Browns.png" alt="Browns Logo"></a></li>
            <li><a href="teams/colts.html"><img src="teams/logos/Indianapolis_Colts.png" alt="Colts Logo"></a></li>
            <li><a href="teams/jaguars.html"><img src="teams/logos/Jacksonville_Jaguars.png" alt="Jaguars Logo"></a></li>
            <li><a href="teams/texans.html"><img src="teams/logos/Houston_Texans.png" alt="Texans Logo"></a></li>
            <li><a href="teams/titans.html"><img src="teams/logos/Tennessee_Titans.png" alt="Titans Logo"></a></li>
        </ol>
    </section>

    </mu-auth>

    <script type="importmap">
        {
            "imports": {
                "@calpoly/mustang":
                "https://unpkg.com/@calpoly/mustang"
            }
        }
    </script>

    <script type="module" src="/src/<component>.ts"></script>
    <script type="module" src="/components/elements.js"></script>
    <script type="module">
        import "/src/nfl-team.ts";
        import "/src/nfl-roster.ts";
    </script>

    <script type="module">
      import { define, Auth } from "@calpoly/mustang";
      import { TestElement } from "/src/<component>.js";
      import { HeaderElement } from "/src/scripts/header.js";

      define({
          "header-element": HeaderElement,
          "mu-auth": Auth.Provider});
    
      HeaderElement.initializeOnce();

      async function getData() {
        const url = "rapidapi.com"
        fetch(url)
        .then((response) => {
            return response.json();
        })
        .then(data => {})
        
      }
      console.log(getData());

      define({
        "test-element": TestElement
      });
    </script>
</body>

    `;
  }

}

customElements.define("home-view", HomeViewElement);