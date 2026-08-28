function fetchData(url) {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Gagal mengambil data');
        }
        const data = await response.json();
        resolve(data);
      } catch (error) {
        reject(error);
      }
    }, 1000);
  });
}

export default fetchData