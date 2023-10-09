import axios from 'axios';

async function GetData(setLoading, setData, setError){
    await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then(function(response) {
        setData(response.data);
        setError(null);
      })
      .catch((err)=>{
        setError(err.message)
      }).finally(()=>{
        setLoading(false)
      })
}

export {GetData};
