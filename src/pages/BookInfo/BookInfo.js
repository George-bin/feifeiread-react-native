import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';

export default class BookInfoScreen extends Component {
  constructor (props) {
    super(props);
    this.state = {
      bookInfo: {}
    };
  }

  componentDidMount () {
    let { bookInfo } = this.props.navigation.state.params;
    bookInfo = JSON.parse(JSON.stringify(bookInfo));
    bookInfo.label = JSON.parse(bookInfo.label);
    // console.log('params:', params);
    this.setState({
      bookInfo
    });
  }

  render () {
    let { bookInfo } = this.state;
    return (
      <View>
        <View style={[styles.bookBaseInfo]}>
          <View style={[styles.bookBaseInfoLeft]}>
            <View><Text>{bookInfo.bookName}</Text></View>
            <View><Text>{bookInfo.author}(作者)</Text></View>
            {/*<View>*/}
              {/*{*/}
                {/*bookInfo.label && bookInfo.label.map((item, i) => {*/}
                  {/*return (*/}
                    {/*<Text key={i}>{item}</Text>*/}
                  {/*)*/}
                {/*})*/}
              {/*}*/}
            {/*</View>*/}
          </View>
          <View style={[styles.bookBaseInfoRight]}>
            <Image source={{uri: bookInfo.bookCover}} style={styles.coverImg}></Image>
          </View>
        </View>
        <Text>书籍信息</Text>
        <Text>书籍信息</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  bookBaseInfo: {
    flex: 1,
    flexDirection: 'flex',
    // justifyContent: 'space-between',
    paddingTop: 10,
    paddingRight: 16,
    paddingBottom: 16,
    paddingLeft: 10,
    backgroundColor: '#4bb8c5'
  },
  bookBaseInfoLeft: {},
  bookBaseInfoRight: {},
  coverImg: {
    width: 120,
    height: 160,
    resizeMode: 'stretch'
  }
})
