class Auth {

  static authenticateToken(token) {
    sessionStorage.setItem('token', token)
  }

  static isUserAuthenticated(){
    return sessionStorage.getItem('token') !== null;
  }

  static deauthencateToken(){
    sessionStorage.removeItem('token')
  }

  static getToken(){
    return sessionStorage.getItem('token')
  }

  static storeUserInfo(email, id){
    sessionStorage.setItem('email', email)
    sessionStorage.setItem('id', id)
  }
  static getUsername(){
    return sessionStorage.getItem('email')
  }
  static getUserId(){
    return sessionStorage.getItem('id')
  }
}

export default Auth;
