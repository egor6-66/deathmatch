import { useCallback, useEffect, useRef } from 'react';

// import freeice from 'freeice';
import useStateWithCallback from '@/shared/hooks/useStateWithCallback';
import { IUser } from '@/shared/interfaces/user';

interface IProps {
    viewer?: IUser;
    users?: IUser[];
}

function useWebRTC(props: IProps) {
    const { viewer, users } = props;

    const [clients, updateClients] = useStateWithCallback<number[]>([]);

    // const peerConnections = useRef<Record<number, RTCPeerConnection>>({});
    // const localMediaStream = useRef<MediaStream | null>(null);

    const peerMediaElements = useRef<Record<string, HTMLVideoElement>>({});

    const provideMediaRef = useCallback((id: number, node: HTMLVideoElement) => {
        peerMediaElements.current[id] = node;
    }, []);

    // const addNewClient = useCallback((newClient: any, cb: any) => {
    //     // if (!clients.includes(newClient)) {
    //     //     updateClients((list) => [...list, newClient], cb);
    //     // }
    // }, []);

    // useEffect(() => {
    //     if (users?.length) {
    //         users.forEach((user) => {
    //             const candidate = null;
    //
    //             if (user.id !== viewer?.id) {
    //                 peerConnections.current[user.id] = new RTCPeerConnection({
    //                     iceServers: freeice(),
    //                 });
    //
    //                 peerConnections.current[user.id].onicecandidate = (event) => {
    //                     // console.log('waddwd', event);
    //
    //                     if (event.candidate) {
    //                         peerConnections.current[user.id].addIceCandidate(new RTCIceCandidate(event.candidate));
    //                     }
    //                 };
    //
    //                 peerConnections.current[user.id].ontrack = ({ streams: [remoteStream] }) => {
    //                     addNewClient(user.id, () => {
    //                         peerMediaElements.current[user.id].srcObject = remoteStream;
    //                     });
    //                 };
    //
    //                 localMediaStream.current?.getTracks().forEach((track) => {
    //                     peerConnections.current[user.id].addTrack(track, localMediaStream.current as MediaStream);
    //                 });
    //
    //                 peerConnections.current[user.id].createOffer().then((res) => {
    //                     peerConnections.current[user.id].setLocalDescription(res);
    //                 });
    //             }
    //         });
    //     }
    // }, [users?.length]);
    //
    // useEffect(() => {
    //     const bootstrap = async function startCapture() {
    //         if (viewer) {
    //             localMediaStream.current = await navigator.mediaDevices.getUserMedia({
    //                 audio: true,
    //                 video: true,
    //             });
    //
    //             addNewClient(viewer?.id, () => {
    //                 const localVideoElement = peerMediaElements.current[viewer?.id];
    //
    //                 if (localVideoElement && localMediaStream.current) {
    //                     localVideoElement.volume = 0;
    //                     localVideoElement.srcObject = localMediaStream.current as MediaStream;
    //                 }
    //             });
    //         }
    //     };
    //
    //     bootstrap()
    //         .then(() => {
    //             console.log('eeeeee');
    //         })
    //         .catch(() => {
    //             console.log('noooo');
    //         });
    //
    //     return () => {
    //         localMediaStream.current?.getTracks().forEach((track) => track.stop());
    //     };
    // }, [viewer]);

    return { clients, provideMediaRef };
}

export default useWebRTC;
