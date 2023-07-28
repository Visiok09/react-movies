import React, { useState, useEffect } from 'react';
import Movies from '../components/Movies';
import Preloader from '../components/Preloader';
import Search from '../components/Search';

const API_KEY = process.env.REACT_APP_API_KEY;

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const searchMovies = (query, type = 'all') => {
    setLoading(true);
    fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}${
        type !== 'all' ? `&type=${type}` : ''
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data && data.Search) {
          setMovies(data.Search);
        } else {
          setMovies([]);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setMovies([]);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=Matrix`)
      .then((response) => response.json())
      .then((data) => {
        if (data && data.Search) {
          setMovies(data.Search);
        } else {
          setMovies([]);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setMovies([]);
      })
      .finally(() => {
        setLoading(false);
        console.log('component did mount');
      });
  }, []);

  return (
    <div className='container content'>
      {loading ? <Preloader /> : null}
      <Search searchMovies={searchMovies} />
      <Movies movies={movies} />
    </div>
  );
};

export { Main };
// import React, { useState, useEffect } from 'react';
// import Movies from '../components/Movies';
// import Preloader from '../components/Preloader';
// import Search from '../components/Search';
// class Main extends React.Component {
//   state = {
//     movies: [],
//     loading: true,
//   };
//   searchMovies = (query, type = 'all') => {
//     fetch(
//       `http://www.omdbapi.com/?apikey=f0fb74c4&s=${query}${
//         type !== 'all' ? `&type=${type}` : ''
//       }`
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         if (data && data.Search) {
//           this.setState({ movies: data.Search, loading: false });
//         } else {
//           this.setState({ movies: [], loading: false });
//         }
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//         this.setState({ movies: [], loading: false });
//       });
//   };

//   componentDidMount() {
//     fetch('http://www.omdbapi.com/?apikey=f0fb74c4&s=Matrix')
//       .then((response) => response.json())
//       .then((data) => {
//         if (data && data.Search) {
//           this.setState({ movies: data.Search, loading: false });
//         } else {
//           this.setState({ movies: [], loading: false });
//         }
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//         this.setState({ movies: [], loading: false });
//       });
//   }

//   render() {
//     const { movies, loading } = this.state;

//     if (loading) {
//       <Preloader />;
//     }

//     return (
//       <div className='container content'>
//         <Search searchMovies={this.searchMovies} />
//         <Movies movies={movies} />
//       </div>
//     );
//   }
// }

// export { Main };
