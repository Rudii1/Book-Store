import instance from '../../../../enviroment/axiosInstance';

export const signup = async (signupDto) => {
    try {
        const response = instance.post("/api/auth/signup", signupDto);
        return response;
    } catch (error) {
        console.error("Error signing in: ",error);
        throw error;
    }
}