import React from 'react';
import DashboardLayout from '../../../layouts/dashboardLayout/DashboardLayout';
import MyTask from '../components/myTask/MyTask';

const MyTaskPage = () => {
    // const capCha = async()=>{
    //     let url = `http://2captcha.com/res.php?key=dae25535d54065863f8c9b6ad1118581`;
    //     console.log(`url`, url)
    //     const res = await axios
    //     .get(url)
    //     .then((response) => {
    //     return response.data;
    //     })
    //     .catch((error) => {
    //     return error;
    //     });
    //     console.log(`res`, res)
    //     return res;
            
    // }

    // // console.log(`capcha`, capcha)

    // useEffect(() => {
    //     capCha()
      
    // }, []);


    return (
        <DashboardLayout>
            <MyTask />
        </DashboardLayout>
    );
};





export default MyTaskPage;