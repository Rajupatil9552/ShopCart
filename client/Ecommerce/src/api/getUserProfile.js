import axios from 'axios';

const backendURL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000';
console.log("Backend URL in fetchProduct.js:", backendURL);
const token = localStorage.getItem('token') || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5Mjg2NWRhN2I2M2ViOWMxMjRhOTc0OCIsImlhdCI6MTc2NDgyNDgxNiwiZXhwIjoxNzY0ODQyODE2fQ.0mEtKP_h1_WxyVeu5JEn1sXKSGAMMz6cYN1twdcQUo8";


const getUserProfile = async () => {
    try{
        const response = await axios.get(`${backendURL}/api/user/profile`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response;
    }
    catch(error){
        console.error("Error fetching user profile:", error);
        throw error;    
    }
}

export{
    getUserProfile
}