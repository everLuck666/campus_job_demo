import http from "../utils/http";

// 上传学生的个人信息

export function uploadStudentInfo(data) {
  return http.post("/api/updateStudentInfo", data);
}

// 查询岗位
export function searchJob() {
  return http.post("station/all", {
    industryId: null,
    isDesc: null,
    name: null,
    pagSize: null,
    pageNum: null,
    salaryMax: null,
    salaryMin: null,
    sortField: null,
    status: null
  });
}

// 申请岗位
export async function askJob(jobId) {
  const {
    data: {
        code
    }
  } = await http.post("/station/apply", { stationId: jobId });

  if (code === 0) {
    return true;
  }
  return false;
}
