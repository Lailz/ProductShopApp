import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  AuthButton,
  AuthButtonText,
  AuthContainer,
  AuthOther,
  AuthTextInput,
  AuthTitle,
} from "./styles";

// Actions
import { signin } from "../../store/actions/authActions";
import { SIGNUP } from "../Navigation/types";

const Signin = ({ navigation }) => {
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = () => {
    dispatch(signin(user, navigation));
  };
  return (
    <AuthContainer>
      <AuthTitle>Signin</AuthTitle>
      <AuthTextInput
        placeholder="Username"
        placeholderTextColor="#A6AEC1"
        autoCapitalize="none"
        onChangeText={(username) => setUser({ ...user, username })}
      />
      <AuthTextInput
        placeholder="Password"
        placeholderTextColor="#A6AEC1"
        secureTextEntry={true}
        onChangeText={(password) => setUser({ ...user, password })}
      />
      <AuthButton onPress={handleSubmit}>
        <AuthButtonText>Sign in</AuthButtonText>
      </AuthButton>
      <AuthOther onPress={() => navigation.navigate(SIGNUP)}>
        Click here to register!
      </AuthOther>
    </AuthContainer>
  );
};

export default Signin;
