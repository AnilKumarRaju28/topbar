import { atom } from "recoil";


export const networkAtom = atom({
    key:"networkAtom",
    default: 650
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
