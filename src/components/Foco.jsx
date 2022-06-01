import React from "react";
import { useState } from "react/cjs/react.development";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

export const Foco = () => {
  const [estatus, setEstatus] = useState(false);
  return (
    <TouchableOpacity onPress={() => setEstatus(!estatus)}>
      <Image
        source={
          estatus ? require("../Img/focoOn.png") : require("../Img/focoOff.png")
        }
        style={{ width: 60, height: 95 }}
      />
    </TouchableOpacity>
  );
};

export default Foco;
