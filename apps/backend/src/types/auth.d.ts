interface ICreateAccount {
  username: string;
  email: string;
  password: string;
}

interface ISignUpRequest {
  username: string;
  email: string;
  password: string;
}

interface ISignInRequest {
  email: string;
  password: string;
}
export { ICreateAccount, ISignInRequest, ISignUpRequest };
