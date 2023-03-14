import Header from './components/Header';
import MovieList from './components/MoviesList';
import TopThreeMovies from './components/TopThreeMovies';
import Footer from './components/Footer';

export default function App() {

    /* יצירת המערך */
    const list = [
        { name: "Mulan", link: "https://en.wikipedia.org/wiki/Mulan_(1998_film)" },
        { name: "Up", link: "https://en.wikipedia.org/wiki/Up_(2009_film)" },
        { name: "Toy Story", link: "https://en.wikipedia.org/wiki/Toy_Storyencanto" },
        { name: "Encanto", link: "https://en.wikipedia.org/wiki/Encanto" },
        { name: "Pinocchio", link: "https://en.wikipedia.org/wiki/Pinocchio_(1940_film)" },
        { name: "Dumbo", link: "https://en.wikipedia.org/wiki/Dumbo" },
        { name: "The little mermaid", link: "https://en.wikipedia.org/wiki/The_Little_Mermaid_(1989_film)" },
        { name: "Snow White and the Seven Dwarves", link: "https://en.wikipedia.org/wiki/Snow_White_and_the_Seven_Dwarfs_(1937_film)" },
        { name: "Aladdin", link: "https://en.wikipedia.org/wiki/Aladdin_(1992_Disney_film)" },
        { name: "Peter Pan", link: "https://en.wikipedia.org/wiki/Peter_Pan_(1953_film)" }
    ];

    return (
        <>
            <Header title="Disney World" />
            <MovieList movies={list} />
            <TopThreeMovies />
            <Footer />
        </>
    )

}

