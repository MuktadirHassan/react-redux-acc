import httpReq from "./http.service";

class AuthService {
  async signup(body: any): Promise<any> {
    const { data } = await httpReq.post("/auth/signup", body);
    return data;
  }
  async login(body: { email: string; password: string }): Promise<IUserData> {
    const { data } = await httpReq.post("/auth/login", body);
    return data;
  }
}

export default new AuthService();
