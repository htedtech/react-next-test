
export const getAppInfo = async (): Promise<{name: string, description: string}> => {
  return fetch("http://localhost:3000/api").then(res => res.json());
}