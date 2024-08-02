import { gql, useQuery } from '@apollo/client';

import { client } from '@/providers/apollo';
interface IQueryWithSub {
    queryName: string;
    subName: string;
    fields: string;
}

const queryWithSub = <T, K>(props: IQueryWithSub) => {
    const { queryName, subName, fields } = props;
    const queryTemplate = `query ${queryName} {${queryName} {${fields}}}`;
    const subTemplate = `subscription ${subName} {${subName} {${fields}}}`;

    const sub = (cb?: (data: K) => void) => {
        client.subscribe({ query: gql(subTemplate) }).subscribe({
            next(res: any) {
                const data = client.readQuery({ query: gql(queryTemplate) });
                const value = res?.data[subName];
                data && client.writeQuery({ query: gql(queryTemplate), data: { [queryName]: [...data[queryName], value] } });
                cb && cb(value);
            },
        });
    };

    const query = () => useQuery<T>(gql(queryTemplate), {});

    return { sub, query };
};

export default queryWithSub;
