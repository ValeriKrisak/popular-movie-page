import Card from "../UI/Card/Card";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData, loadMoreData } from "../../actions/dataActions";
import "./CardList.css";
import Error from "../UI/Error/Error";

export default function CardList() {
  const dispatch = useDispatch();
  const { items, page, filter } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchData(page, filter));
  }, [dispatch, page, filter]);

  const handleLoadMore = () => {
    dispatch(loadMoreData(page, filter));
  };

  return (
    <>
      {items.length === 0 ? (
        <Error message=" Whoops! It seems like there are no more movies matching your selected genres. Please try using different genres and searching again. Thank you!" />
      ) : (
        <div className="card-list">
          {items.map((item) => {
            return (
              <Card
                key={item.id}
                title={item.title}
                date={item.release_date}
                image={item.poster_path}
                vote={item.vote_average}
              />
            );
          })}
        </div>
      )}

      <button className="more-button" onClick={handleLoadMore}>
        <h2>Load More </h2>
      </button>
    </>
  );
}
