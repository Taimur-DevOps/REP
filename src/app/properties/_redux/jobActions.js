import * as jobServices from "./jobServices";
// import { onSuccessToast, onErrorToast } from "modules/Toast/_redux/toastActions";
// import { candidateManagementSlice } from "../../candidates/_redux/candidateSlice";
import { propertyManagementSlice } from "./jobSlice";
// import { loaderSlice } from "components/shared/globalLoader/_redux/loaderSlice";

const actions = propertyManagementSlice.actions;
// const loaderSliceActions = loaderSlice.actions;

export const createProperty = (formData, onSuccess, onError) => async (dispatch) => {
  try {
    debugger
    // dispatch(loaderSliceActions.incApiCAll());
    const res = await jobServices.createProperty(formData);
    // dispatch(actions.setJobID(res?.data?.data?.job?.id));
    // dispatch(actions.setSelectedJob({ job: res?.data?.data?.job }));
    // dispatch(loaderSliceActions.decApiCAll());
    onSuccess(res);
  } catch (error) {
    // dispatch(loaderSliceActions.decApiCAll());
    onError(error);
  }
};

// export const cloneJobById = (jobId, onSuccess) => async (dispatch) => {
//   dispatch(loaderSliceActions.incApiCAll());
//   try {
//     const res = await jobServices.cloneJobById(jobId);
//     dispatch(actions.setSelectedJob({ job: res?.data?.data?.clonedJob }));
//     dispatch(loaderSliceActions.decApiCAll());
//     dispatch(onSuccessToast({ message: res?.data?.message, header: "Cloned Successfully!" }));
//     onSuccess();
//   } catch (error) {
//     dispatch(loaderSliceActions.decApiCAll());
//     dispatch(onErrorToast(error?.response?.data));
//   }
// };

// export const getAllProperties = (params) => async (dispatch) => {
//   // dispatch(loaderSliceActions.incApiCAll());
//   try {
//     const res = await jobServices.getAllProperties(params);
//     dispatch(actions.getAllProperties({ jobs: res?.data?.data }));
//     // dispatch(loaderSliceActions.decApiCAll());
//   } catch (error) {
//     // dispatch(loaderSliceActions.decApiCAll());
//     // dispatch(onErrorToast(error?.response?.data));
//   }
// };

// export const getAllJobsWithoutPagination = (params) => async (dispatch) => {
//   dispatch(loaderSliceActions.incApiCAll());
//   try {
//     const res = await jobServices.getAllJobsWithoutPagination(params);
//     dispatch(actions.getAllJobsWithoutPagination(res));
//     dispatch(loaderSliceActions.decApiCAll());
//   } catch (error) {
//     dispatch(loaderSliceActions.decApiCAll());
//     dispatch(onErrorToast(error?.response?.data));
//   }
// };

// export const getJobById = (id, onError) => async (dispatch) => {
//   dispatch(loaderSliceActions.incApiCAll());
//   try {
//     const res = await jobServices.getJobById(id);
//     dispatch(actions.setSelectedJob({ job: res?.data?.data?.job }));
//     dispatch(actions.setSelectedJobId({ id: res?.data?.data?.job?.id }));
//     dispatch(loaderSliceActions.decApiCAll());
//   } catch (error) {
//     onError();
//     dispatch(loaderSliceActions.decApiCAll());
//   }
// };

// export const getAllJobsForCandDropdown = (params) => async (dispatch) => {
//   try {
//     dispatch(loaderSliceActions.incApiCAll());
//     const res = await jobServices.getAllJobsWithoutPagination(params);
//     dispatch(actions.saveJobs(res));
//     dispatch(loaderSliceActions.decApiCAll());
//   } catch (error) {
//     dispatch(loaderSliceActions.decApiCAll());
//     dispatch(onErrorToast(error?.response?.data));
//   }
// };

// export const getJobWithCandidates = (id, filter, onSuccess, onError) => async (dispatch) => {
//   dispatch(loaderSliceActions.incApiCAll());
//   try {
//     const res = await jobServices.getJobWithCandidates(id, filter);
//     if (filter?.forCandidateView && res?.data?.data?.candidateId) {
//       dispatch(candidateManagementSlice?.actions?.setFiltersForNextPreCandidate(filter));
//       dispatch(loaderSliceActions.decApiCAll());
//       onSuccess(res?.data?.data?.candidateId);
//     } else {
//       dispatch(actions.setSelectedJobWithCandidates({ job: res?.data }));
//       dispatch(loaderSliceActions.decApiCAll());
//       onSuccess();
//     }

//     dispatch(actions.setJobID(res?.data?.data?.jobDetail?._id));
//     dispatch(actions.setSelectedJob({ job: res?.data?.data?.jobDetail }));
//   } catch (error) {
//     onError();
//     dispatch(loaderSliceActions.decApiCAll());
//   }
// };

