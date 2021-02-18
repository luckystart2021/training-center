import localStorageService from "../localStorage.service/localStorage.service";

class AuthService {
  private localStorageServ = localStorageService;
  private token: string = '';
  constructor() {}
  checkAuthAdmin(): boolean {
    const token = this.localStorageServ.accessToken.get();
    const userInfor = this.localStorageServ.userInfor.get();
    return !!token && userInfor.isValidAdmin ? true : false;
  }

  getToken(): string {
    if (this.token && typeof window !== "undefined") {
      this.token = this.localStorageServ.accessToken.get();
    }
    return this.token;
  }
}

const authService = new AuthService();
export default authService;
