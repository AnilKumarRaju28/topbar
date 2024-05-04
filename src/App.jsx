import { RecoilRoot, useRecoilValue } from "recoil"
import { jobsAtom, messagingAtom, networkAtom, notificationsAtom } from "./atoms"

//line 5 must be wrapped inside <RecoilRoot/>

function App() {
  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>

}
function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom)
  const jobsAtomCount = useRecoilValue(jobsAtom)
  const notificationsAtomCount = useRecoilValue(notificationsAtom)
  const messagingAtomCount = useRecoilValue(messagingAtom)

  return (
    <>
      <button>Home</button>

      <button>My Network({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>
      <button>Jobs ({jobsAtomCount})</button>
      <button>Messaging({messagingAtomCount})</button>
      <button>Notifications({notificationsAtomCount})</button>

      <button>Me</button>
    </>
  )
}
export default App
