import { SnackBarContainer } from "./style"

const SnackBar = ({backgroundColor, children}) => {
  return (
    <SnackBarContainer backgroundColor={backgroundColor}>{children}</SnackBarContainer>
  )
}

export default SnackBar