import { useLazyQuery, useMutation, useQuery } from '@apollo/client';

import queryBuilders from './queryBuilders';

interface IQueryProps {
    name: string;
    variables: object;
    fields?: any[];
    returned?: any;
}

function useApollo() {
    const query = <T extends IQueryProps>(props: Omit<T, 'returned'>) => {
        const build = queryBuilders(props);

        return useQuery(build, { variables: props.variables });
    };

    const lazyQuery = <T extends IQueryProps>(props: Omit<T, 'returned'>) => {
        const build = queryBuilders(props);
        const [query, data] = useLazyQuery(build, { variables: props.variables });

        const get = async (data?: any): Promise<{ data: T['returned'] }> => {
            return await query({ variables: data });
        };

        return { get, data };
    };

    const mutation = <T extends IQueryProps>(props: Omit<T, 'returned'>) => {
        const build = queryBuilders(props, true);

        const [set, data] = useMutation(build, { variables: props.variables });

        const mutation = async (data?: T['variables']) => {
            return await set({ variables: data });
        };

        return { mutation, data };
    };

    return { query, lazyQuery, mutation };
}

export default useApollo;
