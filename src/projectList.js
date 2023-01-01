import earworm from "./images/ear.png"
import chess from "./images/bbchess.png"
import flix from "./images/flixter.png"
import cpp from "./images/c++.svg"
import ract from "./images/react.svg"
import sw from "./images/swift.svg"
import typer from "./images/type.png"

const projectList = [
  {
    title: 'Earworm',
    img: earworm,
    description: 'Compiles the Billboard 200 Year End charts ' +
        'from 1970-2020 with genre analysis.',
    lang: ract,
    link: 'https://earwrm.io'
  }, {
    title: 'Flixter',
    img: flix,
    description: 'Displays the currently playing movies across the country. Uses the MovieDB API.',
        lang: sw,
        link: 'https://github.com/emirahajj/flixter'
  }
  , {
    title: 'Bb Chess',
    img: chess,
    description: 'A simplified commandline chess game written in C++.',
        lang: cpp,
        link: 'https://github.com/emirahajj/bb_chess'

  }   , {
    title: 'butterfingers',
    img: typer,
    description: "No frills type test that measures WPM and accuracy. Built with ReactJS",
        lang: ract,
        link: 'https://github.com/emirahajj/butterfingers'

  }
]
export default projectList;