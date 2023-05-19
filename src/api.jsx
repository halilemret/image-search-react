import axios from 'axios';

const searchImages = async (term) => {
    const response =await axios.get('https://api.unsplash.com/search/photos',{
      headers:{
        Authorization: "Client-ID 99OamOxyd3r8I0g_MtM3pbq1i4fxZMsCgCi9d9gnoao",
      },
      params:{
        query:term,
      },
    });
    debugger;
    return response.data.results;
  }

  export default searchImages;