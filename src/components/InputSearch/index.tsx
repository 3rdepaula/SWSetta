import React from 'react'
import { SearchBar } from 'react-native-elements'
import styles from './styles'

interface InputSearchProps {
  placeholder: string
  onChangeText: (search: string) => Promise<void>
  value: string
}

function InputSearch ({ placeholder, onChangeText, value }: InputSearchProps): JSX.Element {
  return (
    <SearchBar
      platform='android'
      placeholder={placeholder}
      placeholderTextColor='#000'
      onChangeText={onChangeText}
      returnKeyType='search'
      keyboardAppearance='dark'
      searchIcon={{
        color: '#000'
      }}
      clearIcon={{
        color: '#000'
      }}
      cancelIcon={{
        color: '#000'
      }}
      leftIconContainerStyle={styles.leftIconContainerStyle}
      value={value}
      inputStyle={styles.inputStyle}
      containerStyle={styles.containerStyle}
    />
  )
}

export default InputSearch
