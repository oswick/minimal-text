(async () => {
    const fetch = await import('node-fetch');
  
    async function sendUrlsToIndexNow(host, key, keyLocation, urlList) {
      const indexNowUrl = 'https://api.indexnow.org/';  // URL correcta para la API
  
      const body = {
        host: host,
        key: key,
        keyLocation: keyLocation,
        urlList: urlList,
      };
  
      try {
        const response = await fetch.default(indexNowUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
          },
          body: JSON.stringify(body),
        });
  
        if (response.ok) {
          console.log('URLs enviadas exitosamente a IndexNow');
        } else {
          console.error('Error al enviar URLs a IndexNow:', response.statusText);
        }
      } catch (error) {
        console.error('Error al enviar URLs a IndexNow:', error);
      }
    }
  
    // Datos de ejemplo
    const host = 'https://distraction-free-editor.vercel.app/';
    const key = 'cca4a7ad8c934a0eb8675f2238f81c4e';
    const keyLocation = 'https://distraction-free-editor.vercel.app/cca4a7ad8c934a0eb8675f2238f81c4e.txt';
    const urlList = [
      'https://distraction-free-editor.vercel.app/'
    ];
  
    // Enviar URLs a IndexNow
    sendUrlsToIndexNow(host, key, keyLocation, urlList);
  })();
  