import { useContext } from "react"
import { LogContext } from "<@FMaidana07>/components/context"



const category = () => {
  const { router } = useContext(LogContext)
  const { category } = router.query
  return (
    <div>{category}</div>
  )
}

export default category