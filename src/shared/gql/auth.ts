import { gql, useLazyQuery, useMutation } from '@apollo/client';

import { User } from '@/shared/interfaces';

const registration = () => {
    const [mutation] = useMutation<{ user: User.IUser }>(
        gql`
            mutation registration($password: String!, $nickname: String!) {
                registration(data: { password: $password, nickname: $nickname })
            }
        `
    );

    return async (variables: { password: string; nickname: string }) => {
        return await mutation({ variables });
    };
};

const login = () => {
    const [mutation] = useMutation<{ user: User.IUser }>(
        gql`
            mutation login($password: String!, $nickname: String!) {
                login(data: { password: $password, nickname: $nickname })
            }
        `
    );

    return async (variables: { password: string; nickname: string }) => {
        return await mutation({ variables });
    };
};

const checkUniqueNickname = () => {
    return useLazyQuery<{ uniqueNickname: boolean }>(
        gql`
            query checkUniqueNickname($nickname: String!) {
                uniqueNickname(nickname: $nickname)
            }
        `
    )[0];
};

const logout = () => {
    return useLazyQuery(
        gql`
            query logout {
                logout
            }
        `
    )[0];
};

export { checkUniqueNickname, login, logout, registration };
