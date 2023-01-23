export const useAuth = () => {
    let current_user = JSON.parse(localStorage.getItem("user"));

    return { current_user };
}