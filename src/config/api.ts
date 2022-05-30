export default {
  staleTime: 120 * 1000, //2min
  url: 'http://localhost:3011',

  department: {
    list: "api/department",
    getById: "api/department/:uId",
    create: "api/department",
    update: "api/department/:uId",
    delete: "api/department/:uId"
  }
}