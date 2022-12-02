import axios from 'axios';

export default defineEventHandler(async (event) => {
    
    const config = useRuntimeConfig()
  
    const { data } = await axios({
        method: 'get',
        url: `https://api.github.com/users/LunaEpitech/repos`,
        headers: {
            Authorization: `Bearer ${config.token}`,
            "Content-Type": "application/json",
            'Accept-Encoding': 'identity',
        },
    })

    return (data);
  })