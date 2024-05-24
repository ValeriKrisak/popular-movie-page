import Checkbox from "../UI/Checkbox/Checkbox";
import FilterPanel from "../UI/FilterPanel/FilterPanel";
import Select from "../UI/Select/Select";
import "./Sidebar.css";
import {
  SORT_COLLECTION,
  SHOW_ME_OPTIONS,
  SLIDER_ONE,
  SLIDER_THREE,
  SLIDER_TWO,
} from "../../constants/constants";
import Datepicker from "../UI/Datepicker/Datepicker";
import GenreItem from "../UI/GenreItem/GenreItem";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData, fetchGenres } from "../../actions/dataActions";
import { setFilter } from "../../store/dataSlice";
import Slider from "../Slider/Slider";

export default function Sidebar() {
  const dispatch = useDispatch();
  const { genres } = useSelector((state) => state.data);
  const [selectedIds, setSelectedIds] = useState([]);

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  function handleItemClick(id) {
    setSelectedIds((prevSelectedIds) =>
      prevSelectedIds.includes(id)
        ? prevSelectedIds.filter((itemId) => itemId !== id)
        : [...prevSelectedIds, id]
    );
  }

  function handleFilterChange() {
    dispatch(setFilter(selectedIds.join(",")));
    dispatch(fetchData(1, selectedIds));
  }

  return (
    <>
      <FilterPanel title="Sort">
        <div className="filter-section">
          <Select title="Sort Results by" collection={SORT_COLLECTION} />
        </div>
      </FilterPanel>
      <FilterPanel title="Where To Watch">
        <div className="filter-section">
          <Checkbox
            title="My Services"
            label="Restrict searches to my subscribed services?"
          />
        </div>
        <div className="filter-section">
          <Select title="County" collection={SORT_COLLECTION} />
        </div>
      </FilterPanel>
      <FilterPanel title="Filters">
        <div className="radio-options filter-section">
          <h3 className="h3-title">Show Me</h3>
          {SHOW_ME_OPTIONS.map((item) => {
            return (
              <div className="input-radio">
                <input
                  type="radio"
                  value={item.value}
                  name="radiofilter"
                  className="radio-input"
                />
                <label key={item.id} className="radio-filter">
                  {item.value}
                </label>
              </div>
            );
          })}
        </div>
        <div className="filter-section">
          <Checkbox title="Availabilities" label="Search all availabilities?" />
        </div>
        <div className="release-filter filter-section">
          <Checkbox title="Release Dates" label="Search all releases?" />
          <Datepicker label="from" />
          <Datepicker label="to" />
        </div>
        <div className="filter-section">
          <h3 className="h3-title">Genres</h3>
          {genres.map((item) => {
            return (
              <GenreItem
                title={item.name}
                id={item.id}
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                isSelected={selectedIds.includes(item.id)}
              />
            );
          })}
        </div>
        <div className="certification-filter filter-section">
          <h3 className="h3-title">Certification</h3>
        </div>
        <div className="filter-section">
          <Select title="Language" collection={SORT_COLLECTION} />
        </div>
        <div className="filter-section">
          <h3 className="h3-title">User Score</h3>
          <Slider marks={SLIDER_ONE} min={0} max={10} value={5} />
        </div>
        <div className="filter-section">
          <h3 className="h3-title">Minimum User Votes</h3>
          <Slider marks={SLIDER_TWO} min={0} max={500} value={0} />
        </div>
        <div className="filter-section">
          <h3 className="h3-title">Runtime</h3>
          <Slider marks={SLIDER_THREE} min={0} max={360} value={360} />
        </div>
        <div className="input-filter filter-section">
          <h3 className="h3-title">Keywords</h3>
          <input placeholder="Filter by keywords..." />
        </div>
      </FilterPanel>
      <button className="search-button" onClick={handleFilterChange}>
        <h2> Search</h2>
      </button>
    </>
  );
}
