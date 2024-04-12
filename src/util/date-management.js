export default function DateHandler() {
  const getMonth = (initialDate) => {
    return new Date(initialDate).toLocaleString("en-US", {month: "long"});
    
  }
  const getYear = (initialDate) => {
      return new Date(initialDate).getFullYear();
    }
  return {
    getMonth,
    getYear,
  }
}
