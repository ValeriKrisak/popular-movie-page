import Card from "../UI/Card/Card";
import { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData, loadMoreData } from "../../actions/dataActions";
import { setScrollEnabled } from "../../store/dataSlice";
import "./CardList.css";
import Error from "../UI/Error/Error";
import Info from "../UI/Info";

export default function CardList() {
  const dispatch = useDispatch();
  const { items, page, filter, scrollEnabled, loadingStatus } = useSelector(
    (state) => state.data
  );

  useEffect(() => {
    dispatch(fetchData(1, filter));
  }, [dispatch, filter]);

  const handleLoadMore = () => {
    dispatch(loadMoreData(page, filter));
    dispatch(setScrollEnabled(true));
  };

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 &&
      scrollEnabled
    ) {
      dispatch(loadMoreData(page, filter));
    }
  }, [dispatch, scrollEnabled, filter, page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [page, filter, handleScroll]);

  console.log(loadingStatus);

  return (
    <>
      {loadingStatus === "error" && (
        <Error
          className="card-list"
          message="Whoops, something went wrong and data are not ready. Please try later."
        />
      )}

      {loadingStatus === "loaded" && (
        <>
          {items.length === 0 ? (
            <Error
              className="card-list"
              message="Whoops! It seems like there are no more movies matching your selected genres. Please try using different genres and searching again. Thank you!"
            />
          ) : (
            <div className="card-list">
              {items.map((item) => (
                <Card
                  key={item.id}
                  title={item.title}
                  date={item.release_date}
                  image={item.poster_path}
                  vote={item.vote_average}
                />
              ))}
            </div>
          )}
          {items.length < 20 ? (
            <Info
              className="card-list"
              message="Sorry, there are no more items available under this filter"
            />
          ) : (
            <button className="more-button" onClick={handleLoadMore}>
              <p>Load More</p>
            </button>
          )}
        </>
      )}
    </>
  );
}
