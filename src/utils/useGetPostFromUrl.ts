import { useRouter } from "next/router"
import { usePostQuery } from "../generated/graphql";
import { useGerIntId } from "./useGerIntId";

export const useGetPostFromUrl = () => {
    const intId = useGerIntId();
    return usePostQuery({
        pause: intId === -1,
        variables: {
            id: intId,
        }
    })
}