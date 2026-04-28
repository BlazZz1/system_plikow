import "./style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserLock } from '@fortawesome/free-solid-svg-icons'


export default function Home() {
  return (
    <div>
      <header>
        <a href="#"><FontAwesomeIcon icon={faUserLock} id="ikonkaLogowania"/></a>
      </header>
      <main>
        <p id="nadKodem">Wklej kod aktywacyjny</p>
        <div id="kod">
          <input type="text" placeholder="XXXX-XXXX-XXXX" id="wpisywanyKod" maxLength={12}/>
        </div>

      </main>
    </div>
  );
}
