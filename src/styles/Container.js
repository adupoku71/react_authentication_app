import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* background: coral; */
  width: 100%;
  /* min-height: 400px; */
  padding: 40px 0;
  flex-grow: 1;
`
export const ResetContainer = styled(Container)`
  @media screen and (max-width: 450px) {
    padding: 20px 0;
  }
`
