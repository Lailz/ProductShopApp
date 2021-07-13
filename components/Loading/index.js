import React from "react";

// Stylings
import { Center, Spinner } from "native-base";

const Loading = () => {
  return (
    <Center flex={1}>
      <Spinner color="blue" />
    </Center>
  );
};

export default Loading;
