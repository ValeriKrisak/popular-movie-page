import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCountries,
  fetchLanguages,
  fetchProviders,
} from "../../../actions/uiAction";
import Select from "../Select/Select";

export default function LazySelect({ type, title }) {
  const dispatch = useDispatch();
  const collection = useSelector((state) => state.ui[type]);

  useEffect(() => {
    switch (type) {
      case "countries":
        dispatch(fetchCountries());
        break;
      case "languages":
        dispatch(fetchLanguages());
        break;
      case "providers":
        dispatch(fetchProviders());
        break;
      default:
        break;
    }
  }, [dispatch, type]);

  return <Select title={title} collection={collection} />;
}