// export const updateHiringStep = (id, payload, onSuccess) => async (dispatch) => {
//   dispatch(loaderSliceActions.incApiCAll());
//   try {
//     const res = await jobServices.updateHiringStep(id, payload);
//     dispatch(actions.setSelectedJob({ job: res?.data?.data?.updatedJob }));
//     dispatch(onSuccessToast({ message: res?.data?.message, header: "Updated Successfully!" }));
//     dispatch(loaderSliceActions.decApiCAll());
//     onSuccess();
//   } catch (error) {
//     dispatch(loaderSliceActions.decApiCAll());
//   }
// };

// export const updateJobById = (id, formData, toastCallback, toastCallbackError) => async (dispatch) => {
//   dispatch(loaderSliceActions.incApiCAll());
//   try {
//     const res = await jobServices.updateJob(id, formData);
//     dispatch(actions.setSelectedJob({ job: res?.data?.data?.job }));
//     dispatch(loaderSliceActions.decApiCAll());
//     toastCallback(res);
//   } catch (error) {
//     dispatch(loaderSliceActions.decApiCAll());
//     toastCallbackError(error?.response);
//   }
// };

// export const deleteJobById = (id, setIsDeleted, toastCallback, toastCallbackError) => async (dispatch) => {
//   dispatch(loaderSliceActions.incApiCAll());
//   try {
//     const res = await jobServices.deleteJobById(id);
//     dispatch(loaderSliceActions.decApiCAll());
//     setIsDeleted((pre) => !pre);
//     toastCallback(res?.data?.message);
//   } catch (error) {
//     dispatch(loaderSliceActions.decApiCAll());
//     toastCallbackError(error?.message);
//   }
// };

// export const updateTeamById = (id, formData, setIsActionSuccessful, toastCallback, toastCallbackError) => async (dispatch) => {
//   dispatch(loaderSliceActions.incApiCAll());

//   try {
//     const res = await jobServices.updateTeam(id, formData);

//     setIsActionSuccessful((pre) => !pre);

//     dispatch(loaderSliceActions.decApiCAll());
//     toastCallback(res?.data?.message);
//   } catch (error) {
//     dispatch(loaderSliceActions.decApiCAll());
//     toastCallbackError(error?.response?.data?.message);
//   }
// };

// export const deleteTeamMemberById = (id, memberId, setIsActionSuccessful, toastCallback, toastCallbackError) => async (dispatch) => {
//   dispatch(loaderSliceActions.incApiCAll());
//   try {
//     const res = await jobServices.deleteTeamMember(id, memberId);

//     setIsActionSuccessful((pre) => !pre);

//     dispatch(loaderSliceActions.decApiCAll());
//     toastCallback(res?.data?.message);
//   } catch (error) {
//     dispatch(loaderSliceActions.decApiCAll());
//     toastCallbackError(error?.message);
//   }
// };

// export const updateHiringManagerById = (jobId, managerId, setIsActionSuccessful, toastCallback, toastCallbackError) => async (dispatch) => {
//   dispatch(loaderSliceActions.incApiCAll());
//   try {
//     const res = await jobServices.updateHiringManager(jobId, managerId);

//     dispatch(loaderSliceActions.decApiCAll());
//     setIsActionSuccessful((pre) => !pre);
//     toastCallback(res?.data?.message);
//   } catch (error) {
//     dispatch(loaderSliceActions.decApiCAll());
//     toastCallbackError(error?.response?.data?.message);
//   }
// };

// export const selectProfileQuestion = (id, payload, onSuccess) => async (dispatch) => {
//   dispatch(loaderSliceActions.incApiCAll());
//   try {
//     const res = await jobServices.selectProfileQuestion(id, payload);
//     dispatch(onSuccessToast({ message: res?.data?.message, header: "Updated Successfully!" }));
//     dispatch(actions.setSelectedJob({ job: res?.data?.data?.job }));
//     dispatch(loaderSliceActions.decApiCAll());
//     onSuccess();
//   } catch (error) {
//     dispatch(loaderSliceActions.decApiCAll());
//     dispatch(onErrorToast({ message: error?.response?.data?.message, header: "Unable to Add Question" }));
//   }
// };

// export const addToDefaultQuestions = (id, payload, onSuccess) => async (dispatch) => {
//   dispatch(loaderSliceActions.incApiCAll());
//   try {
//     const res = await jobServices.addToDefaultQuestions(id, payload);
//     dispatch(onSuccessToast({ message: res?.data?.message, header: "Updated Successfully!" }));
//     dispatch(actions.setSelectedJob({ job: res?.data?.data?.job }));
//     dispatch(loaderSliceActions.decApiCAll());
//     onSuccess();
//   } catch (error) {
//     dispatch(loaderSliceActions.decApiCAll());

//     dispatch(onErrorToast({ message: error?.response?.data?.message, header: "Unable to Add Question" }));
//   }
// };

