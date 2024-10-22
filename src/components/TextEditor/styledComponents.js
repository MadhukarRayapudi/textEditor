import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  background-color: #25262c;
`

export const TextEditorContainer = styled.div`
  background-color: #1b1c22;
  padding: 12px;
  width: 90%;
  display: flex;
  justify-content: space-between;
`

export const HeadingAndImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
`

export const Heading = styled.h1`
  font-family: roboto;
  font-size: 32px;
  color: #ffffff;
  text-algn: center;
  margin-bottom: 120px;
`

export const Image = styled.img`
  height: 400px;
  width: 100%;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const TextArea = styled.textarea`
  background-color: #25262c;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  font-family: roboto;
  color: #ffffff;
  padding: 14px;
  font-size: 18px;
  border: 1px solid #f1f5f9;
  height: 100%;
  font-weight: ${props => (props.boldText ? 'bold' : 'normal')};
  font-style: ${props => (props.italicText ? 'italic' : 'normal')};
  text-decoration: ${props => (props.underlineText ? 'underline' : 'normal')};
  width: 100%;
`

export const IconsContainer = styled.ul`
  display: flex;
  padding: 12px;
  background-color: #25262c;
  border: 1px solid #f1f5f9;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  margin-bottom: -12px;
`

export const ListItem = styled.li`
  margin-right: 12px;
  list-style-type: none;
`

export const BoldIconButton = styled.button`
  color: ${props => (props.isActive ? '#faff00' : '#f1f5f9')};
  background-color: transparent;
  border: 0;
  font-size: 20px;
`

export const ItalicIconButton = styled.button`
  color: ${props => (props.isActive ? '#faff00' : '#f1f5f9')};
  background-color: transparent;
  border: 0;
  font-size: 20px;
  margin-right: 12px;
`

export const UnderlineIconButton = styled.button`
  color: ${props => (props.isActive ? '#faff00' : '#f1f5f9')};
  background-color: transparent;
  border: 0;
  font-size: 20px;
  margin-right: 12px;
`
