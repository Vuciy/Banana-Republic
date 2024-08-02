const jumpToReleventDiv = (id) => {
  const releventDiv = document.getElementById(id);
  releventDiv?.scrollIntoView({ behavior: "smooth" });
};