// export const changeJobStatus = (payload, onSuccess) => async (dispatch) => {
//   dispatch(loaderSliceActions.incApiCAll());
//   try {
//     const res = await jobServices.updateJobStatus(payload);
//     onSuccess(res);
//     dispatch(loaderSliceActions.decApiCAll());
//   } catch (error) {
//     dispatch(loaderSliceActions.decApiCAll());
//     dispatch(onErrorToast({ message: error?.response?.data?.message, header: "Unable to Update!" }));
//   }
// };
// export const publishJob =
//   (payload, onSuccess, onError = () => {}) =>
//   async (dispatch) => {
//     dispatch(loaderSliceActions.incApiCAll());
//     try {
//       const res = await jobServices.updateJobStatus(payload);
//       dispatch(loaderSliceActions.decApiCAll());
//       onSuccess(res);
//     } catch (error) {
//       onError();
//       dispatch(loaderSliceActions.decApiCAll());
//       dispatch(onErrorToast({ message: error?.response?.data?.message, header: "Unable to Update!" }));
//     }
//   };

// export const submitJobForApproval =
//   ({ jobId, isSubmitted, status }, onSuccess, onError = () => {}) =>
//   async (dispatch) => {
//     dispatch(loaderSliceActions.incApiCAll());
//     try {
//       const res = await jobServices.submitJobForApproval(jobId, isSubmitted, status);
//       dispatch(loaderSliceActions.decApiCAll());
//       dispatch(actions.setJobID(res?.data?.data?.job?.id));
//       dispatch(actions.setSelectedJob({ job: res?.data?.data?.job }));
//       onSuccess(res);
//     } catch (error) {
//       onError();
//       dispatch(loaderSliceActions.decApiCAll());
//       dispatch(onErrorToast({ message: error?.response?.data?.message, header: "Unable to Update!" }));
//     }
//   };
// export const achiveJob = (id, payload, toastCallback, toastCallbackError) => async (dispatch) => {
//   dispatch(loaderSliceActions.incApiCAll());
//   try {
//     const res = await jobServices.achiveJob(id, payload);
//     dispatch(loaderSliceActions.decApiCAll());

//     toastCallback(res?.data?.message);
//   } catch (error) {
//     dispatch(loaderSliceActions.decApiCAll());
//     toastCallbackError(error?.message);
//   }
// };

// export const saveJobPostLink = (id, payload, toastCallback, toastCallbackError) => async (dispatch) => {
//   dispatch(loaderSliceActions.incApiCAll());
//   try {
//     const res = await jobServices.saveJobPostLink(id, payload);
//     dispatch(loaderSliceActions.decApiCAll());
//     toastCallback(res?.data?.message);
//   } catch (error) {
//     dispatch(loaderSliceActions.decApiCAll());
//     toastCallbackError(error?.message);
//   }
// };

// export const getWatchList = (jobId) => async (dispatch) => {
//   dispatch(loaderSliceActions.incApiCAll());
//   try {
//     const res = await jobServices.watchList(jobId);

//     dispatch(actions.getWatchList(res?.data?.data));
//     dispatch(loaderSliceActions.decApiCAll());
//   } catch (error) {
//     dispatch(loaderSliceActions.decApiCAll());
//     dispatch(onErrorToast(error?.response?.data));
//   }
// };

// export const addQuestionnaireToJob = (jobId, questionnaireId, onSuccess) => async (dispatch) => {
//   dispatch(loaderSliceActions.incApiCAll());
//   try {
//     const res = await jobServices.addQuestionnaireToJob(jobId, questionnaireId);
//     dispatch(actions.setSelectedJob({ job: res?.data?.data?.job }));
//     dispatch(actions.setSelectedJobId({ id: res?.data?.data?.job?.id }));
//     dispatch(loaderSliceActions.decApiCAll());
//     onSuccess(res);
//   } catch (error) {
//     dispatch(loaderSliceActions.decApiCAll());
//     dispatch(onErrorToast(error?.response?.data));
//   }
// };

// export const removeQuestionnaireFromJob = (jobId, onSuccess) => async (dispatch) => {
//   dispatch(loaderSliceActions.incApiCAll());

//   try {
//     const res = await jobServices.removeQuestionnaireFromJob(jobId);
//     dispatch(actions.setSelectedJob({ job: res?.data?.data?.job }));
//     dispatch(actions.setSelectedJobId({ id: res?.data?.data?.job?.id }));
//     onSuccess(res);
//     dispatch(loaderSliceActions.decApiCAll());
//   } catch (error) {
//     dispatch(loaderSliceActions.decApiCAll());
//     dispatch(onErrorToast(error?.response?.data));
//   }
// };

// export const approveJobPost =
//   ({ jobId, isSubmitted, isApproved, status, jobPostLink }, onSuccess) =>
//   async (dispatch) => {
//     dispatch(loaderSliceActions.incApiCAll());

//     try {
//       const res = await jobServices.approveJobPost(jobId, isSubmitted, isApproved, status, jobPostLink);
//       dispatch(actions.setSelectedJob({ job: res?.data?.data?.job }));
//       dispatch(actions.setSelectedJobId({ id: res?.data?.data?.job?.id }));
//       onSuccess(res);
//       dispatch(loaderSliceActions.decApiCAll());
//     } catch (error) {
//       dispatch(loaderSliceActions.decApiCAll());
//       dispatch(onErrorToast(error?.response?.data));
//     }
//   };
