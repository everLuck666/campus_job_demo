import http from "../utils/http";

// 查询未审核岗位

export async function getNoVerifyJob(data={
    "industry": null,
    "isDesc": null,
    "name": null,
    "pagSize": null,
    "pageNum": null,
    "salaryMax": null,
    "salaryMin": null,
    "sortField": null,
    "status": null
  }) {
    const { data : { data: result } } =  await http.post('/station/audit', data);

    return result.data;




}

