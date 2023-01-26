import { useContext } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { createUser } from "../service/authApi";

const Mutation = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const { setAuth } = useAuth();

    // create stock mutation
    const createUserMutation = useMutation(createUser, {
        // When mutate is called:
        onMutate: async (newUser) => {
            await queryClient.cancelQueries(["authUser"]); //cancel any in-flight or pending query to the `user` key
            const previousUser = queryClient.getQueryData(["authUser"]); // retrieve the cached data
            return {
                previousUser,
                newUser,
            };
        },
        onSuccess: async (data, variables, context) => {
            //  use to immediately update a query's cached data
            await queryClient.setQueryData('authUser', context.newUser)
            setAuth(context.newUser);
            navigate("/");
        },
        onError: async (error, variables, context) => {
            await queryClient.setQueryData("authUser", context.previousUser); //rollback the cache to the previous state
        },
        // Always refetch after error or success:
        onSettled: async (data, error, variables, context) => {
            await queryClient.invalidateQueries("authUser"); //refetch the collection on the background
        },
    });
    return {
        createUserMutation
    }
}

export default Mutation;
