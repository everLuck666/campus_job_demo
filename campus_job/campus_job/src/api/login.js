import http from "../utils/http";

// 登陆


const paths = ['/student/login', '/schoolmanager', '/enterprise/login'];
export async function handleLogin(data, value) {


  const result = await http.post(paths[value], data);

  return result;


}
