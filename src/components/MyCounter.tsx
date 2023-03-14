import React, { useState } from 'react'

import {
  Box,
  Card,
  Button
} from "@chakra-ui/react";

type Props = {
    value?: number
}
const MyCounter = ({ value = 0 }: Props) => {
    const [counter, setCounter] = useState(value);

    const onMinus = () => {
        setCounter((prev) => prev - 1)
    };

    const onPlus = () => {
        setCounter((prev) => prev + 1)
    };

    return (
        <Box
          w={{
            xs: "100%",
            sm: "32%",
            md: "32%",
            lg: "32%",
            xl: "32%",
            "2xl": "32%",
          }}
          mr={{ xs: "0 !important", sm: 6, md: 6, lg: 6, xl: 6, "2xl": 6 }}
          mt={{ xs: 6 }}
          mb={{ xs: 6 }}
        >
            <Card>
                <h1>Counter: {counter}</h1>
                <Button onClick={onMinus}>-</Button>
                <Button onClick={onPlus}>+</Button>
            </Card>
        </Box>
    )
}

export default MyCounter