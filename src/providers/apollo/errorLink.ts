import { fromPromise, gql } from '@apollo/client';
import { onError } from '@apollo/client/link/error';

import { client } from './index';

let isRefreshing = false;
let pendingRequests: Array<() => void> = [];

const setIsRefreshing = (value: boolean) => {
    isRefreshing = value;
};

const addPendingRequest = (pendingRequest: () => void) => {
    pendingRequests.push(pendingRequest);
};

const refresh = async () => {
    await client.query({
        query: gql`
            query refreshToken {
                refreshToken
            }
        `,
    });
};

const resolvePendingRequests = () => {
    pendingRequests.map((callback) => callback());
    pendingRequests = [];
};

const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (graphQLErrors) {
        for (const err of graphQLErrors) {
            if (err.path?.length && err?.path[0] === 'login') return;

            switch (err?.message) {
                case 'Unauthorized':
                    if (err.path?.length && err.path[0] === 'refreshToken') {
                        resolvePendingRequests();
                        setIsRefreshing(false);

                        return forward(operation);
                    }

                    if (!isRefreshing) {
                        setIsRefreshing(true);

                        return fromPromise(refresh()).flatMap(() => {
                            resolvePendingRequests();
                            setIsRefreshing(false);

                            return forward(operation);
                        });
                    } else {
                        return fromPromise(
                            new Promise((resolve) => {
                                addPendingRequest(() => resolve(null));
                            })
                        ).flatMap(() => {
                            return forward(operation);
                        });
                    }
            }
        }
    }
});

export default errorLink;
