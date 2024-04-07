import axios from "axios";
const createPekerja = (data, setShow) => async (dispatch) => {
  try {
    const worker = await axios.post('https://be-hiring-app-production.up.railway.app/api/v1/user/worker/create', {
      JobDesc: data.JobDesc,
      JobType: data.JobType,
      CompanyName: data.CompanyName,
      Skill: data.Skill,
      UserId: Number(data.UserId),
      User: data.User,
    });
    alert("Create Worker successful");
    setShow(false);
    const result = worker.data;
    dispatch({ type: "CREATE_PRODUCT", payload: result });
  } catch (err) {
    console.error(err.message);
    alert("crate Worker failed");
    setShow(false);
  }
};

export default createPekerja;