import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity,Image } from 'react-native';
import { ListItem } from 'react-native-elements';
import db from '../config';
import firebase from 'firebase';


export default class BookDonate extends React.Component {
  constructor() {
    super();
    this.state = {
      requestedBooksList: [],
    };
    this.requestRef = null;
  }

  getRequestedBookList = () => {
    this.requestRef = db
      .collection('requested_books')
      .onSnapshot((snapshot) => {
        var requestedBooksList = snapshot.docs.map((document) =>
          document.data()
        );
        this.setState({
          requestedBooksList: requestedBooksList,
        });
      });
  };

  componentDidMount() {
    this.getRequestedBookList();
  }

  componentWillUnmount() {
    this.requestRef();
  }

keyExtractor=(item,index)=>index.toString()

renderItem=({item,i})=>{
  return(
    <ListItem
    key={i}
    title={item.book_name}
    subtitle={item.reason_to_request}
    titleStyle={{color:'black',fontWeight:'bold'}}
    leftElement={
      <Image style={{height:50,width:40}}
      source={{uri:item.image_link,}}
      />
    }
    rightElement={
      <TouchableOpacity style={styles.button}
      onPress={()=>{
        this.props.navigation.navigate('RecieverDetails',{'details':item})
      }}>
      <Text style={{color:'black'}}>View</Text>
      </TouchableOpacity>
    }
    bottomDivider
    />

  )
}


  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          {this.state.requestedBooksList.length === 0 ? (
            <View style={styles.subContainer}>
              <Text style={{ fontSize: 20 }}>List Of All Requested Books</Text>
            </View>
          ) : (
            <FlatList
              keyExtractor={this.keyExtractor}
              data={this.state.requestedBooksList}
              renderItem={this.renderItem}
            />
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  subContainer: {
    flex: 1,
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 100,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#32867D',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
  },
});