import { useDispatch, useSelector } from "react-redux";

import { changePlatform } from "../features/platform/platformSlice";

function PlatformSelector() {

  const dispatch = useDispatch();

  const platform = useSelector(
    state => state.platform.selectedPlatform
  );

  return (
    <>
      <h2>Select Platform</h2>

      <select
        value={platform}
        onChange={(e) =>
          dispatch(changePlatform(e.target.value))
        }
      >
        <option>Twitter</option>
        <option>Facebook</option>
        <option>Instagram</option>
        <option>LinkedIn</option>
      </select>
    </>
  );
}

export default PlatformSelector;