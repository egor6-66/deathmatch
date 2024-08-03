import { gql, useQuery } from '@apollo/client';

import { User } from '@/shared/interfaces';

const getViewer = () => {
    return useQuery<{ viewer: User.IUser }>(
        gql`
            query viewer {
                viewer {
                    id
                    nickname
                    clientApp {
                        theme
                        lang
                    }
                }
            }
        `
    );
};

export { getViewer };
