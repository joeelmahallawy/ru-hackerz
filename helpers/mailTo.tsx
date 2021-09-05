const sendMail = () => {
  const mailto: string =
    "mailto:ryersonhackerz@gmail.com?subject=Test subject&body=Body content";
  window.location.href = mailto;
};
export default sendMail;
