import "./style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserLock } from '@fortawesome/free-solid-svg-icons'


export default function Home() {
  return (
    <div id="kontener">
      <header>
        <div id="head1"></div>
        <div><a href="/admin/#"><FontAwesomeIcon icon={faUserLock} id="ikonkaLogowania"/></a></div>
      </header>
      <main>
        <p id="nadKodem">Wklej kod aktywacyjny</p>
        <div id="kod">
          <input type="text" placeholder="XXXX-XXXX" id="wpisywanyKod" maxLength={8}/>
        </div>

      </main>
    </div>
  );
}
