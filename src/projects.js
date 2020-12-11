import earworm from "./images/earworm.png"
import chess from "./images/bbchess.png"
import flix from "./images/flixter.png"
import cpp from "./images/c++.svg"
import ract from "./images/react.svg"
import arhub from "./images/arhub.svg"
import sw from "./images/swift.svg"

const projects = [
  {
    title: 'Earworm',
    img: earworm,
    description: 'Using Python to scrape the Billboard End of Year 200 Charts, Earworm displays ' +
        'charts from 1970-2020 with genre analysis.',
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
    description: 'A simple command line chess game written in C++. First player to reach other end of the board' +
        ' wins.',
        lang: cpp,
        link: 'https://github.com/emirahajj/bb_chess'

  }   , {
    title: 'AR Filters',
    img: chess,
    description: "Some AR filters I designed for Instagram using Spark AR Studio. Photos coming soon.",
        lang: arhub,
        link: '#'

  }
]
export default projects;