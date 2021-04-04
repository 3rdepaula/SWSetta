import React, { useEffect, useState } from 'react'
import { FlatList, SafeAreaView, View, Text, ListRenderItem, ActivityIndicator, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'

import { PersonStarWarsProps, Result } from '../../types/person.type'

import api from '../../service/api'
import styles from './styles'

function PersonCardMain (): JSX.Element {
  const navigation = useNavigation()
  const [page, setPage] = useState<number>(1)
  const [data, setData] = useState<Result[]>([])
  const [isLoadingList, setIsLoadingList] = useState<boolean>(false)
  const [isLoadingScreen, setIsLoadingScreen] = useState<boolean>(false)

  useEffect(() => {
    setIsLoadingScreen(true)
    loadPerson()
  }, [])

  const loadPerson = (): void => {
    if (isLoadingList) return

    setIsLoadingList(true)

    api.get<PersonStarWarsProps>(`people/?page=${page}`).then((response) => {
      const listPerson = response.data.results
      const isNextPage = response.data.next !== null

      // páginação scroll infinito
      if (isNextPage) {
        setPage(page + 1)
        setData([...data, ...listPerson])
      }
    }).catch(() => {
      Alert.alert('Desculpe', 'Ocorreu um erro em nosso sistema, tente novamente mais tarde.')
    }).finally(() => {
      setIsLoadingScreen(false)
      setIsLoadingList(false)
    })
  }

  const renderItem: ListRenderItem<Result> = ({ item }) => (
    <View>
      <RectButton onPress={() => navigation.navigate('Detalhes', { details: item })} style={styles.listItem}>
        <Text style={styles.textItem}>{item.name}</Text>
      </RectButton>
    </View>
  )

  const renderFooter = (): JSX.Element | null => {
    if (isLoadingList) return null
    return (
      <View style={styles.loading}>
        <ActivityIndicator size='large' />
      </View>
    )
  }

  return (
    <SafeAreaView>
      {isLoadingScreen ? (
        <View
          style={styles.loadScreen}
        >
          <ActivityIndicator size='large' />
        </View>
      ) : (
        <>
          {data.length > 0 ? (
            <FlatList
              style={{ marginTop: 30 }}
              contentContainerStyle={styles.list}
              data={data}
              renderItem={renderItem}
              keyExtractor={(_: Result, index: number) => index.toString()}
              onEndReached={loadPerson}
              onEndReachedThreshold={0.1}
              ListFooterComponent={renderFooter}
            />
          ) : (
            <Text style={styles.textDefault}>Nenhum personagem econtrado :(</Text>
          )}
        </>
      )}
    </SafeAreaView>
  )
}

export default PersonCardMain
