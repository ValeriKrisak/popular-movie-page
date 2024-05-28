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
import Slider from "../UI/Slider/Slider";
import { fetchProviders } from "../../actions/uiAction";

export default function Sidebar() {
  const dispatch = useDispatch();
  const { genres } = useSelector((state) => state.data);
  const { providers } = useSelector((state) => state.ui);
  const [selectedIds, setSelectedIds] = useState([]);
  const [isDisabledButton, setIsDisabledButton] = useState(true);

  useEffect(() => {
    dispatch(fetchGenres());
    dispatch(fetchProviders());
  }, [dispatch]);

  function handleItemClick(id) {
    setSelectedIds((prevSelectedIds) =>
      prevSelectedIds.includes(id)
        ? prevSelectedIds.filter((itemId) => itemId !== id)
        : [...prevSelectedIds, id]
    );
    setIsDisabledButton(false);
  }

  function handleFilterChange() {
    dispatch(setFilter(selectedIds.join(",")));
    dispatch(fetchData(1, selectedIds.join(",")));
  }

  return (
    <>
      <FilterPanel title="Sort">
        <div className="filter-section full-width">
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
          <Select title="Country" collection={SORT_COLLECTION} />

          <div className="provider-wrapper">
            <span className="provider-list">
              {providers
                .filter((item) => [1, 3, 4, 5].includes(item.display_priority))
                .map((filteredItem) => (
                  <li key={filteredItem.provider_id} className="providers-item">
                    <img
                      src={`https://media.themoviedb.org/t/p/original/${filteredItem.logo_path}`}
                      alt={filteredItem.provider_name}
                    />
                  </li>
                ))}
            </span>
          </div>
        </div>
      </FilterPanel>
      <FilterPanel title="Filters">
        <div className="radio-options filter-section">
          <h3 className="h3-title">Show Me</h3>
          {SHOW_ME_OPTIONS.map((item) => {
            return (
              <div className="input-radio" key={item.id}>
                <input
                  type="radio"
                  value={item.value}
                  name="radiofilter"
                  className="radio-input"
                />
                <label className="radio-filter">{item.value}</label>
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
      <div>
        <button
          id="searchButton"
          className={`search-button filter-apply ${
            isDisabledButton ? "disabled" : "enabled"
          }`}
          onClick={handleFilterChange}
          disabled={isDisabledButton}
        >
          Search
        </button>
      </div>
    </>
  );
}
