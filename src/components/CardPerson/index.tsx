import React, { useEffect, useState } from 'react'
import { FlatList, SafeAreaView, StyleSheet, View, Text, ListRenderItem, ActivityIndicator } from 'react-native'

import { PersonStarWarsProps, Result } from '../../types/person.type'

import api from '../../service/api'

function CardPerson (): JSX.Element {
  const [page, setPage] = useState<number>(1)
  const [data, setData] = useState<Result[]>([])
  const [loadingList, setLoadingList] = useState<boolean>(false)
  const [loadingScreen, setLoadingScreen] = useState<boolean>(false)

  useEffect(() => {
    setLoadingScreen(true)
    loadPerson()
  }, [])

  const loadPerson = (): void => {
    if (loadingList) return

    setLoadingList(true)

    api.get<PersonStarWarsProps>(`people/?page=${page}`).then((response) => {
      const listPerson = response.data.results
      const isNextPage = response.data.next !== null

      if (isNextPage) {
        setPage(page + 1)
        setData([...data, ...listPerson])
      }
    }).catch((error) => {
      console.log(error)
    }).finally(() => {
      setLoadingScreen(false)
      setLoadingList(false)
    })
  }

  const renderItem: ListRenderItem<Result> = ({ item }) => (
    <View style={styles.listItem}>
      <Text style={styles.textItem}>{item.name}</Text>
    </View>
  )

  const renderFooter = (): JSX.Element | null => {
    if (loadingList) return null
    return (
      <View style={styles.loading}>
        <ActivityIndicator size='large' />
      </View>
    )
  }

  return (
    <SafeAreaView>
      {loadingScreen ? (
        <View
          style={styles.loadScreen}
        >
          <ActivityIndicator size='large' />
        </View>
      ) : (
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
      )}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 20
  },

  listItem: {
    backgroundColor: '#000',
    borderRadius: 8,
    marginTop: 20,
    padding: 30
  },

  textItem: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center'
  },

  loadScreen: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  loading: {
    alignSelf: 'center',
    marginVertical: 20
  }
})

export default CardPerson
