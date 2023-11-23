import { useState } from "react";
import { Formik, Field, Form } from "formik";
import {
  Box,
  Heading,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  FormErrorMessage,
} from "@chakra-ui/react";
import { object, string, number } from "yup";

function BookingForm(props) {
  const [mbNum, setMbNum] = useState(3);
  const ReservationSchema = object().shape({
    date: string().required("Required"),
    time: string().required("Please Choose Time!"),
    guests: number()
      .max(12, "Please Input Number of Guests Less Than 12!")
      .required("Please Input Number of Guests!")
      .positive()
      .integer(),
    occasion: string().required("Please Choose Occasion!"),
  });

  const listItems = props.availableTimes.map((item, index) => {
    return <option key={index}>{item}</option>;
  });

  return (
    <div className="box highlight">
      <Flex align="left" justify="left" h="80vh" w="512px">
        <Box bg="white" p={6} rounded="md" w="400px">
          <Box mb={mbNum}>
            <Heading as="h1" size="2xl" noOfLines={1}>
              Reservation
            </Heading>
          </Box>
          <Formik
            initialValues={{
              date: `${props.date}`,
              time: ``,
              guests: "",
              occasion: "",
            }}
            validationSchema={ReservationSchema}
            onSubmit={(values) => {
              localStorage.setItem("booking", JSON.stringify(values));
              props.submitForm(values);
            }}
          >
            {(props) => (
              <Form>
                <Box mb={mbNum}>
                  <Field name="date" m={2}>
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.date && form.touched.date}
                      >
                        <FormLabel htmlFor="date">Select Date</FormLabel>
                        <Field
                          as={Input}
                          id="date"
                          name="date"
                          placeholder=""
                          type="date"
                          variant="filled"
                        />
                        <Box h="3vh">
                          <FormErrorMessage>
                            {form.errors.date}
                          </FormErrorMessage>
                        </Box>
                      </FormControl>
                    )}
                  </Field>
                </Box>
                <Box mb={mbNum}>
                  <Field name="time">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.time && form.touched.time}
                      >
                        <FormLabel htmlFor="time">Select Time</FormLabel>

                        <Select {...field} placeholder="Select Option">
                          {listItems}
                        </Select>
                        <Box h="3vh">
                          <FormErrorMessage>
                            {form.errors.time}
                          </FormErrorMessage>
                        </Box>
                      </FormControl>
                    )}
                  </Field>
                </Box>
                <Box mb={mbNum}>
                  <Field name="guests">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.guests && form.touched.guests}
                      >
                        <FormLabel htmlFor="guests">Input Number of Guests</FormLabel>
                        <NumberInput
                          id="guests"
                          name="guests"
                          defaultValue={3}
                          min={1}
                          max={12}
                          placeholder="Number of Guests"
                          {...field}
                          onChange={(val) =>
                            form.setFieldValue(field.name, val)
                          }
                        >
                          <NumberInputField />
                          <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                          </NumberInputStepper>
                        </NumberInput>
                        <Box h="3vh">
                          <FormErrorMessage>
                            {form.errors.guests}
                          </FormErrorMessage>
                        </Box>
                      </FormControl>
                    )}
                  </Field>
                </Box>
                <Box mb={mbNum}>
                  <Field name="occasion">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={
                          form.errors.occasion && form.touched.occasion
                        }
                      >
                        <FormLabel>Occasion</FormLabel>
                        <Select {...field} placeholder="Select Option">
                          <option>Birthday</option>
                          <option>Anniversary</option>
                        </Select>

                        <Box h="3vh">
                          <FormErrorMessage>
                            {form.errors.occasion}
                          </FormErrorMessage>
                        </Box>
                      </FormControl>
                    )}
                  </Field>
                </Box>

                <Button
                  type="submit"
                  bg="#f4ce14"
                  width="full"
                  mt={4}
                  isLoading={props.isSubmitting}
                >
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </Flex>
    </div>
  );
}
export default BookingForm;
