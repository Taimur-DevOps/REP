// import axios from "utils/interceptors";
import axios from "axios";
// export const getEmploymentType = async () => {
//   return await axios.get(`config/dropdowns/employment-types`);
// };

// export const getEmploymentTypeForVacancyRequisition = async () => {
//   return await axios.get(`config/dropdowns/employment-types-For-VacancyRequisition`);
// };

// export const createPostOnLinkedIn = async (jobId) => {
//   return await axios.get(`/jobs/createPostOnLinkedIn/${jobId}`);
// };

// export const checkUserHasLinkedInTokens = async () => {
//   return await axios.get(`/tokens/linkedIn/checkUserHasTokens`);
// };

// export const getJobForAnalyze = async (jobId) => {
//   return await axios.get(`/jobs/getJobForAnalyze/${jobId}`);
// };

// export const cloneJobById = async (jobId) => {
//   return await axios.post(`/jobs/cloneJobById/${jobId}`);
// };

// export const getMinimumExperience = async () => {
//   return await axios.get(`/config/dropdowns/minimum-experience`);
// };

// export const getCountries = async () => {
//   return await axios.get(`config/dropdowns/counteries`);
// };

// export const updateHiringStep = async (id, payload) => {
//   return await axios.post(`/jobs/updateHiringStep/${id}`, payload);
// };

// export const getStatesByCountryName = async (payload) => {
//   return await axios.post(`https://countriesnow.space/api/v0.1/countries/states`, payload);
// };

// export const getCitiesByStateName = async (payload) => {
//   return await axios.post(`https://countriesnow.space/api/v0.1/countries/state/cities`, payload);
// };
// export const getCurrencies = async () => {
//   return await axios.get(`https://countriesnow.space/api/v0.1/countries/currency`);
// };

// export const getSalaryPeriods = async () => {
//   return await axios.get(`config/dropdowns/salaryPeriods`);
// };

// export const createAndSaveToken = async (code) => {
//   return await axios.get(`/tokens/linkedIn/createToken?code=${code}`);
// };

export const createProperty = async (payload) => {
  debugger
  return await axios.post(`/jobs`, payload);
};

// export const getAllJobs = async (params) => {
//   return await axios.get(`/jobs${params}`);
// };

// export const getAllJobsWithoutPagination = async () => {
//   return await axios.get(`/jobs/withoutPagination`);
// };

// export const getJobById = async (id) => {
//   return await axios.get(`/jobs/${id}`);
// };

// export const getJobWithCandidates = async (id, filter) => {
//   return await axios.post(`/jobs/getJobWithCandidates/${id}`, filter);
// };

// export const updateJob = async (id, formData) => {
//   return await axios.patch(`/jobs/${id}`, formData);
// };

// export const deleteJobById = async (id) => {
//   return await axios.delete(`/jobs/${id}`);
// };

// export const updateTeam = async (id, teamMembers) => {
//   return await axios.post(`/jobs/updateTeamMembers/${id}`, { teamMembers });
// };
// export const saveJobPostLink = async (id, payload) => {
//   return await axios.post(`/jobs/saveJobPostLink/${id}`, payload);
// };

// export const deleteTeamMember = async (id, teamMemberId) => {
//   return await axios.post(`/jobs/removeTeamMember/${id}`, { teamMemberId });
// };

// export const selectProfileQuestion = async (id, payload) => {
//   return await axios.post(`/jobs/addJobApplication/${id}`, payload);
// };

// export const updateHiringManager = async (jobId, managerId) => {
//   return await axios.post(`/jobs/updateJobManager/${jobId}`, { managerId });
// };

// export const getWorkflowsTemplate = async () => {
//   return await axios.get("/hiringCycles");
// };

// export const updateJobStatus = async ({ id, status, jobPostLink, isApproved, isSubmittedForApproval }) => {
//   return await axios.patch(`/jobs/status/${id}`, { status, isApproved, isSubmittedForApproval, jobPostLink });
// };

// export const submitJobForApproval = async (jobId, isSubmitted, status) => {
//   return await axios.patch(`/jobs/submitJobForApproval/${jobId}`, { isSubmitted, status });
// };

// export const addToDefaultQuestions = async (id, payload) => {
//   return await axios.post(`/jobs/addToDefaultQuestions/${id}`, payload);
// };

// export const achiveJob = async (id, payload) => {
//   return await axios.patch(`/jobs/archive/${id}`, payload);
// };

// export const watchList = async (jobId) => {
//   return await axios.get(`/jobs/watchList${jobId}`);
// };

// export const addQuestionnaireToJob = async (jobId, questionnaireId) => {
//   return await axios.post(`/jobs/questionnaireToJob/${jobId}`, questionnaireId);
// };

// export const removeQuestionnaireFromJob = async (jobId, questionnaireId) => {
//   return await axios.patch(`/jobs/questionnaireToJob/${jobId}`, questionnaireId);
// };

// export const approveJobPost = async (jobId, isSubmitted, isApproved, status, jobPostLink) => {
//   return await axios.patch(`/jobs/approveJobPost/${jobId}`, { isSubmitted, isApproved, status, jobPostLink });
// };
