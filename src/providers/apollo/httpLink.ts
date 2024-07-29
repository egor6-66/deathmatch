import { HttpLink } from '@apollo/client';

const httpLink = new HttpLink({
    uri: `http://localhost:5000/graphql`,
    credentials: 'include',
});

export default httpLink;
