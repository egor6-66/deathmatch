import { gameServersApi } from '@/shared/gql';

function gqlSub() {
    gameServersApi.allServers().sub();
}

export default gqlSub;
