import earworm from "./images/ear.png"
import chess from "./images/bbchess.png"
import flix from "./images/flixter.png"
import cpp from "./images/c++.svg"
import ract from "./images/react.svg"
import arhub from "./images/arhub.svg"
import sw from "./images/swift.svg"
import typer from "./images/type.png"

const projects = [
  {
    title: 'Earworm',
    img: earworm,
    description: 'Earworm compiles the Billboard 200 Year End charts ' +
        'from 1970-2020 with genre analysis.',
    lang: ract,
    link: '#'
  }, {
    title: 'Flixter',
    img: flix,
    description: 'An iOS app utilizing the MoviesDB API to show users the currently playing movies' +
        ' across the country.',
        lang: sw,
        link: 'https://github.com/emirahajj/flixter'

  }
  , {
    title: 'Bb Chess',
    img: chess,
    description: 'A small command line chess game written in C++. First player to reach other end of the board' +
        ' wins.',
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
export default projects;