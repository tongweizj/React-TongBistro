import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import { ErrorMessage } from "formik";
function BookSlot(props) {
  const listItems = props.availableTimes.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
  return (
    <>
      <FormControl>
        <FormLabel htmlFor="res-time">Choose time</FormLabel>
        <Select id="res-time"  name="time" placeholder="Select option">
          {listItems}
        </Select>
        {/* <ErrorMessage name="res-time" /> */}
      </FormControl>
    </>
  );
}
export default BookSlot;
