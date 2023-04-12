const addToDb = (job) => {
    let appliedJobs = JSON.parse(localStorage.getItem("Applied_Jobs")) || {};
    const jobId = job.id;
  
    if (appliedJobs[jobId]) {
      alert("Already applied")
      return; // job already added, do nothing
    } else {
      appliedJobs[jobId] = { ...job, count: 1 };
    }
    localStorage.setItem("Applied_Jobs", JSON.stringify(appliedJobs));
  };
  
  export { addToDb };
  