(async () => {
    const fetch = await import('node-fetch');
  
    async function sendUrlsToIndexNow(host, key, keyLocation, urlList) {
      const indexNowUrl = 'https://api.indexnow.org/indexnow';  // URL correcta para la API
  
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
    const host = 'https://distraction-free-editor.netlify.app/';
    const key = '411134fa19c541168f74d3e488b5db41';
    const keyLocation = 'https://distraction-free-editor.netlify.app/411134fa19c541168f74d3e488b5db41.txt';
    const urlList = [
      'https://distraction-free-editor.netlify.app/'
    ];
  
    // Enviar URLs a IndexNow
    sendUrlsToIndexNow(host, key, keyLocation, urlList);
  })();
  