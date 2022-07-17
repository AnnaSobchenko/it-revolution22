import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filter/action";
import { getFilter } from "../../redux/filter/selector";
import s from "./Filter.module.scss";
const Filter = () => {
  //   const dispatch = useDispatch();
  //   const value = useSelector(getFilter);
  return (
    <div className={s.wrapper}>
      <p> Find contacts by name</p>
      <input
        type="text"
        className={s.input}
        //   value={value}
        //   onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
};

export default Filter;
