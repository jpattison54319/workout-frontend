const Login = () => {
    return (
        <form>
  <label>
    username:
    <input type="text" name="username" />
  </label>
  <label>
    password:
    <input type="text" name="password" />
  </label>
  <input type="submit" value="Submit" />
</form>
    );
  };
  
  export default Login;