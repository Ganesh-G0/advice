$(document).ready(() => {
  
  getAdvice();
  $("#btn").click(() => { getAdvice(); });

  async function getAdvice() {
    try {
      // const response = await axios.get("https://api.adviceslip.com/advice/71");
      const response = await axios.get("https://api.adviceslip.com/advice");
      $("#adviceId").text(response.data.slip.id);
      $("#advice").text(response.data.slip.advice);
    } catch (error) {
      console.error(error);
    }
  };  
});