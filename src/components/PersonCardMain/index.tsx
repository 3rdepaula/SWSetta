import React, { useEffect, useState } from 'react'
import { FlatList, SafeAreaView, View, Text, ListRenderItem, ActivityIndicator, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'

import { PersonStarWarsProps, Result } from '../../types/person.type'

import api from '../../service/api'
import styles from './styles'
import InputSearch from '../InputSearch'

function PersonCardMain (): JSX.Element {
  const navigation = useNavigation()
  const [page, setPage] = useState<number>(1)
  const [data, setData] = useState<Result[]>([])
  const [filterPerson, setFilterPerson] = useState<Result[]>([])
  const [isLoadingList, setIsLoadingList] = useState<boolean>(false)
  const [isLoadingScreen, setIsLoadingScreen] = useState<boolean>(false)
  const [search, setSearch] = useState<string>('')

  useEffect(() => {
    setIsLoadingScreen(true)
    loadPerson()
  }, [])

  const querySearch = async (search: string): Promise<void> => {
    setSearch(search)
    if (search !== '') {
      const personFilters = data.filter(function (item: Result): boolean {
        const itemData = item.name ? item.name.toUpperCase() : ''
        const textData = search.toUpperCase()
        return itemData.includes(textData)
      })
      setFilterPerson(personFilters)
    } else {
      setFilterPerson(data)
    }
  }

  const loadPerson = (): void => {
    if (isLoadingList) return

    setIsLoadingList(true)

    api.get<PersonStarWarsProps>(`people/?page=${page}`).then((response) => {
      const listPerson = response.data.results
      const isNextPage = response.data.next !== null
      const joinArrays = [...data, ...listPerson]

      // páginação scroll infinito
      if (isNextPage) {
        if (search === '') {
          setPage(page + 1)
          setData(joinArrays)
          setFilterPerson(joinArrays)
        }
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
    if (isLoadingList || search !== '') {
      return null
    }
    return (
      <View style={styles.loading}>
        <ActivityIndicator size='large' />
      </View>
    )
  }

  return (
    <SafeAreaView style={{ marginBottom: 100 }}>
      {isLoadingScreen ? (
        <View
          style={styles.loadScreen}
        >
          <ActivityIndicator size='large' />
        </View>
      ) : (
        <>
          <InputSearch
            placeholder='Pesquise seu personagem favorito'
            onChangeText={querySearch}
            value={search}
          />

          {data.length > 0 ? (
            <>
              {filterPerson.length > 0 ? (
                <FlatList
                  style={{ marginTop: 30 }}
                  contentContainerStyle={styles.list}
                  data={filterPerson}
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
          ) : (
            <Text style={styles.textDefault}>Nenhum personagem econtrado :(</Text>
          )}
        </>
      )}
    </SafeAreaView>
  )
}

export default PersonCardMain
