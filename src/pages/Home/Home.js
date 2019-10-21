import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

import { observer, inject } from 'mobx-react';

@inject('rootStore')
@observer
export default class HomeScreen extends Component {
  constructor (props) {
    super(props);
    this.state = {
      // 分类列表
      classifyList: []
    }
  }

  componentDidMount () {
    fetch('https://www.gengshaobin.top/api/book/list/base')
      .then(response => response.json())
      .then(resJSON => {
        console.log(resJSON)
        this.setState({
          classifyList: resJSON.classifyList
        })
      })
      .catch(err => {
        console.log('请求失败!', err)
      })
  }

  // 查看书籍信息
  handleGoBookInfo (book) {
    console.log(book)
    const { navigation } = this.props;
    navigation.navigate('BookInfo', { bookInfo: book });
  }

  render() {
    return (
      <ScrollView style={{paddingLeft: 15, paddingRight: 15}}>
        <StatusBar
          backgroundColor="#4bb8c5"
          barStyle="light-content"
        />
        <View>
          {
            this.state.classifyList.map((item, i) => {
              return (
                <View
                  key={i}
                  style={[styles.classifyItem]}>
                  <View style={[styles.classifyTitle]}>
                    <Text style={{fontSize: 18}}>{item.classifyName}</Text>
                    <Text>更多</Text>
                  </View>
                  <View style={[styles.bookList]}>
                    {
                      item.bookList.map((book, i) => {
                        return (
                          <TouchableOpacity  key={i} onPress={this.handleGoBookInfo.bind(this, book)}>
                            <View>
                              <Image source={{uri: book.bookCover}} style={styles.coverImg} />
                              <Text style={{textAlign: 'center'}}>{book.bookName}</Text>
                            </View>
                          </TouchableOpacity>
                        )
                      })
                    }
                  </View>
                </View>
              )
            })
          }
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  classifyItem: {},
  classifyTitle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40
  },
  bookList: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  coverImg: {
    width: 120,
    height: 160,
    resizeMode: 'stretch'
  }
});
