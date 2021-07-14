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
import { signup } from "../../store/actions/authActions";
import { SIGNIN } from "../Navigation/types";

const Signup = ({ navigation }) => {
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = () => {
    dispatch(signup(user, navigation));
  };
  return (
    <AuthContainer>
      <AuthTitle>Signup</AuthTitle>
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
        <AuthButtonText>Sign up</AuthButtonText>
      </AuthButton>
      <AuthOther onPress={() => navigation.navigate(SIGNIN)}>
        Click here to sign in!
      </AuthOther>
    </AuthContainer>
  );
};

export default Signup;
