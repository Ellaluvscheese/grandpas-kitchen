const baseURL = import.meta.env.VITE_SERVER_URL;

async function convertToJson(res) {
    const data = await res.json();
    console.log(data);
    if (res.ok) {
      return data;
    } else {
      throw { name: 'servicesError', message: data };
    }
  }

export const getRecipes = async () => {
  const response = await fetch(`${baseURL}recipes/`);
  console.log(response);
  const data = await convertToJson(response);
  console.log(data);
  return data;
}