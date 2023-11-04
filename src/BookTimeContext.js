import React, { useContext, useState } from "react";

const BookTimeContext = React.createContext(undefined);

export const BookTimeProvider = ({ children }) => {
    const [bookTime, setBookTime] = useState(Array.from({length:6}));

    return (
        <BookTimeContext.Provider
            value={{
                bookTime,
                toggleTime: (index) => setBookTime(perData=>{
                    let temp = [...perData];
                    temp[index] = temp[index]==='undefined'?1:0;
                    return temp;
                }
                    )
            }}
        >
            {children}
        </BookTimeContext.Provider>
    );
};

export const useBookTime = () => useContext(BookTimeContext);