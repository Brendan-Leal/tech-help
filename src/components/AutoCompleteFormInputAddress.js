import useGoogle from "react-google-autocomplete/lib/usePlacesAutocompleteService";
import { useEffect, useState, useRef } from "react";

export default function AutoCompleteFormInputAddress({
  address,
  setAddress,
  messageRef,
}) {
  const [showAddressPredictions, setShowAddressPredictions] = useState(false);
  const [focusedItem, setFocusedItem] = useState(null);
  const addressInputRef = useRef(null);
  const listRef = useRef(null);

  // Initialize Google Places Autocomplete Service
  const { placePredictions, getPlacePredictions, isPlacePredictionsLoading } =
    useGoogle({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY,
    });

  // b/c the listRef and focusItem default state have nullish values we need to only pull focus if there are child elements in the list (placePredictions is not an empty array) and the user has "ArrowedDown/Up"
  useEffect(() => {
    if (listRef.current && focusedItem !== null) {
      listRef.current.children[focusedItem].focus();
    }
  }, [focusedItem]);

  // When google sends me new predictions, placePredictions is automatically updated so I revert to the default state
  useEffect(() => {
    setFocusedItem(null);
  }, [placePredictions]);

  const handleAddressSelect = (e) => {
    setAddress(e.target.innerHTML);
    setShowAddressPredictions(false);
    messageRef.current.focus();
  };

  // Show predictions list if there is user input or hided it if there is no input
  const handleChange = async (e) => {
    let input = e.target.value;
    if (input.length <= 0) {
      setShowAddressPredictions(false);
      setAddress(input);
    } else {
      setShowAddressPredictions(true);
      setAddress(input);
    }
    getPlacePredictions({ input });
  };

  const handleKeyDown = (e) => {
    const key = e.key;

    if (listRef.current && listRef.current.children) {
      if (key === "ArrowDown") {
        e.preventDefault();
        setFocusedItem((prev) =>
          prev === null
            ? 0
            : Math.min(prev + 1, listRef.current.children.length - 1)
        );
      } else if (key === "ArrowUp") {
        e.preventDefault();
        setFocusedItem((prev) =>
          prev > 0 ? prev - 1 : listRef.current.children.length - 1
        );
      } else if (key === "Escape") {
        addressInputRef.current.blur();
        setShowAddressPredictions(false);
      } else if (key === "Enter") {
        e.preventDefault();
        setAddress(listRef.current.children[focusedItem].innerHTML);
        setShowAddressPredictions(false);
      }
    }
  };

  return (
    <div className="relative col-span-2 block">
      <label htmlFor="address">Address:</label>
      <input
        id="address"
        className={`w-full px-1 h-10 ${
          placePredictions.length > 1 && showAddressPredictions
            ? "rounded-t-md"
            : "rounded-md "
        }`}
        type="text"
        name="address"
        onChange={handleChange}
        value={address}
        autoComplete="off"
        onKeyDown={handleKeyDown}
        ref={addressInputRef}
      />

      {placePredictions && showAddressPredictions && (
        <div className="absolute w-full">
          <ul className="w-full bg-white  shadow-lg" ref={listRef}>
            {placePredictions.map((place) => {
              return (
                <li
                  key={place["place_id"]}
                  tabIndex="0"
                  className="bg-white px-2 py-2 hover:bg-slate-300 last:rounded-b-md  cursor-pointer border-gray-400 border-solid border-t-[1px] border-x-[1px] last:border-b-[1px]"
                  onClick={handleAddressSelect}
                  onKeyDown={handleKeyDown}
                >
                  {place.description}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
