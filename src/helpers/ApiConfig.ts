const request = async (method: string, sufix: string, body?: any) => {
  try {
    const baseUrl = import.meta.env.VITE_URL_API;
    const headersConfig = new Headers();
    headersConfig.set('Content-Type', 'application/json');

    let fetchConfig: RequestInit = {
      method: method,
      headers: headersConfig,
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
    };
    if (body) {
      fetchConfig.body = JSON.stringify(body);
    }

    const response = await fetch(baseUrl + sufix, fetchConfig);
   
    return await response.json();
  } catch (error) {
    console.error('Erro ao realizar requisição:', error);
  }
};
export default request;
