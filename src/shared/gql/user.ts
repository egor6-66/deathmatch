import { gql, useLazyQuery, useQuery } from '@apollo/client';

import { User } from '@/shared/interfaces';

const getViewer = () => {
    return useQuery<{ viewer: User.IUser }>(
        gql`
            query viewer {
                viewer {
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

// const getViewer = (data: { variables: { id?: number; nickname?: string } }) => {
//   return useQuery<{ user: User.IUser }>(
//       gql`
//           query user($id: Int, $nickname: String) {
//               user(data: { id: $id, nickname: $nickname }) {
//                   nickname
//                   clientApp {
//                       theme
//                       lang
//                   }
//               }
//           }
//       `,
//       {
//           variables: data.variables,
//       }
//   );
// };

const checkUniqueNickname = (data: { variables: { nickname: string } }) => {
    return useLazyQuery(
        gql`
            query user($id: Int, $nickname: String) {
                user(data: { id: $id, nickname: $nickname })
            }
        `,
        {
            variables: data.variables,
        }
    );
};

export { getViewer };
// ${updateFields(data.fields)}
