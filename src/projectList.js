import cpp from "./images/c++.svg"
import ract from "./images/react.svg"
import sw from "./images/swift.svg"
import typer from "./images/type.png"

const projectList = [
  {
    title: 'earworm',
    description: 'Compiles the Billboard 200 Year End charts from 1970-2020 with genre analysis.',
    lang: ract,
    link: 'https://earwrm.io'
  }, {
    title: 'myHub',
    description: "Smart mirror dashboard. Displays time, date, and live NYC subway station arrival/departure times.",
        lang: ract,
        link: 'https://github.com/emshano/myHub'

  }, {
    title: 'flixter',
    description: 'Displays the currently playing movies across the country. Uses the MovieDB API.',
        lang: sw,
        link: 'https://github.com/emshano/flixter'
  }
  , {
    title: 'bb chess',
    description: 'A simplified commandline chess game written in C++.',
        lang: cpp,
        link: 'https://github.com/emshano/bb_chess'

  }
]
export default projectList;