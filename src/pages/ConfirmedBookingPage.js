import { useState } from "react";
import { Flex, Box, Heading, Button } from "@chakra-ui/react";
import Footer from "../component/layouts/Footer";
import Nav from "../component/layouts/Nav";
import { Link } from "react-router-dom";
function ConfirmedbookingPage() {
  const [booking, setBooking] = useState(() => {
    const saved = localStorage.getItem("booking");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  return (
    <>
      <Nav />
      <main className="background-imge">
        <div className="box highlight">
          <Flex align="left" justify="left" h="50vh" w="512px">
            <Box bg="white" p={6} rounded="md" w="400px">
              <Box mb={3}>
                <Heading as="h1" size="2xl" noOfLines={1}>
                  Confirm!
                </Heading>
              </Box>
              <div class="grid-container">
                <div class="grid-item">Date:</div>
                <div class="grid-item">{booking.date}</div>
                <div class="grid-item">Time:</div>
                <div class="grid-item"> {booking.time}</div>
                <div class="grid-item">Number of Guests:</div>
                <div class="grid-item">{booking.guests}</div>
                <div class="grid-item">Occasion:</div>
                <div class="grid-item">{booking.occasion}</div>
              </div>
<br/><br/>
              <Link to="/">
                <Button type="submit" bg="#f4ce14" width="full" mt={4}>
                  Go to the home page
                </Button>
              </Link>
            </Box>
          </Flex>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default ConfirmedbookingPage;
