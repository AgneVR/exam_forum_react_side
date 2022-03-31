const http = {
  get: async (url) => {
    const options = {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
      credentials: 'include',
    };

    const res = await fetch(`http://localhost:4000/${url}`, options);
    return await res.json();
  },
  post: async (data, url) => {
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(data),
    };

    const res = await fetch(`http://localhost:4000/${url}`, options);
    return await res.json();
  },
  postMultiPart: async (data, url) => {
    let form = new FormData();
    Object.keys(data).forEach((key) => {
      if (key === 'photos') {
        data[key].map((ph) => {
          form.append('photo', ph);
        });
      } else {
        form.append(key, data[key]);
      }
    });

    const res = await fetch(`http://localhost:4000/${url}`, {
      method: 'POST',
      body: form,
      credentials: 'include',
    });

    return await res.json();
  },
};

export default http;
