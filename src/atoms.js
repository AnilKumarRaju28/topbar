import { atom, selector } from "recoil";


export const networkAtom = atom({
    key:"networkAtom",
    default: 96
})
export const jobsAtom = atom({
    key:"jobsAtom",
    default: 25
})
export const notificationsAtom = atom({
    key:"notificationsAtom",
    default: 10
})
export const messagingAtom = atom({
    key:"messagingAtom",
    default: 0
})
export const totalNotificationSelector = selector({
    key:"totalNotificationSelector",
    get:({get}) =>{
        const networkAtomCount = get(networkAtom);
        const jobsAtomCount = get(jobsAtom);
        const notificationsAtomCount = get(notificationsAtom);
        const messagingAtomCount = get(messagingAtom);
        return networkAtomCount + jobsAtomCount + notificationsAtomCount + messagingAtomCount;
    }
})

// const totalNotificationCount = useMemo(() => {
//     return networkNotificationCount + jobsAtomCount + notificationsAtomCount + messagingAtomCount;
//   }, [networkNotificationCount, jobsAtomCount, notificationsAtomCount, messagingAtomCount])

//This selector syntax is similar to useMemo syntax 
