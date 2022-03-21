import Store from './store.js'
import Contact from './contact.js'
import About from './about.js'
import FrontPage from './sections/frontpage.js'
import Simulation from './simulation.js'
import Filter from './filter.js'

const Pages = {
    "frontpage": {
        "name": "frontpage",
        "text": "Home",
        "page": (data) => (<FrontPage {...data} />),
        "display": true,
    },
    "simulation": {
        "name": "simulation",
        "text": "Examples",
        "page": (data) => (<Simulation {...data} />),
        "display": true,
    },
    "filter": {
        "name": "filter",
        "text": "Filters",
        "page": (data) => (<Filter {...data} />),
        "display": true,
    },
    "store": {
        "name": "store",
        "text": "Projects",
        "page": (data) => (<Store {...data} />),
        "display": true,
    },
    "contact": {
        "name": "contact",
        "text": "Contact",
        "page": (data) => (<Contact {...data} />),
        "display": false,
    },
    "about": {
        "name": "about",
        "text": "About",
        "page": (data) => (<About {...data} />),
        "display": false,
    }
}

export default Pages