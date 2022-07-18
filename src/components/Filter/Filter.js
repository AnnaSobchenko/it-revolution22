import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filter/action";
import { getFilter } from "../../redux/filter/selector";
import { getFilterValue, getUserContacts } from "../../redux/user/userSelector";
import { onFilterValueChange } from "../../redux/user/userSlice";
import s from "./Filter.module.scss";
const Filter = () => {
  //   const value = useSelector(getFilter);

  const userContacts = useSelector(getUserContacts);

  const dispatch = useDispatch();
  const filterValue = useSelector(getFilterValue);

  const [filter, setFilter] = useState("");

  // const onContactIncludes = (value) => {

  //   const isIncludes = contacts.some((el) => el.name === value);
  //   if (isIncludes) {
  //     return Report.failure(
  //       "Very sorry 😞",
  //       `${form.name}, already in the contact list`,
  //       "Okay"
  //     );
  //   }
  //   dispatch(addUserContacts(form));

  //   isAdded && Notify.success("New contact successfully added 🙂");
  // };

  const filterContactsSelectors = (filter) => {
    // const { filter, contacts } = state;
    const normalizedFilter = filter.toLocaleLowerCase();
    const findEl =
      userContacts.length === 0
        ? []
        : userContacts.filter((contact) =>
            contact.name.toLocaleLowerCase().includes(normalizedFilter)
          );

    dispatch(onFilterValueChange(findEl));
    // return findEl;
  };

  useEffect(() => {
    filterContactsSelectors(filter);
  }, [filter]);
  return (
    <div className={s.wrapper}>
      <p> Find contacts by name</p>
      <input
        type="text"
        className={s.input}
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
};

export default Filter;
