import {Component} from 'react'

import {VscBold} from 'react-icons/vsc'

import {GoItalic} from 'react-icons/go'

import {AiOutlineUnderline} from 'react-icons/ai'

import {
  AppContainer,
  TextEditorContainer,
  HeadingAndImageContainer,
  Heading,
  Image,
  TextContainer,
  IconsContainer,
  TextArea,
  ListItem,
  BoldIconButton,
  ItalicIconButton,
  UnderlineIconButton,
} from './styledComponents'

class TextEditor extends Component {
  state = {
    enteredText: '',
    isBoldActive: false,
    isItalicActive: false,
    isUnderlineActive: false,
  }

  onChangeText = event => {
    this.setState({enteredText: event.target.value})
  }

  onClickBoldButton = () => {
    this.setState(prevState => ({isBoldActive: !prevState.isBoldActive}))
  }

  onClickItalicButton = () => {
    this.setState(prevState => ({isItalicActive: !prevState.isItalicActive}))
  }

  onClickUnderlineButton = () => {
    this.setState(prevState => ({
      isUnderlineActive: !prevState.isUnderlineActive,
    }))
  }

  render() {
    const {
      enteredText,
      isBoldActive,
      isItalicActive,
      isUnderlineActive,
    } = this.state
    return (
      <AppContainer>
        <TextEditorContainer>
          <HeadingAndImageContainer>
            <Heading> Text Editor </Heading>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </HeadingAndImageContainer>
          <TextContainer>
            <IconsContainer>
              <ListItem>
                <BoldIconButton
                  type="button"
                  data-testid="bold"
                  isActive={isBoldActive}
                  onClick={this.onClickBoldButton}
                >
                  <VscBold />
                </BoldIconButton>
              </ListItem>

              <ListItem>
                <ItalicIconButton
                  type="button"
                  data-testid="italic"
                  isActive={isItalicActive}
                  onClick={this.onClickItalicButton}
                >
                  <GoItalic />
                </ItalicIconButton>
              </ListItem>

              <ListItem>
                <UnderlineIconButton
                  type="button"
                  data-testid="underline"
                  isActive={isUnderlineActive}
                  onClick={this.onClickUnderlineButton}
                >
                  <AiOutlineUnderline />
                </UnderlineIconButton>
              </ListItem>
            </IconsContainer>
            <TextArea
              type="text"
              cols="50"
              rows="20"
              value={enteredText}
              onChange={this.onChangeText}
              boldText={isBoldActive}
              italicText={isItalicActive}
              underlineText={isUnderlineActive}
            />
          </TextContainer>
        </TextEditorContainer>
      </AppContainer>
    )
  }
}

export default TextEditor
