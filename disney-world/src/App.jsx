import Header from './components/Header';
import MovieList from './components/MoviesList';
import TopThreeMovies from './components/TopThreeMovies';
import Footer from './components/Footer';

export default function App() {

    /* יצירת המערך */
    const list = [
        "Mulan",
        "Up",
        "Toy Story",
        "Encanto",
        "Pinocchio",
        "Dumbo",
        "The little mermaid",
        "Snow White and the Seven Dwarves",
        "Aladdin",
        "Peter Pan"
    ];

    return (
        <>
            <Header title="Disney World" />
            <MovieList movies={list}/>
            <TopThreeMovies />
            <Footer />
        </>
    )

}

