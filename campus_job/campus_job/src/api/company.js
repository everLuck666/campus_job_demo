import http from "../utils/http";

// 岗位查询
export async function searchJob(data) {
  return http.get("/", data);
}

// 岗位发布
export async function uploadJobInfo(data) {
  return http.post("/station", data);
}

// 企业注册

export async function register(data) {
   return http.post("/enterprise", data);

}


// 企业登录

export async function login(data) {
    return http.post('/enterprise/login', data);
}


// 企业认证

export async function registerCompany(data) {
  return http.post('/enterprise/authen', data);
}