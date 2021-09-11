import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateFavourites, selectFav } from "@/store/favDataSlice";

const AddFav = ({ maqamid }) => {
  const favourites = useSelector(selectFav);
  const [fav, setFav] = useState(false);
  const dispatch = useDispatch();
  console.log(fav);
  useEffect(() => {
    if (maqamid in favourites) {
      setFav(favourites[maqamid]);
    }
  }, []);

  const markFav = (favState) => {
    console.log(fav);
    dispatch(updateFavourites({ id: maqamid, status: favState }));
    setFav(favState);
  };

  return (
    <div>
      {fav === false ? (
        <a href="#" onClick={() => markFav(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            class="bi bi-heart"
            viewBox="0 0 24 24"
            className="text-gray-500 hover:text-black stroke-current hover:stroke-1 stroke-0"
          >
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
          </svg>
        </a>
      ) : (
        <a
          href="#"
          onClick={() => markFav(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            width="24"
            height="24"
            class="bi bi-heart-fill"
            viewBox="0 0 24 24"
            className="hover:text-black"
          >
            <path
              fill-rule="evenodd"
              d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
            />
          </svg>
        </a>
      )}
    </div>
  );
};

export default AddFav;
