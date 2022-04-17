import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { fetchCharacters } from "../../redux/charactersSlice"
import Masonry from 'react-masonry-css'
import "./styles.css"
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import { Link } from 'react-router-dom';

function Home() {

  const characters = useSelector(state => state.characters.items)
  const status = useSelector(state => state.characters.status)
  const page = useSelector(state => state.characters.page)
  const hasNextPage = useSelector(state => state.characters.hasNextPage)
  const error = useSelector(state => state.characters.error)
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCharacters())
    }

  }, [dispatch, status])


  if (status === "failed") {
    return <Error message={error} />
  }

  return (
    <div>
      <Masonry
        breakpointCols={4}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        {
          characters.map((character) => (
            <div key={character.char_id}>
              <Link to={`/char/${character.char_id}`}>
                <img src={character.img} alt={character.name} className="character" />
                <span className='char_name'>{character.name}</span>
              </Link>

            </div>

          ))
        }
      </Masonry>
      {
        status === "loading" && <Loading />
      }

      {
        hasNextPage && status !== "loading" && (<button onClick={() => dispatch(fetchCharacters(page))}>load more</button>)
      }


    </div>
  )
}

export default Home