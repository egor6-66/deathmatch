import useZustand from 'react-use-zustand';
import { MotionProps } from 'framer-motion';

type Store = {
    motion: MotionProps;
};

type Methods = {
    motion: {
        set: (value: MotionProps) => void;
    };
};

const routingTransitionStore = useZustand<Store, Methods>({
    keys: ['motion'],
    default: {
        motion: {
            animate: { x: 0, y: 0 },
        },
    },
    methods: {
        motion: (use) => ({
            set: (value) => {
                const { updater } = use();

                updater({ motion: { ...value, animate: { x: 0, y: 0 } } });
            },
        }),
    },
});

export default routingTransitionStore;
